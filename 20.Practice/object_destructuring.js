const profile = {
    firstName: "Raziullah", 
    lastName: "Khan", 
    website: "codesweetly.com"
  };
  
// const { firstName: firstName1, lastName: lastName1, website: website1 } = profile;
// console.log(firstName1);

//sorter syntax
const {  lastName,firstName, website, ram } = profile;
console.log(firstName);
console.log(ram) //undefined 

// How to Use Object Destructuring When the Property’s Name Differs from That of the Variable
const profile1 = {
  firstName: "Oluwatobi", 
  lastName: "Sofela", 
  website: "codesweetly.com"
};

const { firstName: forename, lastName: surname, website: onlineSite } = profile1;
console.log(forename); // "Oluwatobi"
console.log(surname); // "Sofela"
console.log(onlineSite); // "codesweetly.com"
console.log(website); // "ReferenceError: website is not defined"


const profile2 = {
  lastName: { familyName: "Sofela" }
};

const { lastName: { familyName: surname1 } } = profile2;

console.log(surname1); // "Sofela"

// How to Use Object Destructuring While Separating Variable Declarations from Their Assignments
// Declare three variables:
let firstName4, lastName4, website4;

// Extract values to the three variables above:
({ firstName4, lastName4, website4 } = {
  firstName4: "Oluwatobi", 
  lastName4: "Sofela", 
  website4: "codesweetly.com"
});

// Invoke the three variables:
console.log(firstName4); // "Oluwatobi"
console.log(lastName4); // "Sofela"
console.log(website4); // "codesweetly.com"


// How to Use Object Destructuring to Assign the Rest of an Object to a Variable

const { firstName5, ...otherInfo } = {
  firstName5: "Oluwatobi",
  lastName: "Sofela",
  website: "codesweetly.com"
};

console.log(firstName5); // "Oluwatobi"
console.log(otherInfo); // {lastName: "Sofela", website: "codesweetly.com"}



// How Default Values Work in an Object Destructuring Assignment
const { firstName6 = "Tobi", website6 = "CodeSweetly" } = {
  firstName6: "Oluwatobi"
};

console.log(firstName6); // "Oluwatobi"
console.log(website6); // "CodeSweetly"


// How to Use Object Destructuring to Extract Values from Properties to a Function’s Parameters
// Define an object with two properties:
const profile4 = {
  firstName: "Rahul",
  lastName: "D",
};

// Define a function with one destructuring object containing two parameters:
function getUserBio({ firstName, lastName }) {
  return `My name is ${firstName} ${lastName}.`;
}

// Invoke getUserBio while passing the profile object as an argument:
console.log(getUserBio(profile4));

// The invocation above will return:
"My name is Oluwatobi Sofela."


// Define an object with three-parent properties:
const profile10 = {
  website: "codesweetly.com",
  gender: "Male",
  fullName: {
    firstName: "Oluwatobi",
    lastName: "Sofela"
  }
};

// Define a function with two destructuring objects containing a parameter each:
function getUserBio({ website, fullName: { firstName: userName } }) {
  return `${userName} runs ${website}`;
}

// Invoke getUserBio while passing the profile object as an argument:
getUserBio(profile10);

// The invocation above will return:
"Oluwatobi runs codesweetly.com"