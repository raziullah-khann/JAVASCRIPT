//Adding the properties
const simpleObj4 = {
    age: 10
}

simpleObj4.name = "Raziullah";
simpleObj4['address'] = "Gujarat";  //whenever we add new property use square bracket
simpleObj4.age = 30; //whenever we modify properties use . operator
simpleObj4['first name'] = 'Raziullah khan';

//we can add array inside an object
const arr1 = [10, 20, 30, 40];
simpleObj4['arr'] = arr1;


//we can add object inside an object
const ob = {
    mobile: '123465233',
    phone: '1454240244'
}
simpleObj4['ob'] = ob

console.log(simpleObj4);