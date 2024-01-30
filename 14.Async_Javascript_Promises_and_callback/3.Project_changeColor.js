//Generate Random color
const randomColor = function() {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i<6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }  
    return color;
}
// console.log(randomColor());

let interValId;
const startButton = document.querySelector("#stbtn");
const stopButton = document.querySelector("#stpbtn");

function startChangingColor() {

    if(!interValId) {
        interValId = setInterval(changeBgColor, 1000);
    }
    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
    } 
};

function stopChangingColor() {
    clearInterval(interValId);
    interValId = null;
}

startButton.addEventListener('click', startChangingColor);
stopButton.addEventListener('click', stopChangingColor);

// const str = document.querySelector("#stbtn");
// const h2 = document.querySelector("h2");
// str.addEventListener("click", function(){
//     setTimeout(()=>{
//         h2.innerHTML = "Hello"; 
//         setTimeout(()=>{
//             h2.innerHTML = "";
//         },5000);
//     },5000);
// });