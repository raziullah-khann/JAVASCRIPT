// setInterval(function(){
//     console.log("Khan", Date.now());
// },1000);

const stbtn = document.querySelector("#startbtn1");
const stptn = document.querySelector("#stopbtn1");
let printMsg;

function sayDate(str) {
    console.log(str, Date.now());
}

stbtn.addEventListener("click", () => {
    printMsg = setInterval(sayDate, 1000, "Hi");
});

stptn.addEventListener("click", 
() => {
    clearInterval(printMsg);
});
