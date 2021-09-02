function getCookieArray(){
    var arr = new Array();
    if(document.cookie != ''){
        var tmp = document.cookie.split('; ');
        for(var i=0;i<tmp.length;i++){
            var data = tmp[i].split('=');
            arr[data[0]] = decodeURIComponent(data[1]);
        }
    }
    return arr;
}

try{
var arr = getCookieArray();
var game = arr['start_game'];
var name_c = arr['name'];
var key_undeco = "name=" + encodeURI(name_c) + "/start_game=" + game
var key = btoa(key_undeco);
}catch(e){
alert('エラーが発生しました。\n詳細：' + e.message)
}
key_phase.innerHTML = (key)