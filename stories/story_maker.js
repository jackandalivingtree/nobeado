var output = ""
var page = 1

function create_set(){
    var cache = document.getElementById("i_name")
    var cname_i = cache.value
    var cache = document.getElementById("i_mes")
    var mes_i_b = cache.value
    var mes_i = mes_i_b.replace(/\n/g, '&lt;br&gt;');

    var cache = document.getElementById( "target" ) ;
    var radioNodeList = cache.img_c ;
    var img_i = radioNodeList.value ;
    if(img_i == "other"){
        var cache = document.getElementById("img_pa")
        var img_i = "'images/chara/" + cache.value + "'"
    }

    var cache = document.getElementById( "target" ) ;
    var radioNodeList = cache.img_b ;
    var bg = radioNodeList.value ;
    if(bg == "yes"){
        var cache = document.getElementById("img_b_pa")
        var img_b = cache.value
        var bg_ch = "&#009;document.body.style.backgroundImage = 'url(\"images/bg/" + img_b + "\")';<br>"
    }else{
        var bg_ch = ""
    }

    var mes_un = "function next" + page + "(){<br>&#009;story_page = story_page + 1<br>&#009;cname = '" + cname_i + "'<br>&#009;cmes = '" + mes_i + "'<br>&#009;cimg = " + img_i + "<br>&#009;set_texts()<br>" + bg_ch + "}<br>"
    var mes_0 = "function next" + page + "(){<br>&#009;story_page = story_page + 1<br>&#009;cname = '" + cname_i + "'<br>&#009;cmes = '" + mes_i + "'<br>&#009;cimg = " + img_i + "<br>&#009;set_texts(0)<br>" + bg_ch + "}<br>"
    var mes_1 = "function next" + page + "(){<br>&#009;story_page = story_page + 1<br>&#009;waku_txt.innerHTML = '" + mes_i + "'<br>&#009;modalOpen();<br>&#009;set_texts(1)<br>&#009;setTimeout(modalClose, 3200);<br>}<br>"

    var cache = document.getElementById( "target" ) ;
    var radioNodeList = cache.type_s ;
    var type_b = radioNodeList.value ;
    if(type_b == "Undefined"){
        output = mes_un
    }else if(type_b == "0"){
        output = mes_0
    }else if(type_b == "1"){
        output = mes_1
    }

    var contentBlock = document.getElementById('mes');
    contentBlock.insertAdjacentHTML('beforeend', output);
    page = page + 1
}