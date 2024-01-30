sessionStorage.setItem("name", "Raziullah");
sessionStorage.setItem("age", "25");
sessionStorage.setItem("address", "Rajkot");
sessionStorage.removeItem("address");
console.log(sessionStorage.getItem("age"));
console.log(sessionStorage.length);
// sessionStorage.clear();
console.log(sessionStorage);

localStorage.setItem("name", "Rahul");
window.onstorage = (e) => {
    alert("changed");
    console.log(e);
}

