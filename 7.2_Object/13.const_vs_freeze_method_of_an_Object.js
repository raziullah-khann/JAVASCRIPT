console.log("const vs freeze");
const name = 'sai kumar';
console.log(name);
// name = 'sai kumar verma';  //throw error because change the value

const obj = {
    age: 10
}

var obj2 = {
    name: 'Lav'
}
//here we not change the reference the object we change property
// obj == obj2;

obj.age = 20;

console.log(obj);

var obj3 = {
    address: 'Hyderabad'
}

Object.freeze(obj3);
//we can't add because whole object is freeze
obj3.address = 'sec-bad';


obj3 = obj2;  //we can change refernce of an object
console.log(obj3);