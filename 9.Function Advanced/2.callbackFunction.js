console.log('Welcome call backFunction');
const calculate = (a,b,operation) =>{
    return operation(a,b);
};

//method 1
function addition(a,b){
    return a+b;
}

const result = calculate(4,2, addition);
console.log(result); 

function sub(a,b){ 
    return a-b;
}
const result1 = calculate(4,2, sub);
console.log(result1); 
