function next1(){
	story_page = story_page + 1
	cname = 'うどん'
	cmes = '...まさか...こんなとこでやられるなんて...'
	cimg = '../battle/images/enemy/enemy_2.png'
	set_texts()
	document.body.style.backgroundImage = 'url("images/bg/bg_gray.png")';
}
function next2(){
	story_page = story_page + 1
	cname = 'ジャック'
	cmes = 'さぁ、観念しろ！'
	cimg = ch_jack
	set_texts()
}
function next3(){
	story_page = story_page + 1
	cname = '生きる木'
	cmes = '僕たち植物科は君を包囲している！'
	cimg = ch_tree
	set_texts()
}
function next4(){
	story_page = story_page + 1
	cname = 'うどん？'
	cmes = '...ならばこの器(からだ)は捨てよう。'
	cimg = '../battle/images/enemy/enemy_2.png'
	set_texts()
}
function next5(){
	story_page = story_page + 1
	cname = 'ジャック'
	cmes = 'い、生きる木！<br>うどんの様子がなんかおかしいよ！？'
	cimg = ch_jack
	set_texts()
}
function next6(){
	story_page = story_page + 1
	cname = '生きる木'
	cmes = 'ここからが本番だよ。<br>姿を現した奴との...'
	cimg = ch_tree
	set_texts()
}
function next7(){
	story_page = story_page + 1
	cname = 'うどん？'
	cmes = '器が壊れようとどうだっていい。<br>私がここで勝つだけ。'
	cimg = '../battle/images/enemy/enemy_2.png'
	text_box.innerHTML = '<a href="javascript:battle_start()"><img src="images/sprite/text_box.png"><p id="chara_name" class="name">' + cname + '</p><p id="message" class="mes">' + cmes + '</p></a>'
    character_image.innerHTML = '<img src="' + cimg + '" class="chara_image">'
}

function battle_start(){
    sessionStorage.setItem("target_id","1")
    sessionStorage.setItem("enemy_id","3")
    location.href = ("../battle/battle.html")
}

name_preload.innerHTML = stname
preload_texts.innerHTML = "...まさか...こんなとこでやられるなんて..."
preload_texts.innerHTML = "さぁ、観念しろ！"
preload_texts.innerHTML = "僕たち植物科は君を包囲している！"
preload_texts.innerHTML = "...ならばこの器(からだ)は捨てよう。"
preload_texts.innerHTML = "い、生きる木！<br>うどんの様子がなんかおかしいよ！？"
preload_texts.innerHTML = "ここからが本番だよ。<br>姿を現した奴との..."
preload_texts.innerHTML = "器が壊れようとどうだっていい。<br>私がここで勝つだけ。"
span_load.innerHTML = ""

next1()