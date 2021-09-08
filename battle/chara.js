//データチェック
if(sessionStorage.getItem("enemy_id") == null||sessionStorage.getItem("target_id") == null){
    alert("内部エラーが発生しました。\nホームに戻ります。\n\nセッションストレージが読み取れませんでした。")
    location.href=("../home.html")
}

//配列読み取り(敵)
var enemy_id = parseInt(sessionStorage.getItem("enemy_id"))
sessionStorage.removeItem("enemy_id")
var enemy_name = enemy_date[6*enemy_id]
var enemy_attack_power = enemy_date[6*enemy_id + 1]
var enemy_defend_power = enemy_date[6*enemy_id + 2]
var enemy_action_pattern = enemy_date[6*enemy_id + 3]
var enemy_hp = enemy_date[6*enemy_id + 4]
var enemy_maxHp = enemy_hp
var enemy_skill = enemy_date[6*enemy_id + 5]

//配列読み取り(味方)
var target_id = parseInt(sessionStorage.getItem("target_id"))
sessionStorage.removeItem("target_id")
var target_name = target_date[5*target_id]
var target_attack_power = target_date[5*target_id + 1]
var target_defend_power = target_date[5*target_id + 2]
var target_hp = target_date[5*target_id + 3]
var target_maxHp = target_hp
var target_skill = target_date[5*target_id + 4]

//魔法発生率調整(Skill/敵)
if(enemy_skill == 1){
    enemy_magic_damage_n = 25 //20ダメージ魔法発生率
    enemy_magic_damage_s = 8 //40ダメージ魔法発生率
    enemy_magic_shield_n = 25 //20シールド魔法発生率
    enemy_magic_shield_s = 8 //40シールド魔法発生率
    enemy_magic_recover_n = 22 //20HP回復魔法発生率
    enemy_magic_recover_s = 5 //40HP回復魔法発生率
    enemy_magic_next_special = 7 //次回強力魔法バフ発生率
}else if(enemy_skill == 2){
    enemy_magic_damage_n = 30 //20ダメージ魔法発生率
    enemy_magic_damage_s = 5 //40ダメージ魔法発生率
    enemy_magic_shield_n = 30 //20シールド魔法発生率
    enemy_magic_shield_s = 5 //40シールド魔法発生率
    enemy_magic_recover_n = 25 //20HP回復魔法発生率
    enemy_magic_recover_s = 2 //40HP回復魔法発生率
    enemy_magic_next_special = 3 //次回強力魔法バフ発生率
}else if(enemy_skill == 3){
    enemy_magic_damage_n = 20 //20ダメージ魔法発生率
    enemy_magic_damage_s = 10 //40ダメージ魔法発生率
    enemy_magic_shield_n = 20 //20シールド魔法発生率
    enemy_magic_shield_s = 10 //40シールド魔法発生率
    enemy_magic_recover_n = 20 //20HP回復魔法発生率
    enemy_magic_recover_s = 10 //40HP回復魔法発生率
    enemy_magic_next_special = 10 //次回強力魔法バフ発生率
}
var enemy_magic_damage_n_place = enemy_magic_damage_n
var enemy_magic_damage_s_place = enemy_magic_damage_n_place + enemy_magic_damage_s
var enemy_magic_shield_n_place = enemy_magic_damage_s_place + enemy_magic_shield_n
var enemy_magic_shield_s_place = enemy_magic_shield_n_place + enemy_magic_shield_s
var enemy_magic_recover_n_place = enemy_magic_shield_s_place + enemy_magic_recover_n
var enemy_magic_recover_s_place = enemy_magic_recover_n_place + enemy_magic_recover_s
var enemy_magic_next_special_place = enemy_magic_recover_s_place + enemy_magic_next_special


//魔法発生率調整(Skill/味方)
if(target_skill == 1){
    magic_damage_n = 25 //20ダメージ魔法発生率
    magic_damage_s = 8 //40ダメージ魔法発生率
    magic_shield_n = 25 //20シールド魔法発生率
    magic_shield_s = 8 //40シールド魔法発生率
    magic_recover_n = 22 //20HP回復魔法発生率
    magic_recover_s = 5 //40HP回復魔法発生率
    magic_next_special = 7 //次回強力魔法バフ発生率
}else if(target_skill == 2){
    magic_damage_n = 30 //20ダメージ魔法発生率
    magic_damage_s = 5 //40ダメージ魔法発生率
    magic_shield_n = 30 //20シールド魔法発生率
    magic_shield_s = 5 //40シールド魔法発生率
    magic_recover_n = 25 //20HP回復魔法発生率
    magic_recover_s = 2 //40HP回復魔法発生率
    magic_next_special = 3 //次回強力魔法バフ発生率
}else if(target_skill == 3){
    magic_damage_n = 20 //20ダメージ魔法発生率
    magic_damage_s = 10 //40ダメージ魔法発生率
    magic_shield_n = 20 //20シールド魔法発生率
    magic_shield_s = 10 //40シールド魔法発生率
    magic_recover_n = 20 //20HP回復魔法発生率
    magic_recover_s = 10 //40HP回復魔法発生率
    magic_next_special = 10 //次回強力魔法バフ発生率
}
var magic_damage_n_place = magic_damage_n
var magic_damage_s_place = magic_damage_n_place + magic_damage_s
var magic_shield_n_place = magic_damage_s_place + magic_shield_n
var magic_shield_s_place = magic_shield_n_place + magic_shield_s
var magic_recover_n_place = magic_shield_s_place + magic_recover_n
var magic_recover_s_place = magic_recover_n_place + magic_recover_s
var magic_next_special_place = magic_recover_s_place + magic_next_special

//敵の行動パターン確率
if(enemy_action_pattern == 1){
    enemy_attack_per = 3
    enemy_defend_per = 3
    enemy_talk_per = 2
    enemy_magic_per = 2
}else if(enemy_action_pattern == 2){
    enemy_attack_per = 4
    enemy_defend_per = 4
    enemy_talk_per = 1
    enemy_magic_per = 1
}else if(enemy_action_pattern == 3){
    enemy_attack_per = 3
    enemy_defend_per = 2
    enemy_talk_per = 1
    enemy_magic_per = 4
}

var enemy_attack_place = enemy_attack_per
var enemy_defend_place = enemy_attack_place + enemy_defend_per
var enemy_talk_place = enemy_defend_place + enemy_talk_per
var enemy_magic_place = enemy_talk_place + enemy_magic_per

