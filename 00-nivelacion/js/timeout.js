const evaluar = () => {
    const edad = prompt("Cual es tu edad?");

    if(edad < 18){
        alert("Menor de Edad");
        return;
    }

    alert("Mayor de edad");
}

setTimeout(evaluar, 2000);