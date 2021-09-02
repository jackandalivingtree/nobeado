try{
var game = localStorage.getItem("start_game")
var name_c = localStorage.getItem("name")
var key_undeco = "name=" + encodeURI(name_c) + "/start_game=" + game
var key = btoa(key_undeco);
}catch(e){
alert('エラーが発生しました。\n詳細：' + e.message)
}
key_phase.innerHTML = (key)