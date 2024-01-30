const objj = {}    
//we can add using Object. definePropert() 
//It accept there param 1-> object, 2->key, 3->value
Object.defineProperty(objj, 'age', {
    value: 30,
    writable: true,  // by default false
    enumerable: true,
});
console.log(objj);

objj.age = 40;
console.log(objj);


const objj1 = {}


//take two param object, property
//we can add multiple properties
Object.defineProperties(objj1, {
    name: {
        value: 'sai',
        writable: true,
    },
    age: {
        value: 30,
        writable: true,
    },
    id: {
        value: 12345,
    },
})

console.log('Multi properties', objj1);
objj1['name'] = 'Khan';
console.log('Multi properties', objj1);