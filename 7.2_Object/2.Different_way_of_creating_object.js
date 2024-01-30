//Different way of creating object in Javascript

//1.Object literal
const obj = {
    age: 10,
    name: 'Sal'
};
console.log(obj, 'General Object creation');

//2.Object.create()  //--> Prototype object
const obj2 = Object.create(obj);
console.log(obj2, 'Object create method');


//3.functional object
function add(){
    this.a = 10;
    this.b = 20;
}

const addObj = new add();
console.log(addObj, 'Functional or constructor Object');

//4.class base object

class Add {
    a = 10;
    b = 20;
}

const classObj = new Add();
console.log(classObj, 'this is our class based object');

function sub() {
    a = 100;
    b = 200;
}

const subObj = new sub();
console.log(subObj, 'without this variable');

console.log(classObj.a);