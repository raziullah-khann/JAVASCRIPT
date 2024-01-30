let text = "John Doe \"Welcome";
console.log(text);
console.log(text.length)

let y = new String("John");
console.log(typeof text, typeof y)  // string, object

let x1 = "John";
let y1 = new String("John");
console.log(x1==y1);  //true
console.log(x1===y1); // false

// Comparing two JavaScript objects always returns false.

// string methods
let texts = "Apple, Banana, Kiwi";
let part = texts.slice(7, 13);
let part1 = texts.substring(7, 13);  //start end with 0
let part2 = texts.substr(7, 6);  //.substr(start, length)
console.log(texts.substring(-1));
console.log(part==part1)


let txt = "Please visit Microsoft!";
// The replace() method replaces only the first match
let newText = txt.replace("Microsoft", "W3Schools");
console.log(newText)

// concat() joins two or more strings:
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
console.log(text3)

// The trim() method removes whitespace from both sides of a string:
let text10 = "      Hello World!      ";
let text11 = text1.trim();
// The trimStart() method works like trim(), but removes whitespace only from the start of a string.

// The trimEnd() method works like trim(), but removes whitespace only from the end of a string.

// Pad a string with "0" until it reaches the length 4:

let pad = "5";
let padde = pad.padStart(4,"0");  // 0005

// The padEnd() method pads a string from the end.

// It pads a string with another string (multiple times) until it reaches a given length.

let numb = 5;
let textt = numb.toString();
let padded = textt.padEnd(4,"0"); //'5000'
console.log(padded)


// The charAt() method returns the character at a specified index (position) in a string:
let tex = "HELLO WORLD";
let char = tex.charAt(0);  //H

// The charCodeAt() method returns the unicode of the character at a specified index in a string:
let texttt = "HELLO WORLD";
let cha = texttt.charCodeAt(0); //72

text[0] = "A";  // Does not work

// A string can be converted to an array with the split() method:
let t = "a,b,c,d,e,f";
console.log(t.split(","));

// Both indexOf(), and lastIndexOf() return -1 if the text is not found:
let tx = "Please locate where 'locate' occurs!";
let index = tx.indexOf("locate");
console.log(index); //it gives index number of given substring
console.log(tx.lastIndexOf("locate")); 
//The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:


// JavaScript String search()
// The search() method searches a string for a string (or a regular expression) and returns the position of the match:
// let text = "Please locate where 'locate' occurs!";
tx.search("locate");  // 7

/*
The two methods, indexOf() and search(), are equal?

They accept the same arguments (parameters), and return the same value?
The two methods are NOT equal. These are the differences:

The search() method cannot take a second start position argument.
The indexOf() method cannot take powerful search values (regular expressions).*/


/* JavaScript String match()
The match() method returns an array containing the results of matching a string against a string (or a regular expression).*/

let mat = "The rain in SPAIN stays mainly in the plain";
console.log(mat.match("ain"));

