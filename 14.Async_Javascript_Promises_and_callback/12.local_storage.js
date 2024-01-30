let key = prompt("Enter key you want to set");
let value = prompt("Enter value you want to set");

localStorage.setItem(key, value);
console.log(`The value at ${key} is ${localStorage.getItem(key)}`);

if(key === 'blue' || key === 'red') {
    localStorage.removeItem(key);
}

if(key == 0) {
    localStorage.clear();
}


//we can get and set like an object
localStorage.one = 1;
alert(localStorage.one);