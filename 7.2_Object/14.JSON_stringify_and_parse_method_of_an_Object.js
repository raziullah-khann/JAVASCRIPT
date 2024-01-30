var num = 10;
console.log(num.toString()); // if number is string then color is black
console.log(num);//blue color if number is number


// The JSON.stringify() static method converts a JavaScript value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.
const obj = {
    age: 10,
    name: 'sai'
}

// if we want to convert any object into string then use JSON.stringify()
console.log(obj); //it is object
console.log(JSON.stringify(obj));  // it is not an object bcs not have prototype. it is a plain string

// if we want to convert string to object
let str = '{"age":10,"name":"sai"}';
//JSON.parse(obj) it is a method to convert string of object into an object.
console.log(JSON.parse(str));

let str1 = '{"age":10,"name":"sai"'; //if syntax wrong then throw error
console.log(JSON.parse(str1));