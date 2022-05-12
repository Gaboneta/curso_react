// son codigos que pueden ejecutarse o no. Dependen de la respuesta de otra cosa.

const sumar = (a,b) => {
    return new Promise((resolve, reject) => { /// a las promesas se les manda como parametro un CALLBACK, que tiene tanto un Resolve, que se ejecuta si todo sale bienm y sino hace un REJECT
        if(a<0 || b<0){
            reject("Esto no es valido");
        } else {
            resolve("Sos un gil");
        }
    })
}

const result = sumar(3, 5)
    .then((res) => {
        document.write(res);
    })
    .catch((err) => {
        document.write(err);
    });
//luego del .then, va lo que passa si todo  sale bien ,entonces ejecutas una arrow funcion para escribir el RESOLVE de la promise. 
//Luego del .catch va lo que pasa si hay errores, entonces armas una arrow funcion para escribir el REJECT de la promise

console.log(result);

// document.write(result);
