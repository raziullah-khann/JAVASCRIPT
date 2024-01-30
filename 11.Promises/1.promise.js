// function getCheese(){
//     setTimeout(()=>{
//         const cheese = '🧀';
//     },2000)
// }

// console.log(getCheese());

const ticket = new Promise(function(resolve,reject){
    const isBoarded = false;{
        if(isBoarded) {
            resolve('You are in the Flight');
        } else {
            reject("Your flight has been cancel")
        }
    }
});

ticket.then((data)=>{
    console.log("Yes",data);
}).catch((data)=>{
    console.log("Oh no",data);
}).finally(()=>{
    console.log( );
}) 