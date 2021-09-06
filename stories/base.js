var game = localStorage.getItem("start_game")
var name = localStorage.getItem("name")

if (cookie_game != 1){
    alert('内部エラーが発生しました。\nホームに戻ります。\n\nユーザーデータが読み込めませんでした。')
    open( "../home.html", "_top" ) ;
}

function menu_open(){
    menu_img.innerHTML = '<a href="javascript:menu_close()"><img src="images/sprite/back_menu.png" class="back_menu_image"></a><a href="javascript:menu_top()"><img src="images/sprite/top_menu.png" class="top_menu_image"></a><a href="javascript:menu_skip()"><img src="images/sprite/skip_menu.png" class="skip_menu_image"></a>'
}

function menu_close(){
    menu_img.innerHTML = '<a href="javascript:menu_open()"><img src="images/sprite/menu.png" class="menu_image"></a>'
}

function menu_top(){
    location.href = ('../story_select.html')
}

function menu_skip(){
    location.href = ('../story_select.html')
}

function set_texts(type){
    if(type == 0){
        text_box.innerHTML = '<a href="javascript:exit()"><img src="images/sprite/text_box.png"><p id="chara_name" class="name">' + cname + '</p><p id="message" class="mes">' + cmes + '</p></a>'
        character_image.innerHTML = '<img src="' + cimg + '" class="chara_image">'
    }else if(type == 1){
        text_box.innerHTML = ''
        character_image.innerHTML = ''
    }else{
        text_box.innerHTML = ' <a href="javascript:next' + story_page + '()"><img src="images/sprite/text_box.png"><p id="chara_name" class="name">' + cname + '</p><p id="message" class="mes">' + cmes + '</p></a>'
        character_image.innerHTML = '<img src="' + cimg + '" class="chara_image">'
    }
}

function exit(){
    location.href = ('../story_select.html')
}
