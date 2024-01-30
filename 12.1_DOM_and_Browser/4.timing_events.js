// let id = setTimeout(Anim, 3000);
// function Anim() {
//     console.log("Hello");
// }
// console.log(id); //1
// console.log(typeof id); //number

const div = document.querySelector('#test');
const startButton = document.querySelector('#btn3');
const stopButton = document.querySelector('#btn1');
const btnReload = document.querySelector('#btn2');
let setTimeoutId;
function changeColor() {
    div.style.width = "500px"
}

startButton.addEventListener('click', () => {
    setTimeoutId = setTimeout(changeColor,2000);
})

stopButton.addEventListener('click', ()=>{
    clearTimeout(setTimeoutId);
});

btnReload.addEventListener('click', () =>{
    location.reload();
})