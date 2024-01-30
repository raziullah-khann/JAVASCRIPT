// console.log("Array welcome"); 
// const words = ['Apple',"Banana","Cherry",1,5.3,true, 
// {
//     name:'Raziullah',
//     age:22
// }, 
// function hello(){
//     console.log("Hello function");
// }
// ];
// // console.log(words[7]);
// console.log(words[7]="kiwi");
// console.log(words);
// console.log(words.length);

//Array methods
// const nums = [4,1,2,8,2,8,6];
// console.log(nums.indexOf(8));
// console.log(nums.lastIndexOf(8)); 
// console.log(nums.lastIndexOf(80)); 
// console.log(nums.includes(8)); 
// nums.push("khan");
// nums.unshift("khan");
// nums.pop();
// nums.shift();
// nums.sort()
// const subArray = nums.slice(2,5);
// console.log(subArray);



let a = 'ProminentPixel';
let obj = {};

for(let i = 0; i< a.length; i++){
    //convert to all in lowercase
    let letter = a[i].toLowerCase();
    // console.log(letter);
    if(obj[letter] !== undefined){
        obj[letter]++;
    } else {
        obj[letter] = 1;
    }
}
// obj[p] = 1;
console.log(obj);
console.log(obj.p);