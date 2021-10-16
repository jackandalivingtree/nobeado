function next1(){
    story_page = story_page + 1
    cname = ""
    cmes = "この物語はフィクションです。<br>実在する人物・団体・場所とは一切関係ありません。"
    cimg = ch_space
    set_texts()
    document.body.style.backgroundImage = 'url("images/bg/bg_black.png")';
}
function next2(){
	story_page = story_page + 1
	waku_txt.innerHTML = 'これまでのジャックと生きる木'
	modalOpen();
	set_texts(1)
	setTimeout(modalClose, 3200);
}
function next3(){
    story_page = story_page + 1
    cname = "ジャック"
    cmes = "お母さん！　僕行ってくる！"
    cimg = ch_jack
    set_texts()
    document.body.style.backgroundImage = 'url("images/bg/yakushima.jpg")';
}
function next4(){
    story_page = story_page + 1
    cname = "ジャックの母"
    cmes = "ジャック……本当に行くの？"
    cimg = ch_space
    set_texts()
}
function next5(){
    story_page = story_page + 1
    cname = "ジャック"
    cmes = "うん。このままひっそりと生活していたくないし、"
    cimg = ch_jack
    set_texts()
}
function next6(){
    story_page = story_page + 1
    cname = "ジャック"
    cmes = "助けを待っている人たちがいるからさ。"
    cimg = ch_jack
    set_texts()
}
function next7(){
    story_page = story_page + 1
    cname = "ジャックの母"
    cmes = "そう……じゃあ、このお守りをもっていって。"
    cimg = ch_space
    set_texts()
}
function next8(){
    story_page = story_page + 1
    cname = "ジャックの母"
    cmes = "これはお父さんの形見のお守り。<br>これを持って、お父さんと一緒に戦ってきて……"
    cimg = ch_space
    set_texts()
}
function next9(){
    story_page = story_page + 1
    cname = "ジャック"
    cmes = "うん。それじゃあ……行ってくる…………"
    cimg = ch_jack
    set_texts()
}
function next10(){
    story_page = story_page + 1
    cname = ""
    cmes = "そうしてジャックは、父のお守りを持ち、森の中を走っていく。"
    cimg = ch_space
    set_texts()
}
function next11(){
    story_page = story_page + 1
    cname = ""
    cmes = "ジャックはまず、母からの助言で、仲間を募ることにした。"
    cimg = ch_space
    set_texts()
}
function next12(){
    story_page = story_page + 1
    cname = ""
    cmes = "そうして集まった仲間というのが……"
    cimg = ch_space
    set_texts()
}
function next13(){
    story_page = story_page + 1
    cname = "生きる木"
    cmes = "僕のことは「生きる木」って呼んで！"
    cimg = ch_tree
    set_texts()
}
function next14(){
    story_page = story_page + 1
    cname = "ジャック"
    cmes = "分かったよ……。い……生きる木！"
    cimg = ch_jack
    set_texts()
}
function next15(){
    story_page = story_page + 1
    cname = ""
    cmes = "生きる木という強力な仲間を手にし、ジャックはとても嬉しげにしている。"
    cimg = ch_space
    set_texts()
}
function next16(){
    story_page = story_page + 1
    cname = ""
    cmes = "これから起きる、数々の困難も知らずに……"
    cimg = ch_space
    set_texts(0)
}

name_preload.innerHTML = name
span_load.innerHTML = ""

next1()