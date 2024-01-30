// var a = 60;
// var b = 40;
const objec = {
    a: 10,
    b: 20,
    getMessage: function(){
        return this.a+this.b;
    }
};

console.log(objec.getMessage);// this return whole function
console.log(objec.getMessage()); //this is invoke the function



function Add1(param1){
    this.a = 10;
    this.b = 20;
    this.getMessage = function(innerparam1) {
        return `Hi i am inside the function ${this.a+param1+innerparam1}`;
    }
}

const addObj = new Add1(13);  //we can pass the external parameter
console.log(addObj.getMessage(12)); //you can pass inner param

class Addition {
    a = 15;
    b = 25;

    constructor(param1){
        this.c = param1
    }
    getMessage(innerparam1){
        return 'Hi i am inside the class'+' '+ innerparam1 + this.c;
    }
}

const AdditionObj = new Addition(10);
console.log(AdditionObj.getMessage('innerparam'));