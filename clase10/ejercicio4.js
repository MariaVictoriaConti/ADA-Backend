const prompt = require("prompt-sync")({ sigint: true });

const contrasenia = "1234";
let contraseniaIngresada = prompt("Ingrese una contraseña de 4 digitos numericos: ");

do {
    contraseniaIngresada = prompt("Ingrese una contraseña de 4 digitos numericos valida: ");

} while (contraseniaIngresada !== contrasenia){
    console.log("Acertaste la constraseña, es 1234!");
};
