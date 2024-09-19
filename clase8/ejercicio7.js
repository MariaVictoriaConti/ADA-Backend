const prompt = require("prompt-sync")({ sigint: true});

let peso = parseFloat(prompt("Ingrese su peso en kilogramos: "));

let pesoLibras = parseInt(peso / 2.20462);
console.log("Su peso en libras es: " + pesoLibras + " libras.");

