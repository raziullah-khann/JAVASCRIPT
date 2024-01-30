setTimeout(function(){
    console.log("Raziullah");
}, 2000)

// document.querySelector("h1").innerHTML = "Best Js series"; //change immidiately

const changeMe = setTimeout(changeHeader, 2000)
function changeHeader() {
    document.querySelector("h1").innerHTML = "Best Js series";
}

const stopbtn = document.querySelector("#stopbtn");
stopbtn.addEventListener("click", function(){
    clearTimeout(changeMe) //clearTimeout want areference
    console.log("STOPPED");
});