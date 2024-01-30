function getCheese(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            const cheese = '🧀';
            console.log('here is the cheese');
            resolve(cheese);
       },2000)  
    })  
}

console.log(getCheese());