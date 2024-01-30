let p = fetch("https://goweather.herokuapp.com/weather/Ny");
p.then(res => {
        console.log(res.ok);
        console.log(res.status);
        console.log(res.headers);
    console.log(res);    
    return res.json();
}).then(res1 => {
    console.log(res1);  
})
.catch(err =>{
    console.log(err);
})