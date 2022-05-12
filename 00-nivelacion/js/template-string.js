const nombre = "Yirsis";
const edad = new Date().getFullYear()-1998;

document.write("Bienvenido " , nombre, ", tu edad es de ",  edad);


// ADENTRO DE LOS CORCHETES PODES EJECUTAR CUALQUIER COSA DE JAVASCRIPT, ES COMO SI FUESE OTRO ARCHIVO JS AHI ADENTRO
document.write(`Bienvenido ${nombre}, tienes la edad de ${edad}`.toUpperCase())