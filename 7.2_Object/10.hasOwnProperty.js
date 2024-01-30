//Is is return true or false based on properties exist or not
const o = {
    age: 10,
}
o['name'] = 'Ram';

console.log('check age:', o.hasOwnProperty('age'));
console.log('check name:', o.hasOwnProperty('name'));

//Second approach of creating object.
const o1 = Object.create(o);
o1['address'] = 'hyderabad';
console.log(o1);
console.log('check address', o1.hasOwnProperty('address'));
//When ever object create prototype property it is consider false 
console.log('check addage on o1', o1.hasOwnProperty('age'));  //false

//functional constructor object
function Sample() {
    this.name = 'sai kumar';
    age = 10; // it is not treated as object property the reason is this
}

const funObj = new Sample();
funObj.__proto__.address = 'hyderabad'; //it is prototype property
console.log('funcObj name property', funObj.hasOwnProperty('name'));
console.log('funcObj age property', funObj.hasOwnProperty('age'));
console.log('funcObj address property', funObj.hasOwnProperty('address'));
console.log(funObj);

//class constructor object
class ClassSample {
    name = 'sai kumar';
    

}
const classObj = new ClassSample();
console.log(classObj);
classObj.__proto__.address = 'Gujarat';
console.log('class property with name', classObj.hasOwnProperty('name'));
console.log('class property with address', classObj.hasOwnProperty('address'));

//Working with array
//array is also key pair where key is index number
const arr = ['Raziullah', 'Rahul', 'Rohit', 'Pawan'];
console.log('arr', arr.hasOwnProperty(5));
