// A sealed object has a fixed set of properties: new properties cannot be added, existing properties cannot be removed, their enumerability and configurability cannot be changed, and its prototype cannot be re-assigned. 
// Values of existing properties can still be changed as long as they are writable. seal() returns the same object that was passed in.
const obj = {
    age: 10   // in this object we can add and delete properties
}


//If we don't need to add and delete property then use Object.seal(object);
Object.seal(obj);
obj.name = 'Rahul';

//only allow override exiting property
obj.age = 22;
delete obj.age;  // delete is an operaor it is delete the property from an object
console.log(obj)

const obj2 = {};
Object.defineProperty(obj2, 'age', {
    value: 20,
    writable: true,
    configurable: true // now you can override the property by defaul false
});


// Object.seal(obj2);
obj2.name='sai';
obj2.age = 45;
console.log(obj2);

console.log('is sealed', Object.isSealed());//to check object is sealed or not, it is return true or false 

 