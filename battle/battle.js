var action_status = 0 //行動選択変数(1:攻撃/2:防御/3:会話/4:魔法/0:未定義)
var attack_mag = 1 //攻撃力倍率
var defend_mag = 1 //防御力倍率
var attack_mag_enemy = 1 //敵攻撃力倍率
var defend_mag_enemy = 1 //敵防御力倍率
var magic_buff = 0 //魔法バフステータス(0:通常/1:バフ発生状態)
var magic_buff_enemy = 0 //魔法バフステータス(0:通常/1:バフ発生状態)
var magic_damage_n = 25 //20ダメージ魔法発生率
var magic_damage_s = 8 //40ダメージ魔法発生率
var magic_shield_n = 25 //20シールド魔法発生率
var magic_shield_s = 8 //40シールド魔法発生率
var magic_recover_n = 22 //20HP回復魔法発生率
var magic_recover_s = 5 //40HP回復魔法発生率
var magic_next_special = 7 //次回強力魔法バフ発生率
var talk_stop = 31 //相手の行動を停止させる会話発生率
var talk_attack = 7 //自分の攻撃力を倍にする会話発生率
var talk_defend = 7 //自分の防御力を倍にする会話発生率
var talk_nothing = 55 //何も起きない会話発生率
var text_box_type = 0 //テキストボックスタイプ(0:通常文字)
var talk_stop_place = 31
var talk_attack_place = 38
var talk_defend_place = 45
var talk_nothing_place = 100
var enemy_shieldtype = 0
var shieldtype = 0
var death_check = 0
var death_check_enemy = 0
var action_stop = 0


sessionStorage.setItem("enemy_id","0")
sessionStorage.setItem("target_id","0")