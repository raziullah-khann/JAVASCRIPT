//get

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//post
// let options = {
//     method: 'POST',
//     headers: {
//         'Content-type': 'application/json'
//     },
//     body: JSON.stringify({
//         title: 'Raziullah',
//         body: 'Khan',
//         userId: 11 ,
//       }),
// }
// fetch('https://jsonplaceholder.typicode.com/posts', options) 
//   .then((response) => response.json())
//   .then((json) => console.log(json));

const createTodo = async(todo) => {
    let options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(todo),
    }
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options);
    let response = await p.json();
    return response;
}

const getTodo = async(id) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/'+id);
    let data = await response.json();
    return data;
}

const mainFunc = async() => {
    let todo = {
        title: 'Raziullah',
        body: 'Khan',
        userId: 11 ,
    }
    let todor = await createTodo(todo);
    console.log(todor);
    console.log(await getTodo(5));
}

mainFunc();