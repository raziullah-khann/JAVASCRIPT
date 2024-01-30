let wm = new WeakMap();
var obj6 = {name: "Tiger"};
var obj7 = {};
wm.set(obj6,"hello");
wm.set(obj7, "welcome");
console.log(wm);
console.log(wm.has(obj6));
wm.delete(obj7)
console.log(wm);
console.log(wm.get(obj6));