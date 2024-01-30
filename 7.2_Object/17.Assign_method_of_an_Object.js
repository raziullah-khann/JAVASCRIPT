var obj = {
    age: 10,
    name: 'sai'
}


// it will create prototype property
var obj2 = Object.create(obj); 

console.log(obj2);

// it will create plain property
// it will take more than one object
var newObj = {
    address: 'Rajkot',
    age: 30
}
//it execute right to left
var obj3 = Object.assign(obj, newObj); 
obj3.phone = 1243452445;
console.log(obj3);

//after ES6
var obj4 = {
    ...newObj,
    ...obj
}

console.log(obj4);