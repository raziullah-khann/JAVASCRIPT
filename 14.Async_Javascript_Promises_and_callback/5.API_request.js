const requestURL = "https://api.github.com/users/RAZIULLAH-KHAN12";
const xhr = new XMLHttpRequest();
xhr.open("GET", requestURL);
xhr.onreadystatechange = function() {
    console.log(xhr.readyState); //Returns client's state.
    if (xhr.readyState == 4) {
        const data = JSON.parse(this.responseText);//Returns response as text.
        console.log(typeof data);
        console.log(data.followers);


        const image = document.getElementById('img')
        const names = document.getElementById('name')
        image.src=data.avatar_url;
        names.innerHTML = data.login;
    }
}
console.log("HERE");
xhr.send();

// async function GetData(){
// const response = await fetch('https://api.github.com/users/lav-kushwaha');
// const data = await response.json();
// console.log(data)
// const image = document.getElementById('img')
// image.src=data.avatar_url;
// const names = document.getElementById('name')
// names.innerHTML = data.name;
// }

// GetData();