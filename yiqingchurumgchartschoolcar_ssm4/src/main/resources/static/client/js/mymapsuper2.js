
let map = null;
let _mappagetype = 1;
let initedMap = false;
const _currentCity = "重庆市";

$(function(){
    //initedMap();
});


function toMapPage(type){
    _mappagetype = type;
    changePage('mappage');
    if(map==null){
        setTimeout(function (){
            initMap();
        },500);
    }

    setTimeout(function (){
        ajaxCallback("listJ",{table:"shop"},function (data) {
            map && map.clearOverlays();
            addMarketListByAddress(data);
        });
    },1000);

}

function initMap(cb){
    // 百度地图API功能
    if(!initedMap){
        map = new BMap.Map("allmap");    // 创建Map实例
        initedMap = true;
        map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
        // 添加带有定位的导航控件
        let navigationControl = new BMap.NavigationControl({
            // 靠左上角位置
            anchor: BMAP_ANCHOR_TOP_LEFT,
            // LARGE类型
            type: BMAP_NAVIGATION_CONTROL_LARGE,
            // 启用显示定位
            enableGeolocation: true
        });
        map.addControl(navigationControl);
        let top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});
        map.addControl(top_left_control);
        /*let mpoint = new BMap.Point(106.321254,29.554093);
        map.centerAndZoom(mpoint, 12)  // 初始化地图,设置中心点坐标和地图级别
        map.enableScrollWheelZoom(true);    //开启鼠标滚轮缩放
        let scaleCtrl = new BMap.ScaleControl();  // 添加比例尺控件
        map.addControl(scaleCtrl);
        let zoomCtrl = new BMap.ZoomControl();  // 添加比例尺控件
        map.addControl(zoomCtrl);*/

        // 设置为地球卫星地图模式
        //map.setMapType(BMAP_EARTH_MAP);


        // 创建定位控件
        let locationControl = new BMap.GeolocationControl({
            // 控件的停靠位置（可选，默认左上角）
            anchor: BMAP_ANCHOR_TOP_RIGHT,
            // 控件基于停靠位置的偏移量（可选）
            offset: new BMap.Size(20, 40)
        });
        // 将控件添加到地图上
        map.addControl(locationControl);

        // 添加定位事件
        locationControl.addEventListener("locationSuccess", function(e){
            let address = '';
            address += e.addressComponent.province;
            address += e.addressComponent.city;
            address += e.addressComponent.district;
            address += e.addressComponent.street;
            address += e.addressComponent.streetNumber;
            //alert("当前定位地址为：" + address);
        });
        locationControl.addEventListener("locationError",function(e){
            //alert(e.message);
        });
    }else{
        cb && cb();
    }

    /*setTimeout(function (){
        dingwei();
    },1000);*/
}



function getLocationBaidumap(cb){
    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function(r){
        if(this.getStatus() == BMAP_STATUS_SUCCESS){
            /*var mk = new BMap.Marker(r.point);
            map.addOverlay(mk);
            map.panTo(r.point);*/
            //alert('您的位置：'+r.point.lng+','+r.point.lat);
            var myGeo = new BMap.Geocoder({extensions_town: true});
            myGeo.getLocation(r.point, function(result){
                if (result){
                    var city = result.addressComponents.city;
                    var address = result.address;
                    cb && cb(address);
                }
            });
        }
        else {
            alert('failed'+this.getStatus());
        }
    });
}

function dingwei(){
    let glocation = new BMap.Geolocation();
    glocation.getCurrentPosition(function (e){
        let point = e.point;
        let marker1 = new BMap.Marker(point);
        map.addOverlay(marker1);
        map.centerAndZoom(point, 12);
    },function (er){
        alert(er)
    }, {
        enableHighAccuracy:true,
        timeout:20,
        SDKLocation:true
    })
}

//通过对象的地址把对象绘制到地图上
async function addMarketListByAddress(objlist){
    for (let i = 0; i < objlist.length; i++) {
        let cpoint = objlist[i];
        let robj = await getObjPointByAddress(cpoint);
        addRemarkMarket(robj);
        if(i==0){
            let mpoint = new BMap.Point(robj.longitude,robj.latitude);
            map.centerAndZoom(mpoint, 16)
        }
    }
}

function addRemarkMarket(obj){
    let mpoint = new BMap.Point(obj.longitude,obj.latitude);
    let myCompOverlay = new ComplexCustomOverlay(mpoint, obj,function(el){
        //alert(el.dataset.json);
        let eldata = JSON.parse(el.dataset.json);
        //alert(eldata);
        shopDetail(eldata.id);
        //openSendDialog(eldata);
    });
    map.addOverlay(myCompOverlay);
}


// 关键字检索
function searchDidian(str){
    initMap(function (){
        let local = new BMap.LocalSearch(map, {
            renderOptions:{map: map}
        });
        local.search(str);
    })

}

//通过地址对象获取带经纬度的对象
function getObjPointByAddress(obj){
    let myGeo = new BMap.Geocoder();
    return new Promise(function (resolve, reject) {
        myGeo.getPoint(obj.address, function (point) {
            if (point) {
                obj.latitude = point.lat;
                obj.longitude = point.lng;
                resolve(obj);
            }
        }, _currentCity);
    });
    /*gecodePromise.then(function (robj){
        alert(robj);
    });*/
}
//通过地址字符串获取地址对象
function getPointByAddress(address){
    let myGeo = new BMap.Geocoder();
    return new Promise(function (resolve, reject) {
        myGeo.getPoint(address, function (point) {
            if (point) {
                let obj = {};
                obj.latitude = point.lat;
                obj.longitude = point.lng;
                resolve(obj);
            }
        }, _currentCity);
    });
    /*gecodePromise.then(function (robj){
        alert(robj);
    });*/
}
//通过经纬度获取地址
function getObjAddressByPoint(obj){
    let geoc = new BMap.Geocoder();
    return new Promise(function (resolve, reject) {
        let pt = new BMap.Point(obj.longitude,obj.latitude);
        geoc.getLocation(pt, function(rs){
            let addComp = rs.addressComponents;
            let address = addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber;
            resolve(address);
        })
    });
    /*gecodePromise.then(function (robj){
        alert(robj);
    });*/

}

function searchAddress(){
    initMap(function (){
        showLoader("请稍候...");
        let address = $("#search").val();
        let myGeo = new BMap.Geocoder();
        // 将地址解析结果显示在地图上,并调整地图视野
        myGeo.getPoint(address, function(point){
            if (point) {
                //map.centerAndZoom(point, 16);
                map.addOverlay(new BMap.Marker(point));
                hideLoader();
            }else{
                alert("您选择地址没有解析到结果!");
            }
        }, _currentCity);
    })

}

/**
 *
 * @param list
 */
function drawLine(list){
    initMap(function (){
        let points = [];
        for (let i = 0; i < list.length; i++) {
            let p = new BMap.Point(list[i].longitude, list[i].latitude);
            points.push(p);
        }
        let polyline = new BMap.Polyline(points, {strokeColor:"blue", strokeWeight:2, strokeOpacity:0.5});
        map.addOverlay(polyline);
        map.centerAndZoom(points[0], 14);
    })

}


function toWxMap(){
    /*var myGeo = new BMap.Geocoder();
    myGeo.getPoint(focusobj.address, function(point){
        if (point) {
            focusobj.latitude = point.lat;
            focusobj.longitude = point.lng;
            openTxmap();
        }

    }, "重庆市");*/

    let myGeo = new BMap.Geocoder();
    // 将地址解析结果显示在地图上,并调整地图视野
    myGeo.getPoint(focusobj.address, function(point){
        if (point) {
            focusobj.latitude = point.lat;
            focusobj.longitude = point.lng;
            openTxmap();
        }else{
            alert("您选择地址没有解析到结果!");
        }
    }, _currentCity);
}


// 复杂的自定义覆盖物
function ComplexCustomOverlay(point, jsondata, clickback){
    this._point = point;
    this._jsondata = jsondata;
    this._clickback = clickback;
}
ComplexCustomOverlay.prototype = new BMap.Overlay();
ComplexCustomOverlay.prototype.initialize = function(map){
    this._map = map;
    let div = this._div = document.createElement("div");
    div.style.zIndex = BMap.Overlay.getZIndex(this._point.lat);
    div.className="mappointer";
    div.style.position = "absolute";
    div.style.height = "50px";
    div.style.width = "50px";
    div.style['background-size'] = "50px 50px";
    div.id = "mark"+this._jsondata.id;
    div.dataset.json = JSON.stringify(this._jsondata);
    div.style.backgroundImage="url('"+fileurl+this._jsondata.img+"')";
    let callback = this._clickback;
    $(div).touchstart(function(){
        callback && callback(this);
    });
    $(div).click(function(){
        callback && callback(this);
    });
    map.getPanes().labelPane.appendChild(div);
    return div;
};
ComplexCustomOverlay.prototype.draw = function(){
    let map = this._map;
    let pixel = map.pointToOverlayPixel(this._point);
    this._div.style.left = pixel.x+25 + "px";
    this._div.style.top  = pixel.y+100 + "px";
};


function openTxmap() {
    wx.miniProgram.navigateTo({url: '../myObj/myObj?lat='+focusobj.latitude+"&lng="+focusobj.longitude+"&address="+focusobj.address});//跳转到小程序调用微信扫一扫页面
}