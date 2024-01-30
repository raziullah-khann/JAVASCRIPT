//cookies access
console.log(document.cookie);
//cookie create
document.cookie = "name = Raziullah";
document.cookie = "name1 = LavKumar";
//modified cookie
document.cookie = "name = Khan";
let key = prompt("Enter your key");
let value = prompt("Enter your value");
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
console.log(document.cookie);        