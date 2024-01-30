let ws = new WeakSet();
var obj1 = {name: "Tiger"};
var obj2 = {};
ws.add(obj1);
ws.add(obj2);
ws.delete(obj1);
console.log(ws);
console.log(ws.has(obj1));