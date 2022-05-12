//sirve para hacer peticiones a una API como alternativa a fetch
axios
    .get("https://jsonplaceholder.typicode.com/users/3")
    .then(({ data }) => console.log(data)); // las llaves en data es el destructuring
    