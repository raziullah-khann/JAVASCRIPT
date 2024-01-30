// let p1 = new Promise(function(resolve, reject){
//     setTimeout(()=> {
//         console.log("The First Promise has resolved!");
//         resolve(10);
//     }, 1000)
// });

// let p2 = new Promise(function(resolve, reject){
//     setTimeout(()=> {
//         console.log("The Second Promise has resolve!");        
//         resolve(30);
//     }, 2000)
// });

// let p3 = new Promise((resolve, reject)=>{
//     setTimeout(()=> {
//         console.log("The Third Promise has resolved!");        
//         resolve(30);
//     }, 3000)
// });

// let sum = 0;
// Promise.all([p1, p2, p3]).then((result) => {
//     for(let val of result) {
//         sum += val;
//     }
//     console.log(`Results ${result}`);
//     console.log(`Array or not : ${Array.isArray(result)}`);
//     console.log(`Sum ${sum}`);
// }).catch((err) =>{
//     console.log(`Error: ${err}`);
// });


let p1 = new Promise(function(resolve, reject){
    setTimeout(()=> {
        console.log("The First Promise has resolved!");
        resolve(10);
    }, 1000)
});

let p2 = new Promise(function(resolve, reject){
    setTimeout(()=> {
        console.log("The Second Promise has Failed!");        
        reject("Failed");
    }, 2000)
});

let p3 = new Promise((resolve, reject)=>{
    setTimeout(()=> {
        console.log("The Third Promise has resolved!");        
        resolve(30);
    }, 3000)
});

Promise.all([p1, p2, p3])
.catch((err) =>{
    p1.catch(err => {return err});
    p2.catch(err => {return err});
    p3.catch(err => {return err});
    console.log(`Error: ${typeof err}`);
})
.then((result) => {
    console.log(result[0]);
    console.log(result[1]);
    console.log(result[2]);
})