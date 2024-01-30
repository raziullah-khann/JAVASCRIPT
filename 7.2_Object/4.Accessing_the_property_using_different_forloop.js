var splObj = {
    age: 10,
    name: 'sai'
}

console.log('whole object', splObj); 
// console.log('whole keys from object', Object.keys(splObj)); 
// console.log('whole values from object', Object.values(splObj));

const keys = Object.keys(splObj) 
console.log('keys of object', keys);
for(let i=0; i< keys.length; i++){
    console.log('key: ', keys[i]);
    console.log('vaules: ', splObj[keys[i]]);
}

//in for loop we need to create Object.keys
//Now we avoid Object.keys use for in loop

console.log('**** for in loop ****');

for(let key in splObj){
    console.log('key:', key);
    console.log('value:', splObj[key]);
}


console.log('**** forEach loop ****');
keys.forEach((key)=> {
    console.log('key:', key);
    console.log('value:', splObj[key]);
})

console.log('**** for of loop ****');
for(const iterator of keys) {
    console.log('key:', iterator);
    console.log('value:', splObj[iterator]);
}

