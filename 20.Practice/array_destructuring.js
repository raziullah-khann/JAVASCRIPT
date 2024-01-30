//Destructuring in javascript.

// Let’s now see how array destructuring makes things neater and DRYer.

// const profile = ["Oluwatobi", "Sofela", "codesweetly.com"];
// const [, b, c] = profile;
// console.log(b);




// How to Do Direct Array Destructuring
// const [firstName, lastName, website] = [
//     "Oluwatobi", 
//     "Sofela", 
//     "codesweetly.com"
// ];
// console.log(lastName)



// How to Use Array Destructuring While Separating Variable Declarations from Their Assignments
// let firstName, lastName, website;

// [firstName, lastName, website] = ["Oluwatobi", "Sofela", "codesweetly.com"];



// How to Use Array Destructuring to Assign the Rest of an Array Literal to a Variable

// const [firstName, ...otherInfo] = ["Oluwatobi", "Sofela", "codesweetly.com"];
// console.log(otherInfo); //['Sofela', 'codesweetly.com']



// How to Use Array Destructuring to Extract Values at Any Index

// const [, , website] = ["Oluwatobi", "Sofela", "codesweetly.com"];

// console.log(website); // "codesweetly.com"



// How Default Values Work in an Array Destructuring Assignment

const [firstName = "Tobi", website = "CodeSweetly"] = ["Oluwatobi"];
console.log(firstName);  //Oluwatobi
console.log(website);   //CodeSweetly

//How to Use Array Destructuring to Extract Values from an Array to a Function’s Parameters

//example 1
// const profile = ["Oluwatobi", "Sofela"];
// function getUserBio([firstName, lastName]) {
//     return `My name is ${firstName} ${lastName}.`;
// };

// console.log(getUserBio(profile));  //My name is Oluwatobi Sofela.

//example 2
// Define an array with two string values and one nested array:
const profile = ["codesweetly.com", "Male", ["Oluwatobi", "Sofela"]];
// Define a function with two destructuring arrays containing a parameter each:
function getUserBio([website, , [userName]]) {
    return `${userName} runs ${website}`;
}

// Invoke getUserBio while passing the profile array as an argument:
console.log(getUserBio(profile));  //Oluwatobi runs codesweetly.com 

// The invocation above will return:
"Oluwatobi runs codesweetly.com"


// How to Invoke a Function Containing Array Destructuring Parameters Without Supplying Any Argument
// function getUserBio([firstName]) {
//     console.log(
//       "Do something else that does not need the destructuring parameter."
//     );
//     return `My name is ${firstName}.`;
// }
// getUserBio();  //throwing a TypeError

// function getUserBio([firstName] = []) {
//     console.log(
//       "Do something else that does not need the destructuring parameter."
//     );
//     return `My name is ${firstName}.`;
//   }