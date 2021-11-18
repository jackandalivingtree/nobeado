//敵のデータ(配列)
//名前,攻撃力,防御力,行動パターン,HP,魔法パターン
var enemy_date = ["おにぎり",20,20,1,100,1,"からあげ",25,25,2,150,2,"うどん",30,30,3,200,3,"うどん？",50,50,3,400,3]

//味方のデータ(配列)
//名前,攻撃力,防御力,HP,魔法パターン
var target_date = ["ジャック",20,20,100,1,"生きる木",35,15,150,2,"ひまわりたん",10,40,180,3,"16番ちゃん",45,60,156,3]
//デモ用
//var target_date = ["ジャック",20,20,100,1,"生きる木",35,15,150,2,"ひまわりたん",10,40,180,3,"16番ちゃん",45,60,156,3,"ダークジャック",45,5,200,1]

//キャラコスト(配列)
var target_cost = [0,300,500,800,1000]

//キャラ説明(配列)
var target_desc = ["MAIN of JLT","ジャックと生きる木の主人公の一人。<br>なんか色々と戦っている。"]
target_desc.push("MAIN of JLT","ジャックと生きる木の主人公の一人。<br>なんかのんびりと生活している。")
target_desc.push("PLANET CHARA","植物科のエンジニア的な人……いや花。")
target_desc.push("SDGs 応援ガールズ","「平和と公正をすべての人に」という目標をもつ者。<br>キャラクター追加理由は記憶喪失により不明。")
target_desc.push("JLT タマシイ込めて","ジャックと生きる木「タマシイ込めて」より、敵キャラの「ダークジャック」が参戦っ！")
