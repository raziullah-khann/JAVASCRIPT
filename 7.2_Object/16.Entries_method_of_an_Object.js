//
obj = {
    age: 20,
    name: 'sai kumar',
}

console.log(obj);
//[[age, 20], [name: 'sai kumar']]

//way one
// const keys = Object.keys(obj);
// const values = Object.values(obj);
// // console.log(keys);

// const keyvalue = [];
// for(let i = 0; i<keys.length; i++) {
//     const s = [keys[i], values[i]];
//     keyvalue.push(s);
// }

// console.log(keyvalue);
//second way

//Object.entries() returns an array consisting of enumerable property [key, value] pairs of the object passed.
console.log(Object.entries(obj)); 

const obj2 = Object.create(obj);
obj2.address = 'Hyderabad';
console.log(obj2);

console.log(Object.entries(obj2)); //prototype value not considering