// let a = 0;
// setInterval(myFunc, 2000) 
// function myFunc() { 
//     a += 1;
//     console.log("Hello",a);
// }

// let a = 0;
// const mydiv = document.querySelector('#test1');
// let setIntervalId = setInterval(() =>{
//     a += 10;
//     if(a == 200) {
//         clearInterval(setIntervalId);
//     } else {
//         mydiv.style.marginLeft = a + "px";
//     }
// }, 2000);

let setIntervalId;
let a = 10;
const mydiv1 = document.querySelector('#test1');
const startButton1 = document.querySelector('#btn4');
const stopButton1 = document.querySelector('#btn5');
const btnReload1 = document.querySelector('#btn6');

startButton1.addEventListener('click', () => {
    setIntervalId = setInterval(()=>{
        a += 10;
        mydiv1.style.marginLeft = a + "px";
    },2000);
});

stopButton1.addEventListener('click', () => {
    clearInterval(setIntervalId);
});

btnReload1.addEventListener('click', () => {
    location.reload();
});