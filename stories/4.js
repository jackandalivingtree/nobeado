
function next1(){
    story_page = story_page + 1
    cname = ""
    cmes = "この物語はフィクションです。<br>実在する人物・団体・場所とは一切関係ありません。"
    cimg = "space.png"
    text_box.innerHTML = ' <a href="javascript:next' + story_page + '()"><img src="text_box.png"><p id="chara_name" class="name">' + cname + '</p><p id="message" class="mes">' + cmes + '</p></a>'
    character_image.innerHTML = '<img src="' + cimg + '" class="chara_image">'
    document.body.style.backgroundImage = 'url("bg_black.png")';
}
function next2(){
	story_page = story_page + 1
	waku_txt.innerHTML = 'これまでのジャックと生きる木'
	modalOpen();
	text_box.innerHTML = ''
    character_image.innerHTML = ''
	setTimeout(modalClose, 3200);
	
}
function next3(){
    story_page = story_page + 1
    cname = "ジャック"
    cmes = "お母さん！　僕行ってくる！"
    cimg = "ジャック.png"
    text_box.innerHTML = ' <a href="javascript:next' + story_page + '()"><img src="text_box.png"><p id="chara_name" class="name">' + cname + '</p><p id="message" class="mes">' + cmes + '</p></a>'
    character_image.innerHTML = '<img src="' + cimg + '" class="chara_image">'
    document.body.style.backgroundImage = 'url("yakushima.jpg")';
}
function next4(){
    story_page = story_page + 1
    cname = "ジャックの母"
    cmes = "ジャック……本当に行くの？"
    cimg = "space.png"
    text_box.innerHTML = ' <a href="javascript:next' + story_page + '()"><img src="text_box.png"><p id="chara_name" class="name">' + cname + '</p><p id="message" class="mes">' + cmes + '</p></a>'
    character_image.innerHTML = '<img src="' + cimg + '" class="chara_image">'
}
function next5(){
    story_page = story_page + 1
    cname = "ジャック"
    cmes = "うん。このままひっそりと生活していたくないし、"
    cimg = "ジャック.png"
    text_box.innerHTML = ' <a href="javascript:next' + story_page + '()"><img src="text_box.png"><p id="chara_name" class="name">' + cname + '</p><p id="message" class="mes">' + cmes + '</p></a>'
    character_image.innerHTML = '<img src="' + cimg + '" class="chara_image">'
}
function next6(){
    story_page = story_page + 1
    cname = "ジャック"
    cmes = "助けを待っている人たちがいるからさ。"
    cimg = "ジャック.png"
    text_box.innerHTML = ' <a href="javascript:next' + story_page + '()"><img src="text_box.png"><p id="chara_name" class="name">' + cname + '</p><p id="message" class="mes">' + cmes + '</p></a>'
    character_image.innerHTML = '<img src="' + cimg + '" class="chara_image">'
}
function next7(){
    story_page = story_page + 1
    cname = "ジャックの母"
    cmes = "そう……じゃあ、このお守りをもっていって。"
    cimg = "space.png"
    text_box.innerHTML = ' <a href="javascript:next' + story_page + '()"><img src="text_box.png"><p id="chara_name" class="name">' + cname + '</p><p id="message" class="mes">' + cmes + '</p></a>'
    character_image.innerHTML = '<img src="' + cimg + '" class="chara_image">'
}
function next8(){
    story_page = story_page + 1
    cname = "ジャックの母"
    cmes = "これはお父さんの形見のお守り。<br>これを持って、お父さんと一緒に戦ってきて……"
    cimg = "space.png"
    text_box.innerHTML = ' <a href="javascript:next' + story_page + '()"><img src="text_box.png"><p id="chara_name" class="name">' + cname + '</p><p id="message" class="mes">' + cmes + '</p></a>'
    character_image.innerHTML = '<img src="' + cimg + '" class="chara_image">'
}
function next9(){
    story_page = story_page + 1
    cname = "ジャック"
    cmes = "うん。それじゃあ……行ってくる…………"
    cimg = "ジャック.png"
    text_box.innerHTML = ' <a href="javascript:next' + story_page + '()"><img src="text_box.png"><p id="chara_name" class="name">' + cname + '</p><p id="message" class="mes">' + cmes + '</p></a>'
    character_image.innerHTML = '<img src="' + cimg + '" class="chara_image">'
}
function next10(){
    story_page = story_page + 1
    cname = ""
    cmes = "そうしてジャックは、父のお守りを持ち、森の中を走っていく。"
    cimg = "space.png"
    text_box.innerHTML = ' <a href="javascript:next' + story_page + '()"><img src="text_box.png"><p id="chara_name" class="name">' + cname + '</p><p id="message" class="mes">' + cmes + '</p></a>'
    character_image.innerHTML = '<img src="' + cimg + '" class="chara_image">'
}
function next11(){
    story_page = story_page + 1
    cname = ""
    cmes = "ジャックはまず、母からの助言で、仲間を募ることにした。"
    cimg = "space.png"
    text_box.innerHTML = ' <a href="javascript:next' + story_page + '()"><img src="text_box.png"><p id="chara_name" class="name">' + cname + '</p><p id="message" class="mes">' + cmes + '</p></a>'
    character_image.innerHTML = '<img src="' + cimg + '" class="chara_image">'
}
function next12(){
    story_page = story_page + 1
    cname = ""
    cmes = "そうして集まった仲間というのが……"
    cimg = "space.png"
    text_box.innerHTML = ' <a href="javascript:next' + story_page + '()"><img src="text_box.png"><p id="chara_name" class="name">' + cname + '</p><p id="message" class="mes">' + cmes + '</p></a>'
    character_image.innerHTML = '<img src="' + cimg + '" class="chara_image">'
}
function next13(){
    story_page = story_page + 1
    cname = "生きる木"
    cmes = "僕のことは「生きる木」って呼んで！"
    cimg = "生きる木.png"
    text_box.innerHTML = ' <a href="javascript:next' + story_page + '()"><img src="text_box.png"><p id="chara_name" class="name">' + cname + '</p><p id="message" class="mes">' + cmes + '</p></a>'
    character_image.innerHTML = '<img src="' + cimg + '" class="chara_image">'
}
function next14(){
    story_page = story_page + 1
    cname = "ジャック"
    cmes = "分かったよ……。い……生きる木！"
    cimg = "ジャック.png"
    text_box.innerHTML = ' <a href="javascript:next' + story_page + '()"><img src="text_box.png"><p id="chara_name" class="name">' + cname + '</p><p id="message" class="mes">' + cmes + '</p></a>'
    character_image.innerHTML = '<img src="' + cimg + '" class="chara_image">'
}
function next15(){
    story_page = story_page + 1
    cname = ""
    cmes = "生きる木という強力な仲間を手にし、ジャックはとても嬉しげにしている。"
    cimg = "space.png"
    text_box.innerHTML = ' <a href="javascript:next' + story_page + '()"><img src="text_box.png"><p id="chara_name" class="name">' + cname + '</p><p id="message" class="mes">' + cmes + '</p></a>'
    character_image.innerHTML = '<img src="' + cimg + '" class="chara_image">'
}
function next16(){
    story_page = story_page + 1
    cname = ""
    cmes = "これから起きる、数々の困難も知らずに……"
    cimg = "space.png"
    text_box.innerHTML = ' <a href="javascript:exit()"><img src="text_box.png"><p id="chara_name" class="name">' + cname + '</p><p id="message" class="mes">' + cmes + '</p></a>'
    character_image.innerHTML = '<img src="' + cimg + '" class="chara_image">'
}

function exit(){
    location.href = ('/jlt/story_select.html')
}

next1()