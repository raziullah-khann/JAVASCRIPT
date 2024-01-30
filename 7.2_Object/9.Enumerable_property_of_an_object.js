const ob = {
    age: 10
}
console.log(Object.keys(ob));

// what is enumerable?
//Enumerable is the property where you can hide the particular property over the object.keys
Object.defineProperty(ob, 'name', {
    value: 'sai kumar',
    enumerable: true,
    writable: true
});

console.log(Object.keys(ob));

// How check property is numerable or not
console.log('name property checked',ob.propertyIsEnumerable('name'));
console.log('age property checked',ob.propertyIsEnumerable('age'));