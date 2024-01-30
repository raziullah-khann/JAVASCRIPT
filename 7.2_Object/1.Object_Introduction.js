// const obj = {
//     name: "Raziullah",
//     age: 10,
//     getName: function(){
//         console.log(`My name is ${this.name}`);
//     },
//     mobile: [1424522212,5511522,4851112,55148222],
//     address: {
//         name: 'House',
//         streetName: 'Some street'
//     }
// }
// console.log(obj);



//In normal case if keys and values are same
let name = "Raziullah";
let course = "BTech";

// const obj = {
//     name: name,
//     course: course,
//     E_no: 20545,
// };


// -->1.In ES6 sort syntax if both properties and values are same
// const obj = {
//     name,
//     course,
//     E_no: 20545,
// };

// console.log(obj);
// for(let key in obj){
//     console.log(typeof key, typeof object[key]);
// }


//--> 2.OBJECT LITERALS: Use Variable as a Property Name --ES6 features
// We can arithmetic operation in variable properties  --> some changes
// let n = "Student";
// const obj1 = {
//     [n + "name"]: "Raziullah Khan",
//     course: "BTech",
//     //also we can use computed value in function
//     detail: function() {
//         return `${this.Studentname} is student of ${this.course}`
//     }
// };

// console.log(obj1);
// console.log(obj1.detail());
// console.log(obj1[n]);
// console.log(obj1.name);


//--> 3.OBJECT LITERALS: New Function Syntax 

// let obj2 = {
//     name: "Raziullah",
//     show: function() {
//         console.log(this.name);
//     }
// }

//In ES6 function sorter syntax
// let obj2 = {
//     name: "Raziullah",
//     'detail show'() {
//         console.log(this.name);
//     }
// }
// console.log(obj2)
// obj2.show();
// obj2['detail show']();

//--> 4.OBJECT LITERAL 
// We can return as a object

let fname1 = "W3School";
let lname1 = "Hello";
let course1 = "Btech";

function student(name, lname,  course) {
    let fullName = name+" " +lname;
    return {fullName, course}
}

// console.log(student(fname1, lname1, course1));

//if we want to see single value in object
let a = student(fname1, lname1, course1);
console.log(a.fullName);