
//Cuando el navegador carga, lo que hace es definir todas las variables que se usan en el archivo, es decir que va a hacer esto:
//var saludo, nombre;

var saludo = function(){
    document.write('Hola Mundillo!');
}

var nombre = "sasl";

saludo();


// LET se usa como una variable comun de VB.NET, la podes usar desde que la definis.
// Variables Mutables, van a cambiar a lo largo del programa

let nombre_let = "Jsari";
nombre = "ooper";
document.write(nombre);


//CONST se usa para definir una variable que no va a cambiar a lo largo de todo el archivo.

const puerto_http = '1433';
