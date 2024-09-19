const prompt = require("prompt-sync")({ sigint: true});

let nombre = prompt("Ingrese su nombre: ");
let edad = prompt("Ingrese su edad: ");
let peso = prompt("Ingrese su peso: ");

console.log("Bienvenido/a " + nombre + "! " + "Su peso actual es de " + peso + " " + "kilos. " + "Usted tiene " + edad + " " + "años.")