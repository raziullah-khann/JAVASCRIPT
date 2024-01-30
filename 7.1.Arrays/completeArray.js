// const languages = ['Javascript', 'Java', 'C', 'Python'];
// console.log(languages);

//get .length
// console.log(languages.length);

//get any element of an array
// console.log(languages[3]);

//1> .push()--> add new items in last position in an array
// console.log(languages.push('C#'));
// console.log(languages);

//2> .unshift()-->add new items in first position in an array
// console.log(languages.unshift('MySql'));
// console.log(languages);

//3> .pop()-->remove items in last position in an array
// console.log(languages.pop());
// console.log(languages);

//4> .shift()-->remove items in first position in an array
// console.log(languages.shift());
// console.log(languages);

//loop
//for(let i=0; i<4; i++){
//     console.log("*");
// }






//create an array and store three object
//overacting ke 10 rupya kaatna h sabke
// const actors = [
//     {
//         name: 'Actor 1',
//         payment: 100
//     },
//     {
//         name: 'Actor 2',
//         payment: 200
//     },
//     {
//         name: 'Actor 3',
//         payment: 300
//     }
// ];

//1.for loop 
// for(let i=0; i<actors.length; i++){
//     actors[i].payment -= 10;
//     // console.log(actors[i]);
// }
// console.log(actors);

//2. .forEach loop
// actors.forEach(element => {  // aur hum index number bhi set kar sakte hai as a asecond parameter
//     element.payment -= 10;
//     // console.log(element);
// });
// console.log(actors);

//example 2
// const numbers = [45, 4, 9, 16, 25];
// numbers.forEach(myFunction);

// function myFunction(value, index, array) {
//     console.log(index,value);
// }

//2. for of loop
// for(let ele of actors){
//     ele.payment -= 10;
// }
// console.log(actors);



//5> .filter() --> it returns new array
// const students = [
//     {
//         name: "Student 1",
//         marks: 45
//     },
//     {
//         name: "Student 2",
//         marks: 60
//     },
//     {
//         name: "Student 3",
//         marks: 35
//     }
// ];
// const failed = students.filter((stu)=> {  // aur hum index number bhi set kar sakte hai as asecond parameter
//     return stu.marks < 45 ;


    // if(stu.marks < 45){
    //     return true;
    // } 
    // return false;
// });
// console.log(failed);

//example 2.
// const numbers = [45, 4, 9, 16, 25];
// const over18 = numbers.filter(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }
// console.log(over18);

//6> .map() --> it returns new array
// const users = [
//     {
//         fname: "Jhon",
//         lname: 'Doe'
//     },
//     {
//         fname: "David",
//         lname: 'Warner'
//     },
//     {
//         fname: "James",
//         lname: 'Bond'
//     }
// ];

// const finalUsers = users.map((us)=> { //current object us me mil rha ek ek karke sab  // aur hum index number bhi set kar sakte hai as asecond parameter
//     return {
//         fullname: `${us.fname} ${us.lname}`
//     };  // yaha pe jo bhi return karenge vo array ke ander mil jayega.
// });
// console.log(finalUsers);

//example 2
// const numbers1 = [45, 4, 9, 16, 25];
// const numbers2 = numbers1.map(myFunction);

// function myFunction(value, index, array) {
//   return value * 2;
// }
// console.log(numbers2);

//7. flatMap()
// const myArr = [1, 2, 3, 4, 5, 6];
// const newArr = myArr.flatMap((x) => x * 2);
// console.log(newArr);


//8> .reduce() --> it gives extra variable
const movies = [
    {
        name: "Interstellar",
        budget: 100
    },
    {
        name: "Social",
        budget: 150
    },
    {
        name: "Matrix",
        budget: 300
    }
];

console.log(movies);

// way 1
// let total = 0;
// movies.forEach((mov) => {
//     total += mov.budget;
// });
// console.log(total);

// const total = movies.reduce((acc,movie) => { //yaha pe hame ek variable de deta hai --> acc
//     acc += movie.budget;
//     return acc
// },0);  // yaha pe initial variable banane ki jarurat nhi hai. direct hardcode rakh sakte hai
// console.log(total);


// const numbers = [45, 4, 9, 16, 25];
// let sum = numbers.reduce(myFunction);

// function myFunction(total, value, index, array) {
//   return total + value;
// }
// console.log(sum);

//9> .indexOf()--> It returns specified element index number if nomber is not the returns -1.
// const admins = [2, 1, 5];

// const user = {
//     name: 'XYZ',
//     id: 5,
// }

//console.log(admins.indexOf(5));//2
//console.log(admins.indexOf(user.id));//-1
// hum condition bhi lga sakte hai
// const isAdmin = admins.indexOf(user.id) > -1;
// console.log(isAdmin);


//10> .indexOf()--> It check given element is in array or not. 
// const admins = [2, 1, 5];

// const user = {
//     name: 'XYZ',
//     id: 5,
// }
// console.log(admins.includes(user.id)); //true


// 11> .find()--> to return first value of an element that passes a test.

// const users = [
//     {
//         name:'xyz',
//         id: 2,
//     },
//     {
//         name:'abc',
//         id: 2,
//     },
//     {
//         name:'pqr',
//         id: 3,
//     }
// ];
// const myUser = users.find((user)=> { // agar nhi milega array me to undefined milega
//     return user.id === 2;
//     // if(user.id === 2){
//     //     return true;
//     // }
//     // return false;
// });
// console.log(myUser);


//12> .sort()--> we can sor alphabatically or smaller to greater
// const names = ['Jhon', 'Jane', 'Shyam', 'Ram', 'Sameer', 'Mansi'];
// names.sort();
// console.log(names);


//13> .splice()--> return new arrays take there param(index, delete, insert of delete element place)
// const names = ['Jhon', 'Jane', 'Shyam', 'Ram', 'Sameer', 'Mansi'];
// console.log(names);
// names.splice(2,1,[1,2,3]);
// console.log(names);

// console.log(names);
// const h = names.toString();
// const h = names.join(',');
// delete names[0];
// console.log(names[0]);
// console.log(names);
