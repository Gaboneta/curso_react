const Usuario = {
    name: "Gabrielito",
    edad: 23,
    email: "mail@gmail.com",    
};

document.write("<h3>" + Usuario.name + "</h3>");
document.write("<h3>" + Usuario.edad + "</h3>");
document.write("<h3>" + Usuario.email + "</h3>");
// document.write("<h3>" + Usuario.name + "</h3>");

// OTRA MANERA DE ARMAR JSON. Se llama destructuring
const {name, edad, email} = {
    name: "Gabrielito",
    edad: 23,
    email: "mail@gmail.com",    
};

document.write("<h3>" + name + "</h3>");
document.write("<h3>" + edad + "</h3>");
document.write("<h3>" + email + "</h3>");