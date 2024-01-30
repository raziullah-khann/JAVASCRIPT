//Accessing the property of an object.
var simpleObj = {
    age: 10,
    name: 'sai'
};

console.log('Whole object',simpleObj); // Access Whole object 
//Way of Accessing JavaScript Properties
console.log('age property',simpleObj.age); //.operator
console.log('name property',simpleObj['name']);//square bracket

var simpleObj2 = {
    'first name': 'Rajan',
    lastName: 'Nishad'
}

console.log('accessing by []', simpleObj2['first name']);
console.log('accessing by dot', simpleObj2.lastName);

//Q--> If we want to access all the properties of a particular object use .keys()
console.log(Object.keys(simpleObj2));

//Q--> If we want to access all the values of a particular object use .values()
console.log(Object.values(simpleObj2));

var complexObj = {
    mobile: [13356521,2258522,58592222],
    address: {
        street: 'sample street',
        roadNumber: 3
    }
}

console.log('complex object with an array',complexObj.mobile);
console.log('address nested object',complexObj['address']);

//if we want to access nested object properties we can traverse nested object using .operator
console.log('street name:',complexObj['address'].street);

//if address: null and we access complexObj['address'].street --> through error
//Any object which is not having property values or property value is null or undefined we cannot access from  that particular value

console.log('!st mobile number', complexObj.mobile[0]);  // if we want to access any value of array in object use [] bracket
     
