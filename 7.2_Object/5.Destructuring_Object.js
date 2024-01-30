/*Destructuring is exactly the same. We may have an array or object that we are working with, 
but we only need some of the items contained in these.*/

//This is also accessing the property of object it is comes in ES6.

var simpleObj3 = {
    age: 22,
    name: "Rk",
    address: "hyderabad",
    a:{
        A:"apple"
    }
};

// const {name,age,address,lobby,a} = {...simpleObj3};
// simpleObj3.name = "Rku"
// simpleObj3.a.A = "ball"
// console.log(name);
// console.log(a);
// if keys are not present in object that returns undefined
// console.log(lobby);


//you can access one property and remaining in object
const {name,...remaining} = {...simpleObj3};
// const {name,...remaining, age} = {...simpleObj3}; --throw error rest operator in last
console.log(name,remaining);

var arr = ['apple', 'bird', 'cat'];
// const [a,b,c] = [...arr];
const [a,...b] = [...arr];
console.log(a);
console.log(b);
// console.log(c);


//different btw array and object destructuring
//array --> it works on index number
//object --> it works on properties

var complexArrOfObject = [
    {
        name: 'sai',
        comage: 10
    },
    {
        name: 'kumar',
        comage: 20
    },
    {
        name: 'verma',
        comage: 300
    }
]

const [,,{comage}] = [...complexArrOfObject]
console.log('age of third object of array', comage['comage']);