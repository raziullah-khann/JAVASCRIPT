// async function hello() {
//     return 5;
// }
// hello().then(x=>{
//     alert(x);
// });

async function h1() {
  let delhiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("27 Deg");
    }, 1000);
  });

  let bangaloreWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("21 Deg");
    }, 2000);
  });

//   delhiWeather.then(alert);
//   bangaloreWeather.then(alert);
  console.log("delhiweather is waiting");
  let delhiW = await delhiWeather;
  let bangaloreW = await bangaloreWeather;
  return [delhiW, bangaloreW]
}

async function h2() {
    console.log("I am not waiting!");
}
async function h3() {
    let a = await h1()
    console.log(a);
    let b = await h2()
};
h3();

