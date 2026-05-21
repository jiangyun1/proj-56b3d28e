function FangDou(){
    let timmer = null;
    return function(cb){
        if(timmer){
            clearInterval(timmer);
        }
        timmer = setTimeout(() => {
            cb.call(this);
        }, 500);
        
    }
    
}
$(function(){
    $("div[data-role='header']").addClass("pageheader");
    $("div[data-role='main']").addClass("pagecontainer");
    $("div[data-role='footer'] ul").addClass("pagefooter");
    $("div[data-role='footer']").find("li").addClass("footeritem");
    $("ul[data-role='listview']").addClass("listview");
    $("a[data-icon='home']").addClass("icon-shouye");
    $("a[data-icon='cloud']").addClass("icon-faxian");
    $("a[data-icon='tag']").addClass("icon-biaoqian");
    $("a[data-icon='user']").addClass("icon-wode");
    $("a[data-icon='comment']").addClass("icon-xiaoxi");
    $("a[data-icon='info']").addClass("icon-huodong");
    let uls = $("div[data-role='navbar']").find("ul");
    for (let ul in uls) {
        if(!$(uls[ul]).hasClass("pagefooter")){
            $(uls[ul]).addClass("titlenav");
        }
    }
    $("div[data-role='popup']").addClass("modelmask");
    $($("div[data-role='popup']").find("form")).addClass("modeldialog");
    $($("div[data-role='popup']").find("form").find("div")).addClass("modelcontainer");

    $(".modelmask").click(function(e){
        var el = e.target;
        var elnode = el.nodeName;
        if(elnode.toLowerCase()!="input"){
            $(".modelmask").hide();
        }
        
    });

    $("a[data-rel='popup']").click(function(e){
        var popid = $(e.currentTarget).attr("href");
        $(popid).show();
    });
        /**********************************给list加搜索过滤 */
        let fullist = $("[data-filter]");
    
        for (let i=0;i<fullist.length;i++) {
           let ul = fullist[i];
           let placeholder = ($(ul).data("filter-placeholder"))||"请输入关键字...";
           let htmltpl = `<div class="searchctn2" style="margin-bottom: 10px;">
                            <input type="search" placeholder="${placeholder}" class="searchinput2">
                        </div>`;
           $(ul).before(htmltpl);
        } 
        let fd = FangDou();
        $(".searchinput2").on("keyup",function(){
            let pdiv = ($(this).parent('.searchctn2'))[0];
            let ulel = $(pdiv).next("ul")[0];
            let lis = $(ulel).find("li");
            if(lis && lis.length){
                fd(()=>{
                    console.log("回调");
                    let keystr = $.trim($(this).val());
                    if(keystr){
                        //lis不是数组,遍历只能获取length属性获取长度然后操作
                          for (let i=0;i<lis.length;i++) {
                             let li = lis[i];
                             let h2 = $(li).find("h2");
                             let title = $(h2).text();
                             let sp = $(li).find("p");
                             let stitle = $(sp).text();
                             if(title.indexOf(keystr)!=-1 || stitle.indexOf(keystr)!=-1){
                               $(li).show(300);
                             }else{
                                $(li).hide(300);
                             }
                         } 
                    }else{
                        lis.show(300);
                    }
                })
            }
           
        })
    
        /**********************************给list加搜索过滤 */
});
/**
 * Created by ideabobo on 14-6-28.
 * commontools
 */

/**
 * Created by ideabobo on 14-6-28.
 * jquery mobile tools
 */
var mobiletool={
    confirmDialog:false,
    confirmBack:null
}

function changePage(id, animation) {
    animation = animation || randAnimation();
    $.mobile.changePage($("#" + id), {transition: animation})
}

function confirmCallback(flag){
    mobiletool.confirmBack && mobiletool.confirmBack(flag);
    hideLoader();
}

function randAnimation(){
    var animation=['pop','flow','pop','fade','slidedown','slideup','slidefade','flow','slide','pop'];
    var r = parseInt(10*Math.random());
    return animation[r];
}

//显示加载器
function showLoader(str, textonly, textVisible, theme, html) {
    textonly = textonly || false;
    textVisible = textVisible || true;
    theme = theme || "b";
    html = html || "";
    //显示加载器.for jQuery Mobile 1.2.0
    $.mobile.loading('show', {
        text: str, //加载器中显示的文字
        textVisible: textVisible, //是否显示文字
        theme: theme,        //加载器主题样式a-e
        textonly: textonly,   //是否只显示文字
        html: html           //要显示的html内容，如图片等
    });
    if (textonly) {
        setTimeout(function () {
            hideLoader();
        }, 2000);
    }
}

function showTipTimer(str,callback){
    var textonly = true;
    var textVisible = true;
    var theme = "b";
    var html = html || "";
    //显示加载器.for jQuery Mobile 1.2.0
    $.mobile.loading('show', {
        text: str, //加载器中显示的文字
        textVisible: textVisible, //是否显示文字
        theme: theme,        //加载器主题样式a-e
        textonly: textonly,   //是否只显示文字
        html: html           //要显示的html内容，如图片等
    });
    setTimeout(function () {
        hideLoader();
        callback && callback();
    }, 1000);
}

function showConfirm(str,cb) {
    mobiletool.confirmBack = cb;
    var html = "<div><h1>"+str+"</h1><a href='#' onclick='confirmCallback(1);' class='ui-btn ui-btn-a'>确定</a><a href='#' onclick='confirmCallback(0);' class='ui-btn ui-btn-a'>取消</a></div>";
    //显示加载器.for jQuery Mobile 1.2.0
    $.mobile.loading('show', {
        text: str, //加载器中显示的文字
        textVisible: true, //是否显示文字
        theme: "b",        //加载器主题样式a-e
        textonly: true,   //是否只显示文字
        html: html           //要显示的html内容，如图片等
    });
    mobiletool.confirmDialog = true;
}

function showAlert(str,cb) {
    mobiletool.confirmBack = cb;
    var html = "<div><h1>"+str+"</h1><a href='#' onclick='confirmCallback(1);' class='ui-btn ui-btn-a'>确定</a></div>";
    //显示加载器.for jQuery Mobile 1.2.0
    $.mobile.loading('show', {
        text: str, //加载器中显示的文字
        textVisible: true, //是否显示文字
        theme: "b",        //加载器主题样式a-e
        textonly: true,   //是否只显示文字
        html: html           //要显示的html内容，如图片等

    });
    mobiletool.confirmDialog = true;
}

//隐藏加载器.for jQuery Mobile 1.2.0
function hideLoader() {
    //隐藏加载器
    $.mobile.loading('hide');
    mobiletool.confirmDialog = false;
}

function goback(){
    $.mobile.back();
}



function rrplace(tpl,colums,records,index){
    index = index || 0;
    let int = tpl.indexOf("%s");
    if(int!=-1){
        let p = colums[index];
        let str = records[p];
        if(p=="note"){
            str = html2txt(str);
        }
        tpl = tpl.replace("%s",(str||""));
        index++;
        return rrplace(tpl,colums,records,index);
    }else{
        return tpl;
    }
}

$.fn.extend({
    refreshShowListView:function(records){
        var attr = $(this).data("property");
        if(attr && records && records.length){
            attr = JSON.parse(attr);
            var html = "";
            var tpl = attr.tpl;
            var colums = attr.colums;
            for(var i=0;i<records.length;i++){
                var li = rrplace(tpl,colums,records[i]);
                html+=li;
            }
            $(this).html(html);
            //$(this).listview('refresh');
        }else{
            $(this).html("");
            //$(this).listview('refresh');
        }
    }
});

$.fn.extend({
    refreshShowSelectMenu:function(records,placeholder,id,text){
        var html = "";
        if(placeholder){
            html = '<option value="" selected="selected">'+placeholder+'</option>';
        }
        if(records && records.length){
            id = id || "id";
            text = text || "title";

            var tpl = '<option value="%s">%s</option>';
            var colums = [id,text];

            for(var i=0;i<records.length;i++){
                var op = rrplace(tpl,colums,records[i]);
                html+=op;
            }
        }
        $(this).html(html);
        //$(this).selectmenu('refresh');
    }
});

$.fn.extend({
    refreshShowSelect:function(records,placeholder,id,text){
        var html = "";
        if(placeholder){
            html = '<option value="" selected="selected">'+placeholder+'</option>';
        }
        if(records && records.length){
            id = id || "id";
            text = text || "title";

            var tpl = '<option value="%s">%s</option>';
            var colums = [id,text];

            for(var i=0;i<records.length;i++){
                var op = rrplace(tpl,colums,records[i]);
                html+=op;
            }
        }
        $(this).html(html);
    }
});

$.fn.extend({
    refreshInsertView:function(records){
        var attr = $(this).data("property");
        if(attr && records && records.length){
            attr = JSON.parse(attr);
            var html = "";
            var tpl = attr.tpl;
            var colums = attr.colums;
            for(var i=0;i<records.length;i++){
                var li = rrplace(tpl,colums,records[i]);
                html+=li;
            }
            $(this).html(html);
        }else{
            $(this).html("");
        }
    }
});
