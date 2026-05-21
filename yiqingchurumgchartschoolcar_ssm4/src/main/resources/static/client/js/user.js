

/***************************************用户模块*******************************************/
$(function(){
    var uinfo = localStorage['userinfo'];
    var ercode = getSearchParam("ercode");
    if(ercode && ercode!=undefined && ercode!='undefined'){
        if(uinfo && $.trim(uinfo)!=""){
            userinfo  = JSON.parse(uinfo);
            toMain();
            ajaxCallback("findJ",{table:"user",id:ercode},function (data) {
                if(data){
                    _focususer = data;
                    _typecn="进校";
                    saveRecord();
                }
            });
        }
    }else if(uinfo && $.trim(uinfo)!=""){
        uinfo  = JSON.parse(uinfo);
        $("#lusername").val(uinfo.username);
        $("#lpasswd").val(uinfo.passwd);
        uinfo.remember = "1";
        login(uinfo);
    }

});
var userinfo = null;
function login(uinfo){
    var fdata = uinfo || serializeObject($("#loginform"));
    if($.trim(fdata.username)=="" || $.trim(fdata.passwd) == ""){
        showLoader("请输入用户名或密码！",true);
        return;
    }
    fdata.table="user";
    ajaxCallback("findJ",fdata,function(data){
       if(!data){
           showLoader("用户名或密码错误",true);
           changePage("loginpage");
       }else{

           showLoader("登录成功!",true);
           //bindClient();
           userinfo = data;
           toMain();
           //if(fdata.remember == "1"){
                localStorage["userinfo"] = JSON.stringify(data);
           /*}else{
               localStorage["userinfo"] = "";
           }*/


           //toGoods();
           /*if(userinfo.roletype==2){
                toVideoList();
           }else{
               ajaxCallback("getShop",{id:userinfo.sid},function(data){
                   focushop = data;
                   toMyBill();
                   startBillListLoop();
               });

           }*/


       }
    });
}

function toSettingPage(){
    changePage('settingpage')
}

function logout(){
    userinfo = null;
    localStorage['userinfo'] = "";
    toLogin();
}

function toRegister(){
    changePage("registerpage");
    $("#registerform")[0].reset();
}

function toLogin(){
    $($(':input','#loginform').get(1)).val("");
    changePage("loginpage");
}

function register(){

    var fdata = serializeObject($("#registerform"));
    if($.trim(fdata.username) == "" || $.trim(fdata.passwd) == "" || $.trim(fdata.tel) == ""){
        showLoader("请填写完整信息!",true);
        return;
    }
    if(fdata.tel.length<11){
        showLoader("电话号码格式不对!",true);
        return;
    }
    if(fdata.passwd != fdata.passwd2){
        showLoader("两次密码不一致!",true);
        return;
    }
    /*if(uploadFileUrl){
        uplaodImg(function(r){
            fdata.img = r;
            commitRegiesterInfo(fdata);
        });
    }else{*/
        commitRegiesterInfo(fdata);
    //}


}

function commitRegiesterInfo(fdata){
    fdata.table="user";
    fdata.roletype="2";
    ajaxCallback("findJ",{table:"user",username:fdata.username},function(d){
        if(!d){
            ajaxCallback("saveJ",fdata,function(r){
                if(r){
                    showLoader("注册成功!",true);
                    userinfo = fdata;
                    userinfo.id = r.info;
                    //addAddress();
                    toLogin();
                }else{
                    showLoader("注册失败请稍候再试!",true);
                }
                uploadFileUrl = null;
            });
        }else{
            showLoader("用户名已存在!",true);
        }
    });
}

function myinfo(){
    if(!userinfo){
        changePage("loginpage");
        return;
    }
    changePage("userinfopage");
    $("#editbutton").hide();
    $("#vusername").text(userinfo.username);
    $("#vtel").val(userinfo.tel);
    $("#vqq").val(userinfo.qq);
    $("#vwechat").val(userinfo.wechat);
    $("#vsex").val(userinfo.sex);
    $("#vbirth").val(userinfo.birth);
    $("#vemail").val(userinfo.email);
    $("#vaddress").val(userinfo.address);
    $("#vimg").val(userinfo.img);
    $("#rmyImage2").attr("src",fileurl+userinfo.img);
}

function editUserInfo(){
    $("#editbutton").show();
}

function updateUserInfo(){
    var fdata = serializeObject($("#userform"));
    fdata.id = userinfo.id;
    /*if(uploadFileUrl){
        uplaodImg(function(r){
            fdata.img = r;
            commitUpdateUserInfo(fdata);
        });
    }else{*/
        commitUpdateUserInfo(fdata);
    //}
}

function commitUpdateUserInfo(fdata){
    fdata.table = "user";
    ajaxCallback("saveJ",fdata,function(user){
        if(user){
            showLoader("保存成功!",true);
            userinfo = fdata;
            uploadFileUrl = null;
        }else{
            showLoader("保存失败,请稍候再试!",true);
        }
    });
}

function toChangePasswd(){
    $("#pusername").text("用户名:"+userinfo.username);
    changePage("passwdpage");
}

function changePasswd(){
    var fdata = serializeObject($("#passwdform"));
    fdata.id = userinfo.id;
    if(fdata.oldpasswd != userinfo.passwd){
        showLoader("原始密码错误！",true);
        return;
    }
    if($.trim(fdata.passwd) == ""){
        showLoader("密码不能为空！",true);
        return;
    }
    if(fdata.passwd != fdata.passwd2){
        showLoader("两次密码不一致！",true);
        return;
    }
    userinfo.passwd = fdata.passwd;
    userinfo.table="user";
    ajaxCallback("saveJ",userinfo,function(r){
        if(r){
            showLoader("保存成功!",true);
            setTimeout(function(){
                toLogin();
            },2000);
        }else{
            showLoader("保存失败,请稍候再试!",true);
        }
    });
}

function toMore(){
    changePage('morepage');
    $("#myname").text(userinfo.username);
    $("#myphoto").attr("src",fileurl+userinfo.img);
    /*var xj = true;
    if(xj){
        $("#qrcode").hide();
        $("#kmtip").text("宵禁时间请管理员输入密码");
    }else{*/
    setTimeout(function (){
        $("#qrcode").show();
        $("#kmtip").text("进校二维码");
        ajaxCallback("findJ",{table:"shangbao",uid:userinfo.id},function (data) {
            if(data.leibie == "黄码"){
                makeCode(userinfo.id,'#ffff00');
            }else if(data.leibie == "红码"){
                makeCode(userinfo.id,'#ff0000');
            }else{
                makeCode(userinfo.id);
            }
        });
    },500);

    //}

}

/***************************************用户模块*******************************************/

function clickTag(el){
    if($(el).hasClass("tagfocus")){
        $(el).removeClass("tagfocus");
    }else{
        $(el).addClass("tagfocus");
    }
}
function sureBiaoqian(){
    var ysels = $("#yingshictn .tagfocus");
    var zxels = $("#zixunctn .tagfocus");
    var ysid = "";
    var zxid = "";
    /*for(var i=0;i<ysels.length;i++){
        if(ysid!=""){
            ysid += ","+$(ysels[i]).data("value");
        }else{
            ysid = $(ysels[i]).data("value");
        }
    }*/
    for(var i=0;i<zxels.length;i++){
        if(zxid!=""){
            zxid += ","+$(zxels[i]).data("value");
        }else{
            zxid = $(zxels[i]).data("value");
        }
    }

    ajaxCallback("saveJ",{tags:zxid,id:userinfo.id,table:"user"},function(data){
        userinfo.tags = zxid;
        showLoader("操作成功!",true);
    });
}

function toTags(){
    changePage('tagpage');
    ajaxCallback("listJ",{table:"type"},function(data){
        var zxhtml = '<span>设置标签:</span>';
        var yshtml = '<span>影视标签:</span>';
        for(var i=0;i<data.length;i++){
            var obj = data[i];
            //if(obj.ttype==1){
            zxhtml+='<span onclick="clickTag(this);" data-value="'+obj.id+'" class="tagitem">'+obj.title+'</span>';
            /*}else{
                yshtml+='<span onclick="clickTag(this);" data-value="'+obj.id+'" class="tagitem">'+obj.title+'</span>';
            }*/
        }

        //$("#yingshictn").html(yshtml);
        $("#zixunctn").html(zxhtml);
    });
}












function toFangke(){
    changePage("fangkepage");
    listFangkeYuyue();
}

function toYuyueMg(){
    changePage("fangkemgpage")
    $("#fusername").val(userinfo.username);
}

function saveYuyue(){
    var fdata = serializeObject($("#yuyueform"));
    fdata.table="yuyue";
    fdata.uid = userinfo.id;
    fdata.statecn="待审核";
    fdata.btype = 1;
    ajaxFormUploadFile(function (r){
        fdata.img = r;
        ajaxCallback("saveJ",fdata,function(){
            showLoader("发布成功!",true);
            toFangke();
        });
    })


}


function listFangkeYuyue(){
    var tel = $("#ytel").val();
    /*var ltpl = {};
    ltpl.tpl = '<li>'+
        '<h2>%s</h2>'+
        '<p>%s %s</p>'+
        '<p>%s</p>'+
        '<p style="color: red;">%s</p>'+
        '</li>';
    ltpl.colums = ["ndate","username","tel","note","statecn"];
    $("#fangkelist").data("property",JSON.stringify(ltpl));*/
    ajaxCallback("listJ",{table:"yuyue",uid:userinfo.id,btype:1},function (listdata) {
        focuslist = listdata;
        var ltpl = {};
        var p66662 = '<div style="width: 100%;float: left;">' +
            '            <div class="shitemctn">' +
            '                <h2>申请信息</h2>' +
            '                <div>' +
            '                    <p>姓　名:%s</p>' +
            '                    <p>电　话:%s</p>' +
            '                    <p>审核状态:%s</p>' +
            '                </div>' +
            '            </div>' +
            '        </div>';
        ltpl.tpl = p66662;
        ltpl.colums = ["username","tel","statecn"];
        $("#fangkelist").data("property",JSON.stringify(ltpl));
        $("#fangkelist").refreshInsertView(listdata);
        //$("#fangkelist").refreshShowListView(listdata);
    })


}