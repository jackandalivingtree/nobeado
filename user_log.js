function registor(){
    location.replace("gen.html")
}

// key=1/name=%a2%b9%27/story=1
function login(){
    var key = document.getElementById("key_phase").value;
    try{
        if(key == ""){
            throw new Error('Prevented error: No value entered.')
        }
        var decoded = atob(key);
        var result = decoded.split( '/' );
        var l = result.length;
        while(l != 0){
            var ary = result[0];
            var splited = ary.split( '=' );
            var name_key = splited[0];
            splited.shift();
            var name_value = splited[0];
            if(ary == undefined||splited == undefined||name_key == undefined||name_value == undefined){
                throw new Error('Prevented error: The assigned value is invalid.')
            }
            localStorage.setItem(name_key, name_value)
            l = l - 1
            result.shift();
        }
        location.replace('home.html')
    }catch(e){
        if(e.message == "Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded."){
            errormes = "キーの復元に失敗しました"
        }else if(e.message == "Failed to execute 'atob' on 'Window': The string to be decoded contains characters outside of the Latin1 range."){
            errormes = "利用不可の文字が入力されました"
        }else if(e.message == "Prevented error: The assigned value is invalid."){
            errormes = "キーの形式が不正です"
        }else if(e.message == "Prevented error: No value entered."){
            errormes = "キーが入力されていません"
        }else{
            errormes = "Unknown error\n詳細：" + e.stack
        }
        alert('エラーが発生しました。\nエラー内容：' + errormes)
        console.log (e.message)
        log_error.innerHTML = ('ログインできない場合')
    }
    
}