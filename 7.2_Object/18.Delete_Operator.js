var obj = {
    name: "Rahul",
    age: 10
};

//if i want to delete any proprty use delete operator

delete obj['name'];
delete obj['address'];//it will ignore.
console.log(obj);

