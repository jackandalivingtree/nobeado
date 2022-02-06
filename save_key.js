try{
    console.log(localStorage.length)
    var key_undeco = "";
    for( var key in localStorage ){
        if (
            key == "length" ||
            key == "clear" ||
            key == "getItem" ||
            key == "key" ||
            key == "removeItem" ||
            key == "setItem"
            )
        {
            console.log("skip:" + key)
        }
        else
        {
            key_undeco = key_undeco + key + "=" + localStorage.getItem(key) + "/"
        }
    }
    key_undeco = key_undeco.slice(0, -1);
    console.log(key_undeco)
    var key = btoa(key_undeco);
    key_phase.innerHTML = ("https://jackandalivingtree.github.io/nobeado/load_url.html#" + key)
}catch(e){
    alert('エラーが発生しました。\n詳細：' + e.message)
}
