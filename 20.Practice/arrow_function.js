//Normal Function vs Arrow function

//Normal function syntax

// function multiply(num1, num2) {
//     const result = num1 * num2;
//     return result
// }

//Arrow Function --> 
/* 
Arrow functions were introduced in ES6.
Arrow functions allow us to write shorter function syntax:
*/

// const multiply = (num1, num2) => {
//     const result = num1 * num2;
//     return result;
// }

const multiply = (num1, num2) => num1 * num2;
console.log(multiply(4, 6));
//Difference between normal function vs arrow function
//1. No Arguments object in arrow functions

// function print() {
//     console.log(arguments);
// }
// print(1, 10, true, 'deeecode', []); //[Arguments] { '0': 1, '1': 10, '2': true, '3': 'deeecode', '4': [] }

// const print = () => {
//     console.log(arguments);
// }
// print(1, 10, true, 'deeecode', []); //Uncaught ReferenceError: arguments is not defined



//2. Arrow functions do not create their this binding.
// const obj  =  {
//     name: "deecode",
//     age: 200,
//     print: function() {
//         console.log(this);
//     }
// }
// obj.print(); //{name: 'deecode', age: 200, print: ƒ}

// const obj  =  {
//     name: "deecode",
//     age: 200,
//     print: function() {
//         function print2() {
//             console.log(this);
//         }
//         print2();
//     }
// }
// obj.print();
//Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// const obj  =  {
//     name: "deecode",
//     age: 200,
//     print: () => {
//         console.log(this);
//     }
// }
// obj.print();//Window {window: Window, self: Window, document: document, name: '', location: Location, …}

//arrow functions do not create thier own binding, so accessing this in such functions would reference the inherited this from the parent scope.


const obj  =  {
    name: "deecode",
    age: 200,
    print: function() {
        const print2 = () => {
            console.log(this);
        }
        print2();
    }
}
obj.print(); //{name: 'deecode', age: 200, print: ƒ}



//3.Arrow function cannot used as constructors
// class Animal {
//     constructor(name, numOfLegs) {
//         this.name = name;
//         this.numOfLegs = numOfLegs;
//     }

//     sayName() {
//         console.log(`My name is ${this.name}`);
//     }
// }

// const Dog = new Animal("Bingo", 4);
// const Bird = new Animal("Steer", 2);
// Dog.sayName();  //My name is Bingo


// class Animal {
//     constructor = (name, numOfLegs) => {
//       this.name = name
//       this.numOfLegs = numOfLegs
//     }
    
//     sayName() {
//       console.log(`My name is ${this.name}`)
//     }
// }

//Uncaught SyntaxError: Classes may not have a field named 'constructor' 


class Animal {
    constructor (name, numOfLegs){
      this.name = name
      this.numOfLegs = numOfLegs
    }
      
    sayName = () => {
      console.log(`My name is ${this.name}`)
    }
}
    
const Dog = new Animal("Bingo", 4)
  
Dog.sayName(); //My name is Bingo



//4. Arrow functions cannot be declared
function printHello() {
    console.log('hello')
}

const printHello2 = function() {
    console.log('hello2');
}

const printHello3 = () => {
    console.log('hello3');
}

//5 Arrow functions cannot be accessed before initialization
// printName()

// console.log("hello")

// function printName() { 
//   console.log("i am dillion")
// }


//Hoisting not work
// printName()

// console.log("hello")

// const printName = () => {
//   console.log("i am dillion")
// }

// ReferenceError: Cannot access 'printName' before initialization


//Multiple arrow function
// const add = function(x) {
//     return function (y) {
//         return x + y;
//     }
// }

// console.log(add(4)(5));

const add = x => y => x + y;
console.log(add(4)(5));