const obj = {
    name: 'sai kumar',
    age: 20
}

const stringifyObject = '{"name":"sai kumar","age":20';

//convert object to string
console.log(JSON.stringify(obj));

//string to object
// console.log(JSON.parse(stringifyObject));

// how to handle exception in JSON stringify
// if(JSON.parse(stringifyObject)){
//     console.log('valid object');
// } else {
//     console.log('Invalid object');
// }


// whenever we get some error then use try catch
try {
    console.log(JSON.parse(stringifyObject));
} catch(e) {
    console.log(e);
}

console.log('after try catch');