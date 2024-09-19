const prompt = require("prompt-sync")({ sigint: true});

let peso = parseFloat(prompt("Ingrese su peso: "));
let altura = parseFloat(prompt("Ingrese su altura: "));

let imc = parseFloat(peso / (altura*altura));
console.log("Su indice de masa corporal es: " + imc);