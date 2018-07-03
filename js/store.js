// 設定cookie 幾天
function setCookie(cname,cvalue,exdays) {
    let day = new Date()
    day.setTime(day.getTime() + (exdays * 24 * 60 * 60 * 1000))
    let expires = 'expires=' + day.toUTCString()
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"
}

// 取cookie值
function getCookie(cname) {
    let name = cname + "="
    let cookie = document.cookie
    let allcookie = cookie.split(';')
    for (let index = 0; index < allcookie.length; index++) {
        // 取出來去除左右空白放在temp
        let element = allcookie[index].trim()
        if (element.includes(name)) {
            element = element.slice(name.length, element.length)
            return element;
        }
    }
    return '';
}

// 正規限制只能有英文數字
var regExp = /^[\d|a-zA-Z]+$/;
if (!regExp.test('要檢查的文字')){
    // 檢查失敗  內涵非法文字
} 


// 提示訊息  要搭配提示訊息的sass
function jumpAlert(atype, avalue, time = 3000) {
    let alert = document.getElementById('moduleframe')
    if (alert) {
        document.body.removeChild(alert)
        console.log('remove = ');
    }
    alert = document.createElement('div')
    alert.id = 'moduleframe'
    document.body.appendChild(alert);

    alert.style.display = 'block'
    console.log('alert.style.display  = ' + alert.style.display);
    alert.className = atype
    alert.innerHTML = avalue
    alert.style.opacity = "1"
    // 清除重複出現的
    clearTimeout(checktimeout)
    setTimeout(() => {
        alert.style.opacity = "0";
    }, 1);
    checktimeout = setTimeout(() => {
        alert.style.display = 'none'
        console.log('time = ' + time)
    }, time);
}

// 洗牌
function shuffle(arr){
    let n = arr.length, random;
    while(0!=n){
        random =  (Math.random() * n--) >>> 0; // 无符号右移位运算符向下取整
        [arr[n], arr[random]] = [arr[random], arr[n]] // ES6的结构赋值实现变量互换
    }
    return arr;
}

// 關閉其他frame
function hiddenFrame(willHidden) {
    for (const i in willHidden) {
        if (willHidden.hasOwnProperty(i)) {
            const element = willHidden[i];
            element.style.display = 'none'
        }
    }
}

// 當前時間
let date = new Date();
let time = date
  .toLocaleString('zh-CN', { hour12: false })
  .replace(/\//g, '-')
  .replace(/\b\d\b/g, '0$&');
let today = time.split(' ')[0];