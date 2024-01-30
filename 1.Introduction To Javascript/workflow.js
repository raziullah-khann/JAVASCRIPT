alert("welcome");
console.log("JAVASCRIPT");

const a = function (x) {
    if(x > 10) {
        var a = 2;
        return a * x;
    }
    return x + 10;
}

let b = a(5);
console.log(b);