//Create a Promise
const promiseOne = new Promise(function(resolve, reject) {
    //Do async task
    //DB calls, cryptography, network
    setTimeout(function() {
        console.log("Async task1 is complete");
        resolve(); //ye connect karta hai then() ko
    }, 1000);
});

//promise consume
promiseOne.then(function() { //then() ka sidha conection hai resolve se 
    console.log("Promise Consumed");
});

new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async task 2");
        resolve();
    }, 1000)
}).then(function() {
    console.log('Async 2 resolve');
})

//third promise
const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({name: "Raziullah", email: "raziullahkhan25@gmail.com"});  //yaha pe resolve ke parameter me data bhi pass kar sakte hai chahe vo array, object, function kuch bhi ho
    }, 1000)
})

promiseThree.then(function(user) {
    console.log(user);
});

//fourth promise
const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false;
        if (!error) {
            resolve({userName: "Khan", password: "123456"})
        } else {
            reject("ERROR: Something went wrong")
        }
    },1000)
})

//agar humko object se koi value chahiye koi property ko acces karke to
// const username = promiseFour.then((user) => {
//     console.log(user);
//     return user.userName; //kya ye user.username -- const username me store ho rha h ki nhi answer => nahi 
// })
// console.log(username);
// aise hum nahi access kar sakte hai


// chaining of then()
promiseFour
.then((user) => { //yaha pe resolve se object return hoke aayega 
    console.log(user);
    return user.userName;
})
.then((username) => { // yaha pe user.userName return hoke aayega.
    console.log(username);
})
.catch(function(err) { //jo bhi return hoga vo yaha aa jayega
    console.log(err);
}).finally(() => console.log("The Promise is either resolve or rejected")); //ye hamesha execute hoga chahe promise resolve ho ya reject


//fifth promise
const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false;
        if (!error) {
            resolve({userName: "Javascipt", password: "123456"})
        } else {
            reject("ERROR: JS went wrong")
        }
    },1000)
})
//hamesha jaruri nahi hai ki .then() aur cathch() ka use kare

//it is a new way to consume a promise
// async await directlt error ko handle nahi kar sakte hai
async function consumePromiseFive() {
    try{
        const response = await promiseFive
        console.log(response);
    } catch(error) {  //is baar yaha pe gracefully error handle hua hai
        console.log(error);
    }
}

consumePromiseFive();



async function getAllUsers() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
    } catch (error) {
    console.log("E: ", error);
    }
}

getAllUsers();

//isko then and catch se karna hai

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json();
})
.then((data) => { 
    console.log(data);
})
.catch((error) => console.log(error));

//sabse pahle ye code run hua hai upar jitna bhi likha hai us sabse pahle