//REST
//Trabaja con JSON, no con XML
fetch("https://jsonplaceholder.typicode.com/users/2")
    .then((response) => {
        // primero recibo la data y la convierto a json
        return response.json();
    })
    .then((data) => {
        // luego imprimo esa data en consola.
        console.log(data);
    })