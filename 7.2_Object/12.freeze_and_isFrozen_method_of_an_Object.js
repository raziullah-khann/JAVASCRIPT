/* The Object.freeze() static method freezes an object.Freezing an object prevents extensions and makes existing properties non-writable and non-configurable. A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed, and the object's prototype cannot be re-assigned. freeze() returns the same object that was passed in.*/
console.log("freeze and isFreezen");

const obj = {
    age: 10
}

Object.freeze(obj);


//Add peoperty
obj['name'] = 'sai'

//update property
obj.age = 30;

//delete property
delete obj.age;

// so here not delete, not update and not add new property the reason is object is freeze.
console.log(obj);

// to check object is freeze or not .isFrozen(), return boolean value
console.log(Object.isFrozen(obj));