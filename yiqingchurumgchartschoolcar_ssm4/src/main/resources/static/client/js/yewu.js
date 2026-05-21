



var focuslist = [];
var focusshop = null;
var focuszhuanye = null;
var focusobj = null;



$(function(){

    /*$("div[data-role='header']").addClass("ideaheader");
    $("div[data-role='footer']").addClass("ideafooter");
    $("div[data-role='navbar']").addClass("ideafooter");
    $("div[data-role='page']").addClass("ideapage");*/

    //$("div[data-role='header']").addClass("ideaheader");
    /*$("div[data-role='footer']").addClass("ideafooter");
    $("div[data-role='navbar']").addClass("ideafooter");*/
    //$("div[data-role='page']").addClass("ideapage");



    $("#pinglunclick").click(function(e){
        var offsetx = e.offsetX;
        var widht = 0;
        if(offsetx>0 && offsetx<35){
            widht = 35;
        }else if(offsetx>=35 && offsetx<70){
            widht = 70;
        }else if(offsetx>=70 && offsetx<105){
            widht = 105;
        }else if(offsetx>=105 && offsetx<140){
            widht = 140;
        }else if(offsetx>=140){
            widht = 175;
        }
        $("#starwidht").css({width:widht+"px"});
    });
});

function toIframe(flag){
    //window.location.href="http://www.baidu.com";
    changePage("webcontent");
    //if (flag==1){
    $("#webtitle").text("疫情地图");
    $("#webiframe").attr("src","https://voice.baidu.com/act/newpneumonia/newpneumonia");
    /*}else{
        $("#webtitle").text("");
        $("#webiframe").attr("src","http://www.54new.com");
    }*/

}

var iscreate = false;
function makeCode (str,yanse) {
    yanse = yanse || "#00ff00";
    if(iscreate==false){
        var _qrcode = new QRCode(document.getElementById("qrcode"), {
            width : 200,
            height : 200,
            colorDark : yanse,
            colorLight : '#ffffff',
        });
        _qrcode.makeCode(str);
        iscreate = true;
    }

}
function toMain(){
    //toChuru();
    changePage("homepage");
    setTimeout(function (){
        initswiper();
    },500);
    if(userinfo.roletype=="1" || userinfo.roletype=="3"){
        $(".admin").show();
    }else{
        $(".admin").hide();
    }
    ajaxCallback("listJ",{table:"notice"},function (data) {
        var p666 = {};
        p666.tpl = '<li onclick="noticeDetail(%s)">'+
            '<h2>%s</h2>'+
            '<p>%s</p>'+
            '</li>';
        p666.colums = ["id","title","ndate"];
        $("#homelist").data("property",JSON.stringify(p666));
        $("#homelist").refreshShowListView(data);
    });
}

function toChuru(){
    changePage("mainpage");
    listChuru();
}


function listChuru(){
    var uid = userinfo.id;
    if(userinfo.roletype=="1"){
        uid = null;
    }
    ajaxCallback("listJ",{table:"record",uid:uid},function(data){
        focuslist = data;
        var p66662 = {};
        p66662.tpl = '<li>'+
            '<h2>%s</h2>'+
            '<p>%s</p>'+
            '<p style="color: red;">类型:%s</p>'+
            '</li>';
        p66662.colums = ["ndate","username","typecn"];
        $("#churulist").data("property",JSON.stringify(p66662));
        $("#churulist").refreshShowListView(data);
    });
}

var focuspost = {};
var focuslist = [];


function toLuntan(id){
    changePage("luntanpage");
    listPosts();
}
function listPosts(id){
    var p5 = {};
    p5.tpl = '<li><a href="#" onclick="postDetail(%s);">'+
        //'<img src="'+fileurl+'%s">'+
        '<h2>%s</h2>'+
        '<p>%s</p>'+
        '<p>%s   %s</p>'+
        '</a></li>';
    p5.colums = ["id","title","note","username","ndate"];
    $("#posts").data("property",JSON.stringify(p5));
    ajaxCallback("listJ",{uid:id,table:"posts"},function(data){
        focuslist = data;
        $("#posts").refreshShowListView(data);
    });
}
function toAddForm(){
    changePage("addformpage");
}
function addForm(){
    var note = $("#fnote").val();
    var title = $("#ftitle").val();

    ajaxFormUploadFile(function(r){
        ajaxCallback("saveJ",{ndate:getNdate(),uid:userinfo.id,title:title,note:note,username:userinfo.username,img:r,type:1,address:userinfo.address,table:"posts"},function(){
            toLuntan();
        });
    });

}
function postDetail(id){
    var obj = getObjectById(id,focuslist);
    focuspost = obj;
    changePage("postdetail");
    $("#vptitle").text("标题:"+obj.title);
    $("#vpnote").text("内容:"+obj.note);
    $("#vpusername").text("发布者:"+obj.username);
    $("#vpdate").text("提交时间:"+obj.ndate);
    //$("#vpdate12").text("位置:"+obj.address);
    listReplay();
    if(obj.img){
        $("#pimg").attr("src",fileurl+obj.img);
        $("#imgctn").show();
    }else{
        $("#imgctn").hide();
    }
    if(obj.uid == userinfo.id){
        $("#mypost").show();
    }else{
        $("#mypost").hide();
    }

}

function delPosts(){
    ajaxCallback("deleteJ",{id:focuspost.id,table:"posts"},function(data){
        toLuntan();
    });
}

function listReplay(){
    var p6 = {};
    p6.tpl = '<li>'+
        '<h2>%s</h2>'+
        '<p>%s</p>'+
        '<p>%s</p>'+
        '</li>';
    p6.colums = ["ndate","note","username"];
    $("#replays").data("property",JSON.stringify(p6));
    ajaxCallback("listJ",{pid:focuspost.id,table:"replay"},function(data){
        $("#replays").refreshShowListView(data);
    });
}
function addReplay(){
    var note = $("#rnote").val();

    if(note){
        ajaxCallback("saveJ",{pid:focuspost.id,uid:userinfo.id,username:userinfo.fname,note:note,type:1,ndate:getNdate(),table:"replay"},function(data){
            listReplay();
            $("#rnote").val("");
        });
    }

}

function toNotice(){
    changePage('noticepage');
    listNotice();
}
function listNotice(type){
    var p666 = {};
    p666.tpl = '<li onclick="noticeDetail(%s)">'+
        '<h2>%s</h2>'+
        '<p>%s</p>'+
        '</li>';
    p666.colums = ["id","title","ndate"];
    $("#noticelist").data("property",JSON.stringify(p666));
    ajaxCallback("listJ",{table:"notice",type:type},function(data){
        focuslist = data;
        $("#noticelist").refreshShowListView(data);
    });
}

function noticeDetail(id){
    ajaxCallback("findJ",{id:id,table:"notice"},function (data) {
        var obj = data;
        changePage('noticedetailpage');
        $("#vtitle").text(obj.title);

        let html = obj.note;
        if(html.indexOf("http://")==-1){
            html = html.replace(/upload/g,fileurl);
        }
        $("#vnote").html(html);
        $("#vndate").text("时间:"+obj.ndate);
        if(obj.img){
            $("#dimg").attr("src",fileurl+obj.img);
        }else{
            $("#dimg").hide();
        }
    });

}


function toAddShangbao(){
    changePage("shangbaomgpage");
    $("#sbaddress").val("定位中...");
    getLocationBaidumap(function (address){
        $("#sbaddress").val(address);
    });
}

function saveShangbao(){
    var fdata = serializeObject($("#shangbaoform"));
    fdata.username = userinfo.username;
    fdata.uid = userinfo.id;
    fdata.table="shangbao";
    fdata.gaowen = 0;
    if(fdata.tiwen*1>37){
        fdata.gaowen = 1
    }
    if(fdata.jkzk=="确诊" || fdata.jkzk=="疑似"){
        fdata.leibie = "红码";
    }else if(fdata.jkzk == "普通"){
        fdata.leibie = "绿码";
    }else if(fdata.jkzk == "发烧"){
        fdata.leibie = "黄码";
    }
    ajaxFormUploadFile(function (r){
        fdata.jkm = r;
        ajaxFormUploadFile2(function (r2){
            fdata.xcm = r2;
            ajaxCallback("saveJ",fdata,function (listdata) {
                toShangbao();
            });
        })
    })
}
function toChart(){
    changePage("chartpage");
    setTimeout(function (){
        ajaxCallback("listJ",{table:"record"},function (rlist) {
            var datelist = [];
            for (var i = 0; i < rlist.length; i++) {
                datelist.push((rlist[i].ndate).split(" ")[0]);
            }
            datelist = unique1(datelist);
            var valuelist = [];
            for (var i = 0; i < datelist.length; i++) {
                var d = datelist[i];
                var count = 0;
                for (var j = 0; j < rlist.length; j++) {
                    var r = rlist[j];
                    if((r.ndate).split(" ")[0] == d){
                        count++;
                    }
                }
                valuelist.push(count);
            }

            refreshChart(datelist,valuelist);
        });
    },500);
}

function refreshChart(xarray,yarray){

    var myChart = echarts.init(document.getElementById('mychat'));
    var option = {
        color: ['#3398DB'],
        tooltip : {
            trigger: 'axis',
            //formatter: "{a} <br/>{b}: {c} ({d}%)",
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : xarray,
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'人数',
                type:'bar',
                barWidth: '60%',
                data:yarray
            }
        ]
    };
    myChart.setOption(option);
}

function toShangbao(id){
    changePage("shangbaopage");
    var p666 = {};
    p666.tpl = '<li>'+
        '<h2>体温:%s</h2>'+
        '<p>行程:%s</p>'+
        '<p>用户:%s</p>'+
        '<p>时间:%s</p>'+
        '<p>备注:%s</p>'+
        '</li>';
    p666.colums = ["tiwen","xingcheng","username","ndate","note"];
    $("#shangbaolist").data("property",JSON.stringify(p666));
    var qobj = {table:"shangbao",uid:userinfo.id};
    if(userinfo.roletype=="1"){
        qobj = {table:"shangbao"};
    }
    ajaxCallback("listJ",qobj,function(data){
        focuslist = data;
        $("#shangbaolist").refreshShowListView(data);
    });
}

function toMyBill(){
    changePage("billpage");
    var ltpl = {};
    ltpl.tpl = '<li onclick="billDetail(%s);">'+
        '<h2>%s</h2>'+
        '<p>%s</p>'+
        '<p style="color: red;">%s</p>'+
        '</li>';
    ltpl.colums = ["id","note","ndate","statecn"];
    $("#billlist").data("property",JSON.stringify(ltpl));
    ajaxCallback("listJ",{table:"yuyue",btype:2},function (listdata) {
        focuslist = listdata;
        $("#billlist").refreshShowListView(listdata);
    })
}

function toAddBill(){
    changePage("billaddpage");
}

function saveBill(){
    var data = serializeObject($("#billform"));
    data.uid = userinfo.id;
    data.username = userinfo.username;
    data.statecn = "待处理";
    data.table = "yuyue";
    data.btype = 2;
    ajaxCallback("saveJ",data,function (data) {
        toMyBill();
    });
}

function billDetail(id){
    ajaxCallback("findJ",{table:"yuyue",id:id},function (data) {
        changePage("billdetailpage");
        $("#bnote").text("物资备注:"+data.note);
        $("#bstatecn").text("状态:"+data.statecn);
        $("#bndate").text("时间:"+data.ndate);
        var ltpl = {};
        ltpl.tpl = '<li>'+
            '<p>%s</p>'+
            '<p style="color: red;">%s</p>'+
            '</li>';
        ltpl.colums = ["note","ndate"];
        $("#billreplay").data("property",JSON.stringify(ltpl));
        ajaxCallback("listJ",{table:"yuyuereplay",pid:data.id},function (listdata) {
            $("#billreplay").refreshShowListView(listdata);
        })
    });
}



function toMyBill2(){
    changePage("billpage2");
    var ltpl = {};
    ltpl.tpl = '<li onclick="billDetail2(%s);">'+
        '<h2>%s</h2>'+
        '<p>%s</p>'+
        '<p style="color: red;">%s</p>'+
        '</li>';
    ltpl.colums = ["id","note","ndate","statecn"];
    $("#billlist2").data("property",JSON.stringify(ltpl));
    ajaxCallback("listJ",{table:"yuyue",btype:3},function (listdata) {
        focuslist = listdata;
        $("#billlist2").refreshShowListView(listdata);
    })
}

function toAddBill2(){
    changePage("billaddpage2");
}

function saveBill2(){
    var data = serializeObject($("#billform2"));
    data.uid = userinfo.id;
    data.username = userinfo.username;
    data.statecn = "待处理";
    data.table = "yuyue";
    data.btype = 3;
    ajaxCallback("saveJ",data,function (data) {
        toMyBill2();
    });
}

function billDetail2(id){
    ajaxCallback("findJ",{table:"yuyue",id:id},function (data) {
        changePage("billdetailpage2");
        $("#bnote2").text("预约内容:"+data.note);
        $("#bstatecn2").text("状态:"+data.statecn);
        $("#bndate2").text("预约时间:"+data.ndate);
    });
}






function toMyBill4(){
    changePage("billpage4");
    var ltpl = {};
    ltpl.tpl = '<li onclick="billDetail4(%s);">'+
        '<h2>%s</h2>'+
        '<p>%s</p>'+
        '<p style="color: red;">%s</p>'+
        '</li>';
    ltpl.colums = ["id","note","ndate","statecn"];
    $("#billlist4").data("property",JSON.stringify(ltpl));
    ajaxCallback("listJ",{table:"yuyue",btype:4},function (listdata) {
        focuslist = listdata;
        $("#billlist4").refreshShowListView(listdata);
    })
}

function toAddBill4(){
    changePage("billaddpage4");
}

function saveBill4(){
    var data = serializeObject($("#billform4"));
    data.uid = userinfo.id;
    data.username = userinfo.username;
    data.statecn = "待处理";
    data.table = "yuyue";
    data.btype = 4;
    ajaxCallback("saveJ",data,function (data) {
        toMyBill4();
    });
}

function billDetail4(id){
    ajaxCallback("findJ",{table:"yuyue",id:id},function (data) {
        changePage("billdetailpage4");
        $("#bnote2").text("预约内容:"+data.note);
        $("#bstatecn2").text("状态:"+data.statecn);
        $("#bndate2").text("预约时间:"+data.ndate);
    });
}