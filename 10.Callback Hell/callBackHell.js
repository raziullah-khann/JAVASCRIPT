// console.log("Hello1");
// setTimeout(function() {
//     console.log("Hello World!");
// },3000);
// console.log("Hello2");
// console.log("Hello3");

function getCheese(callback){
    setTimeout(() => {
        const cheese = "🧀";
        console.log('here is cheese',cheese);
        callback(cheese);
    }, 2000);
}

function makeDough(cheese, callback){
    setTimeout(()=>{
        const dough = cheese + '🍩';
        console.log('here is dough',dough);
        callback(dough);
    },2000);
}

function bakePizza(dough, callback){
    setTimeout(()=>{
        const pizza = dough + '🍕';
        console.log('here is the pizza',pizza);
        callback(pizza);
    },2000);
}

getCheese((cheese) => {
    console.log('got the cheese',cheese);
    makeDough(cheese,(dough)=>{
        console.log("got my dough", dough);
        bakePizza(dough,(pizza)=>{
            console.log("got my pizza", pizza);
        });
    });
});

//make pizza -> dough -> cheese
// console.log(getCheese());