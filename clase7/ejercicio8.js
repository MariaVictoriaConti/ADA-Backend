const prompt = require("prompt-sync")({ sigint: true});

let celsius = parseInt(prompt("Ingrese temperatura actual en grados Celsius: "));

console.log("Temperatura actual: " + celsius + " grados Celsius.");

let fahrenheit = parseInt(celsius * 9 /5 + 32);
console.log("Temperatura actual: " + fahrenheit + " grados Fahrenheit.");
