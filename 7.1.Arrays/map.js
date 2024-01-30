// Create a Map
// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);
// console.log(fruits.get("apples"));

// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
fruits.set("oranges", 800);
// console.log(fruits.get("oranges"));
// fruits.delete("oranges");
// console.log(fruits);
// console.log(fruits.set("oranges","good"));
// console.log(fruits.has("oranges"));
// console.log(fruits.size);

//iterate
// fruits.forEach((value,key,map) =>{
//     console.log(`The key is ${key} and The value is ${value}`);
// });
// console.log(fruits);

// for(let [key,value] of fruits.entries()){
//     console.log(`The key is ${key} and The value is ${value}`);
// };
// console.log(fruits);

// for(let key of fruits.keys()){
//     console.log(`The key is ${key}`);
// };
// console.log(fruits);

for(let value of fruits.values()){
    console.log(`The value is ${value}`);
};
console.log(fruits);