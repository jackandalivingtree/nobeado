var game = localStorage.getItem("start_game")
var user_name = localStorage.getItem("name")



if (game != 1){
    alert('内部エラーが発生しました。\nホームに戻ります。\n\nユーザーデータが読み込めませんでした。')
    open( "../home.html", "_top" ) ;
}

function menu_open(){
    menu_img.innerHTML = '<a href="javascript:menu_close()"><img src="images/sprite/back_menu.png" class="back_menu_image" id="menu_image_for_height"></a><a href="javascript:menu_top()"><img src="images/sprite/top_menu.png" class="top_menu_image"></a><a href="javascript:menu_skip()"><img src="images/sprite/skip_menu.png" class="skip_menu_image"></a>'
}

function menu_close(){
    menu_img.innerHTML = '<a href="javascript:menu_open()"><img src="images/sprite/menu.png" class="menu_image" id="menu_image_for_height"></a>'
}

function menu_top(){
    location.href = ('/jlt/story_select.html')
}

function menu_skip(){
    location.href = ('/jlt/story_select.html')
}

function showImg(type){
    if(type == 1){
        attack_img.innerHTML = '<a href="javascript:action(1)"><img src="images/sprite/attack.png" class="bt_attack"></a>'
    }else if(type == 1){
        defend_img.innerHTML = '<a href="javascript:action(2)"><img src="images/sprite/defend.png" class="bt_defend"></a>'
    }else if(type == 1){
        talk_img.innerHTML = '<a href="javascript:action(3)"><img src="images/sprite/talk.png" class="bt_talk"></a>'
    }else if(type == 1){
        magic_img.innerHTML = '<a href="javascript:action(4)"><img src="images/sprite/magic.png" class="bt_magic"></a>'
    }else{
        attack_img.innerHTML = '<a href="javascript:action(1)"><img src="images/sprite/attack.png" class="bt_attack"></a>'
        defend_img.innerHTML = '<a href="javascript:action(2)"><img src="images/sprite/defend.png" class="bt_defend"></a>'
        talk_img.innerHTML = '<a href="javascript:action(3)"><img src="images/sprite/talk.png" class="bt_talk"></a>'
        magic_img.innerHTML = '<a href="javascript:action(4)"><img src="images/sprite/magic.png" class="bt_magic"></a>'
    }
}

function hideImg(type){
    if(type == 1){
        attack_img.innerHTML = ''
    }else if(type == 1){
        defend_img.innerHTML = ''
    }else if(type == 1){
        talk_img.innerHTML = ''
    }else if(type == 1){
        magic_img.innerHTML = ''
    }else{
        attack_img.innerHTML = ''
        defend_img.innerHTML = ''
        talk_img.innerHTML = ''
        magic_img.innerHTML = ''
    }
}

//シールド画像の設置 (target=1:味方のシールド/target=2:敵のシールド/type=1:20シールド/type=2:40シールド)
function shield_set(target, type){
    if(target == 1){
        if(type == 1){
            target_shield.innerHTML = ('<img src="images/sprite/20shield.png" class="target_shield">')
        }else if(type == 2){
            target_shield.innerHTML = ('<img src="images/sprite/40shield.png" class="target_shield">')
        }
    }else if(target == 2){
        if(type == 1){
            enemy_shield.innerHTML = ('<img src="images/sprite/20shield.png" class="enemy_shield">')
        }else if(type == 2){
            enemy_shield.innerHTML = ('<img src="images/sprite/40shield.png" class="enemy_shield">')
        }
    }
}

function shield_hide(target){
    if(target == 1){
            target_shield.innerHTML = ('')
    }else if(target == 2){
            enemy_shield.innerHTML = ('')
    }
}

function set_texts(type, mes){
    if(type == 0){
        text_box.innerHTML = '<a href="javascript:set_texts(1,undefined)"><img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p></a>'
        hideImg()
    }else if(type == 1){
        mes = target_name + "はどうする？"
        text_box.innerHTML = '<img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p>'
        showImg()
    }else if(type == 2){
        text_box.innerHTML = '<a href="javascript:set_texts(1,undefined)"><img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p></a>'
        hideImg()
    }
}

function exit(){
    location.href = ('index.html')
}

function action(type){
    if(type == 1){
        if (enemy_shieldtype == 0){
            damage = Math.floor((target_attack_power*attack_mag)-((target_attack_power*attack_mag)*((enemy_defend_power*defend_mag_enemy)/100)))
            if(damage <= 0){
                damage = 0
            }
            enemy_hp = enemy_hp - damage
            mes = enemy_name + "に" + damage + "ダメージ与えた！"
            if(damage == 0){
                mes = enemy_name + "にダメージが入らなかった！"
            }
            text_box.innerHTML = '<a href="javascript:action_end(1)"><img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p></a>'
            hideImg()
            if(enemy_hp <= 0){
                death_check_enemy = 1
                enemy_hp = 0
            }
            setHp()
        }else if(enemy_shieldtype == 1){
            damage = Math.floor((target_attack_power*attack_mag)-((target_attack_power*attack_mag)*((enemy_defend_power*defend_mag_enemy)/100))) -20
            if(damage <= 0){
                damage = 0
            }
            enemy_hp = enemy_hp - damage
            mes = enemy_name + "に" + damage + "ダメージ与えた！"
            if(damage == 0){
                mes = enemy_name + "にダメージが入らなかった！"
            }
            enemy_shieldtype = 0
            text_box.innerHTML = '<a href="javascript:action_end(1)"><img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p></a>'
            hideImg()
            if(enemy_hp <= 0){
                death_check_enemy = 1
                enemy_hp = 0
            }
            setHp()
            shield_hide(2)
        }else if(enemy_shieldtype == 2){
            damage = Math.floor((target_attack_power*attack_mag)-((target_attack_power*attack_mag)*((enemy_defend_power*defend_mag_enemy)/100))) -40
            if(damage <= 0){
                damage = 0
            }
            enemy_hp = enemy_hp - damage
            mes = enemy_name + "に" + damage + "ダメージ与えた！"
            if(damage == 0){
                mes = enemy_name + "にダメージが入らなかった！"
            }
            enemy_shieldtype = 0
            text_box.innerHTML = '<a href="javascript:action_end(1)"><img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p></a>'
            hideImg()
            if(enemy_hp <= 0){
                death_check_enemy = 1
                enemy_hp = 0
            }
            setHp()
            shield_hide(2)
        }
    }else if(type == 2){
        shieldtype = 1
        mes = target_name + "に20シールドを付与した！"
        shield_set(1,1)
        text_box.innerHTML = '<a href="javascript:action_end(1)"><img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p></a>'
        hideImg()
    }else if(type == 3){
        random = Math.floor( Math.random() * 99 ) + 1; //1～100の乱数
        if(random <= talk_stop_place){
            action_stop = 1
            mes = target_name + "の話によって" + enemy_name + "の行動が止まった！"
            text_box.innerHTML = '<a href="javascript:action_end(1)"><img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p></a>'
            hideImg()
        }else if(random > talk_stop_place && random <= talk_attack_place){
            attack_mag = attack_mag + 0.2
            mes = target_name + "の心と会話をして、攻撃力が上がった！"
            text_box.innerHTML = '<a href="javascript:action_end(1)"><img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p></a>'
            hideImg()
        }else if(random > talk_attack_place && random <= talk_defend_place){
            defend_mag = defend_mag + 0.2
            mes = target_name + "の心と会話をして、防御力が上がった！"
            text_box.innerHTML = '<a href="javascript:action_end(1)"><img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p></a>'
            hideImg()
        }else if(random > talk_defend_place && random <= talk_nothing_place){
            mes = target_name + "の心と会話をしたが、何も起きなかった！"
            text_box.innerHTML = '<a href="javascript:action_end(1)"><img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p></a>'
            hideImg()
        }
    }else if(type == 4){
        if(magic_buff == 0){
            random = Math.floor( Math.random() * 99 ) + 1; //1～100の乱数
            if(random <= magic_damage_n_place){
                if (enemy_shieldtype == 0){
                    damage = 20
                    enemy_hp = enemy_hp - damage
                    mes = enemy_name + "に魔法で" + damage + "ダメージ与えた！"
                    text_box.innerHTML = '<a href="javascript:action_end(1)"><img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p></a>'
                    hideImg()
                    if(enemy_hp <= 0){
                        death_check_enemy = 1
                    }
                    setHp()
                }else if(enemy_shieldtype == 1){
                    enemy_shieldtype = 0
                    mes = enemy_name + "のシールドによって魔法が防がれた！"
                    text_box.innerHTML = '<a href="javascript:action_end(1)"><img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p></a>'
                    hideImg()
                    shield_hide(2)
                }else if(enemy_shieldtype == 2){
                    enemy_shieldtype = 1
                    mes = enemy_name + "のシールドによって魔法が防がれた！"
                    text_box.innerHTML = '<a href="javascript:action_end(1)"><img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p></a>'
                    hideImg()
                    shield_set(2,1)
                }
            }else if(random > magic_damage_n_place && random <= magic_damage_s_place){
                if (enemy_shieldtype == 0){
                    damage = 40
                    enemy_hp = enemy_hp - damage
                    mes = enemy_name + "に魔法で" + damage + "ダメージ与えた！"
                    text_box.innerHTML = '<a href="javascript:action_end(1)"><img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p></a>'
                    hideImg()
                    if(enemy_hp <= 0){
                        death_check_enemy = 1
                        enemy_hp = 0
                    }
                    setHp()
                }else if(enemy_shieldtype == 1){
                    damage = 20
                    enemy_hp = enemy_hp - damage
                    enemy_shieldtype = 0
                    mes = enemy_name + "のシールドによって魔法が防がれたが、" + damage + "ダメージ与えた！"
                    text_box.innerHTML = '<a href="javascript:action_end(1)"><img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p></a>'
                    hideImg()
                    if(enemy_hp <= 0){
                        death_check_enemy = 1
                        enemy_hp = 0
                    }
                    setHp()
                    shield_hide(2)
                }else if(enemy_shieldtype == 2){
                    enemy_shieldtype = 1
                    mes = enemy_name + "のシールドによって攻撃が防がれた！"
                    text_box.innerHTML = '<a href="javascript:action_end(1)"><img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p></a>'
                    hideImg()
                    shield_hide(2)
                }
            }else if(random > magic_damage_s_place && random <= magic_shield_n_place){
                shieldtype = 1
                mes = target_name + "に20シールドを付与した！"
                text_box.innerHTML = '<a href="javascript:action_end(1)"><img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p></a>'
                hideImg()
                shield_set(1,1)
            }else if(random > magic_shield_n_place && random <= magic_shield_s_place){
                shieldtype = 2
                mes = target_name + "に40シールドを付与した！"
                text_box.innerHTML = '<a href="javascript:action_end(1)"><img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p></a>'
                hideImg()
                shield_set(1,2)
            }else if(random > magic_shield_s_place && random <= magic_recover_n_place){
                target_hp = target_hp + 20
                if (target_hp >= target_maxHp){
                    target_hp = target_maxHp
                }
                mes = target_name + "のHPが20回復した！"
                text_box.innerHTML = '<a href="javascript:action_end(1)"><img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p></a>'
                hideImg()
                setHp()
            }else if(random > magic_recover_n_place && random <= magic_recover_s_place){
                target_hp = target_hp + 40
                if (target_hp >= target_maxHp){
                    target_hp = target_maxHp
                }
                mes = target_name + "のHPが40回復した！"
                text_box.innerHTML = '<a href="javascript:action_end(1)"><img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p></a>'
                hideImg()
                setHp()
            }else if(random > magic_recover_s_place && random <= magic_next_special_place){
                magic_buff = 1
                mes = target_name + "の次の魔法が強力になる魔法が発動した！"
                text_box.innerHTML = '<a href="javascript:action_end(1)"><img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p></a>'
                hideImg()
            }
        }else if(magic_buff == 1){
            random = Math.floor( Math.random() * 3 ) + 1; //1～3の乱数
            if(random == 1){
                if (enemy_shieldtype == 0){
                    damage = 40
                    enemy_hp = enemy_hp - damage
                    mes = enemy_name + "に魔法で" + damage + "ダメージ与えた！"
                    text_box.innerHTML = '<a href="javascript:action_end(1)"><img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p></a>'
                    hideImg()
                    if(enemy_hp <= 0){
                        death_check_enemy = 1
                        enemy_hp = 0
                    }
                    setHp()
                }else if(enemy_shieldtype == 1){
                    damage = 20
                    enemy_hp = enemy_hp - damage
                    enemy_shieldtype = 0
                    mes = enemy_name + "のシールドによって魔法が防がれたが、" + damage + "ダメージ与えた！"
                    text_box.innerHTML = '<a href="javascript:action_end(1)"><img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p></a>'
                    hideImg()
                    if(enemy_hp <= 0){
                        death_check_enemy = 1
                        enemy_hp = 0
                    }
                    setHp()
                    shield_hide(2)
                }else if(enemy_shieldtype == 2){
                    enemy_shieldtype = 1
                    mes = enemy_name + "のシールドによって攻撃が防がれた！"
                    text_box.innerHTML = '<a href="javascript:action_end(1)"><img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p></a>'
                    hideImg()
                    shield_hide(2)
                }
            }else if(random == 2){
                shieldtype = 2
                mes = target_name + "に40シールドを付与した！"
                text_box.innerHTML = '<a href="javascript:action_end(1)"><img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p></a>'
                hideImg()
                shield_set(1,2)
            }else if(random == 3){
                target_hp = target_hp + 40
                mes = target_name + "のHPが40回復した！"
                text_box.innerHTML = '<a href="javascript:action_end(1)"><img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p></a>'
                hideImg()
                setHp()
            }
        }
    }
}

//1:次敵
function action_end(who){
    if(who == 1){
        if(death_check_enemy == 1||death_check == 1){
            death()
        }else if(action_stop == 1){
            mes = enemy_name + "は動けない！\n" + target_name + "はどうする？"
            text_box.innerHTML = '<img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p>'
            showImg()
            action_stop = 0
        }else{
            mes = enemy_name + "のターン！"
            text_box.innerHTML = '<a href="javascript:enemy_action()"><img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p></a>'
        }
    }else if(who == 2){
        if(death_check_enemy == 1||death_check == 1){
            death()
        }else if(action_stop == 2){
            mes = target_name + "は動けない！\n" + enemy_name + "のターン！"
            text_box.innerHTML = '<a href="javascript:enemy_action()"><img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p></a>'
            hideImg()
            action_stop = 0
        }else{
            mes = target_name + "はどうする？"
            text_box.innerHTML = '<img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p>'
            showImg()
        }
    }
}

function enemy_action(){
    var random_action = Math.floor( Math.random() * 9 ) + 1;
    console.log(random_action,enemy_attack_place,enemy_defend_place,enemy_talk_place,enemy_magic_place)
    if(random_action <= enemy_attack_place){
        if (shieldtype == 0){
            damage = Math.floor((enemy_attack_power*attack_mag_enemy)-((enemy_attack_power*attack_mag_enemy)*((target_defend_power*defend_mag)/100)))
            if(damage <= 0){
                damage = 0
            }
            target_hp = target_hp - damage
            mes = enemy_name + "の攻撃で" + damage + "ダメージ受けた！"
            if(damage == 0){
                mes = enemy_name + "の攻撃のダメージは入らなかった！"
            }
            text_box.innerHTML = '<a href="javascript:action_end(2)"><img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p></a>'
            hideImg()
            if(target_hp <= 0){
                death_check = 1
                target_hp = 0
            }
            setHp()
        }else if(shieldtype == 1){
            damage = Math.floor((enemy_attack_power*attack_mag_enemy)-((enemy_attack_power*attack_mag_enemy)*((target_defend_power*defend_mag)/100))) -20
            if(damage <= 0){
                damage = 0
            }
            target_hp = target_hp - damage
            mes = enemy_name + "の攻撃で" + damage + "ダメージ受けた！"
            if(damage == 0){
                mes = enemy_name + "の攻撃のダメージは入らなかった！"
            }
            shieldtype = 0
            shield_hide(1)
            text_box.innerHTML = '<a href="javascript:action_end(2)"><img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p></a>'
            hideImg()
            if(target_hp <= 0){
                death_check = 1
                target_hp = 0
            }
            setHp()
        }else if(shieldtype == 2){
            damage = Math.floor((enemy_attack_power*attack_mag_enemy)-((enemy_attack_power*attack_mag_enemy)*((target_defend_power*defend_mag)/100))) -40
            if(damage <= 0){
                damage = 0
            }
            target_hp = target_hp - damage
            mes = enemy_name + "の攻撃で" + damage + "ダメージ受けた！"
            if(damage == 0){
                mes = enemy_name + "の攻撃のダメージは入らなかった！"
            }
            shieldtype = 0
            text_box.innerHTML = '<a href="javascript:action_end(2)"><img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p></a>'
            hideImg()
            if(targer_hp <= 0){
                death_check = 1
            }
            setHp()
            shield_hide(1)
        }
    }else if(random_action > enemy_attack_place&&random_action <= enemy_defend_place){
        enemy_shieldtype = 1
        mes = enemy_name + "が20シールドを付与した！"
        text_box.innerHTML = '<a href="javascript:action_end(2)"><img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p></a>'
        hideImg()
        shield_set(2,1)
    }else if(random_action > enemy_defend_place&&random_action <= enemy_talk_place){
        random = Math.floor( Math.random() * 99 ) + 1; //1～100の乱数
        if(random <= talk_stop_place){
            action_stop = 2
            mes = enemy_name + "の話によって" + target_name + "の行動が止まってしまった！"
            text_box.innerHTML = '<a href="javascript:action_end(2)"><img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p></a>'
            hideImg()
        }else if(random > talk_stop_place && random <= talk_attack_place){
            attack_mag_enemy = attack_mag_enemy + 0.2
            mes = enemy_name + "が心と会話をして、攻撃力が上がった！"
            text_box.innerHTML = '<a href="javascript:action_end(2)"><img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p></a>'
            hideImg()
        }else if(random > talk_attack_place && random <= talk_defend_place){
            defend_mag_enemy = defend_mag_enemy + 0.2
            mes = enemy_name + "が心と会話をして、防御力が上がった！"
            text_box.innerHTML = '<a href="javascript:action_end(2)"><img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p></a>'
            hideImg()
        }else if(random > talk_defend_place && random <= talk_nothing_place){
            mes = enemy_name + "が心と会話をしたが、何も起きなかった！"
            text_box.innerHTML = '<a href="javascript:action_end(2)"><img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p></a>'
            hideImg()
        }
    }else if(random_action > enemy_talk_place&&random_action <= enemy_magic_place){
        if(magic_buff_enemy == 0){
            random = Math.floor( Math.random() * 99 ) + 1; //1～100の乱数
            if(random <= magic_damage_n_place){//20ダメージ魔法
                if (shieldtype == 0){
                    damage = 20
                    target_hp = target_hp - damage
                    mes = enemy_name + "の魔法で" + damage + "ダメージ受けた！"
                    text_box.innerHTML = '<a href="javascript:action_end(2)"><img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p></a>'
                    hideImg()
                    if(target_hp <= 0){
                        death_check = 1
                        target_hp = 0
                    }
                    setHp()
                }else if(shieldtype == 1){
                    shieldtype = 0
                    mes = target_name + "のシールドによって魔法を防いだ！"
                    text_box.innerHTML = '<a href="javascript:action_end(2)"><img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p></a>'
                    hideImg()
                    shield_hide(1)
                }else if(shieldtype == 2){
                    shieldtype = 1
                    mes = target_name + "のシールドによって魔法を防いだ！"
                    text_box.innerHTML = '<a href="javascript:action_end(2)"><img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p></a>'
                    hideImg()
                    shield_set(1,1)
                }
            }else if(random > magic_damage_n_place && random <= magic_damage_s_place){
                if (shieldtype == 0){
                    damage = 40
                    target_hp = target_hp - damage
                    mes = enemy_name + "の魔法で" + damage + "ダメージ受けた！"
                    text_box.innerHTML = '<a href="javascript:action_end(2)"><img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p></a>'
                    hideImg()
                    if(target_hp <= 0){
                        death_check = 1
                        target_hp = 0
                    }
                    setHp()
                }else if(shieldtype == 1){
                    damage = 20
                    target_hp = target_hp - damage
                    shieldtype = 0
                    mes = enemy_name + "の魔法がシールドを貫通して" + damage + "ダメージ受けた！"
                    text_box.innerHTML = '<a href="javascript:action_end(2)"><img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p></a>'
                    hideImg()
                    if(target_hp <= 0){
                        death_check = 1
                        target_hp = 0
                    }
                    setHp()
                    shield_hide(1)
                }else if(shieldtype == 2){
                    shieldtype = 0
                    mes = target_name + "のシールドによって魔法を防いだ！"
                    text_box.innerHTML = '<a href="javascript:action_end(2)"><img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p></a>'
                    hideImg()
                    shield_hide(1)
                }
            }else if(random > magic_damage_s_place && random <= magic_shield_n_place){
                enemy_shieldtype = 1
                mes = enemy_name + "が20シールドを付与した！"
                text_box.innerHTML = '<a href="javascript:action_end(2)"><img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p></a>'
                hideImg()
                shield_set(2,1)
            }else if(random > magic_shield_n_place && random <= magic_shield_s_place){
                enemy_shieldtype = 2
                mes = enemy_name + "が40シールドを付与した！"
                text_box.innerHTML = '<a href="javascript:action_end(2)"><img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p></a>'
                hideImg()
                shield_set(2,2)
            }else if(random > magic_shield_s_place && random <= magic_recover_n_place){
                enemy_hp = enemy_hp + 20
                if (enemy_hp >= enemy_maxHp){
                    enemy_hp = enemy_maxHp
                }
                mes = enemy_name + "のHPが20回復した！"
                text_box.innerHTML = '<a href="javascript:action_end(2)"><img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p></a>'
                hideImg()
                setHp()
            }else if(random > magic_recover_n_place && random <= magic_recover_s_place){
                enemy_hp = enemy_hp + 40
                if (enemy_hp >= enemy_maxHp){
                    enemy_hp = enemy_maxHp
                }
                mes = enemy_name + "のHPが40回復した！"
                text_box.innerHTML = '<a href="javascript:action_end(2)"><img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p></a>'
                hideImg()
                setHp()
            }else if(random > magic_recover_s_place && random <= magic_next_special_place){
                magic_buff_enemy = 1
                mes = enemy_name + "の次の魔法が強力になる魔法が発動した！"
                text_box.innerHTML = '<a href="javascript:action_end(2)"><img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p></a>'
                hideImg()
            }
        }else if(magic_buff_enemy == 1){
            random = Math.floor( Math.random() * 3 ) + 1; //1～3の乱数
            if(random == 1){
                if (shieldtype == 0){
                    damage = 40
                    target_hp = target_hp - damage
                    mes = enemy_name + "の魔法で" + damage + "ダメージ受けた！"
                    text_box.innerHTML = '<a href="javascript:action_end(2)"><img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p></a>'
                    hideImg()
                    if(target_hp <= 0){
                        death_check = 1
                        target_hp = 0
                    }
                    setHp()
                }else if(shieldtype == 1){
                    damage = 20
                    target_hp = target_hp - damage
                    shieldtype = 0
                    mes = enemy_name + "の魔法がシールドを貫通して" + damage + "ダメージ受けた！"
                    text_box.innerHTML = '<a href="javascript:action_end(2)"><img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p></a>'
                    hideImg()
                    if(target_hp <= 0){
                        death_check = 1
                        target_hp = 0
                    }
                    setHp()
                    shield_hide(1)
                }else if(shieldtype == 2){
                    shieldtype = 0
                    mes = enemy_name + "の魔法はシールドによって防がれた！"
                    text_box.innerHTML = '<a href="javascript:action_end(2)"><img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p></a>'
                    hideImg()
                    shield_hide(1)
                }
            }else if(random == 2){
                enemy_shieldtype = 2
                mes = enemy_name + "が40シールドを付与した！"
                text_box.innerHTML = '<a href="javascript:action_end(2)"><img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p></a>'
                hideImg()
                shield_set(1,2)
            }else if(random == 3){
                enemy_hp = enemy_hp + 40
                if (enemy_hp >= enemy_maxHp){
                    enemy_hp = enemy_maxHp
                }
                mes = enemy_name + "のHPが40回復した！"
                text_box.innerHTML = '<a href="javascript:action_end(2)"><img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p></a>'
                hideImg()
                setHp()
            }
        }
    }
}

function setHp(){
    if(target_maxHp <= target_hp){
        target_hp = target_maxHp
    }
    document.getElementById("targetHp").max = target_maxHp
    document.getElementById("targetHp").value = target_hp
    targetHpCount.innerHTML = target_hp
    document.getElementById("enemyHp").max = enemy_maxHp
    document.getElementById("enemyHp").value = enemy_hp
    enemyHpCount.innerHTML = enemy_hp
}
setHp()

function debug_hp(who,hp){
    if(who == 1){
        target_hp = hp
        console.log("MaxHP:" + target_maxHp)
    }else if(who == 2){
        enemy_hp = hp
        console.log("MaxHP:" + enemy_maxHp)
    }else{
        console.log("不正な値")
    }
    setHp()
}


function death(){
    if(death_check == 1){
        targer_hp = 0
        mes = enemy_name + "との戦いに敗れた...<br>（ここにいつか報酬とかが追加される予定です...）"
        text_box.innerHTML = '<a href="javascript:location.href=(\'index.html\')"><img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p></a>'
    }else if(death_check_enemy == 1){
        enemy_hp = 0
        mes = enemy_name + "との戦いに勝利した！<br>（ここにいつか報酬とかが追加される予定です...）"
        text_box.innerHTML = '<a href="javascript:location.href=(\'index.html\')"><img src="images/sprite/text_box.png"><p id="message" class="mes">' + mes + '</p></a>'
    }else{
        console.log("プログラムとの戦いに敗れた...(Something went wrong...)")
    }
}