
let html = document.querySelector('#demo');
let style = document.querySelector('#style');
let string = `/* 你好，我叫小七，
接下来我演示一下我的前端功底
首先显示一个div */

#div1{
    border: 1px solid red;
    width: 400px;
    height: 400px;
}


#div1{
    border-radius:50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border:none;
  
}

/* 黑白半球*/

#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}

/* 加两个神秘的小球*/
#div1::before{
    width: 200px;
    height: 200px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 200px;
    height: 200px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}


`;

let n = 0;
html.innerHTML = string.substring(0, n)
let string2 = '';

let step = () => {
    setTimeout(() => {
        if (string[n] === "\n") {
            string2 += '<br>';
        } else if (string[n] === " ") {

            string2 += '&nbsp';
        } else {
            string2 += string[n];
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);


        if (n < string.length - 1) {
            n = n + 1;
            step();
        }
    }, 0)
}

step();
