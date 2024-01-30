//create promise
// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({name:"Raziullah", age: 22});   //yaha pe kuch bhi pass kar sakte hai array object function string etc.
//     }, 2000);
// })
// // console.log(promise);

// // //consume promise
// promise.then(data =>{
//     throw new Error("data issue")
//     console.log(data);
// })
// .catch(err => {
//     console.log("catch block",err);
// });
// console.log("Hello");

//call api usme bas consume karna hota hai promise pahle se bna hota hai fetch me
// let data1 = fetch("https://dummy.restapiexample.com/api/v1/employees");
// data1
// .then(item=>{ //yaha pe pahla promise resolve kar rahe the api ke liye
//     return item.json()
// })
// .then(item => { //yaha pe dusra promise resolve kar rahe hai json ke liye
//     console.log(item);
// }) 


//Promise methods
let p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("3 second");
    }, 3000);
})
let p2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("1 second");
    }, 1000);
})
let p3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("2 second");
    }, 2000);
})
let d = Promise.all([p1, p2, p3])
// let d = Promise.allSettled([p1, p2, p3])
// let d = Promise.race([p1, p2, p3])
d.then(item=>{
    console.log("then block",item);
}).catch(e=> {
    console.log("catch block",e);
})
