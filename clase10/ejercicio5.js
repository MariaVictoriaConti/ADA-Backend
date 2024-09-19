const prompt = require("prompt-sync")({ sigint: true });

let nota = parseInt(prompt("Ingrese una nota del 0 al 100: "));

console.log(nota >= 0 && nota <= 59 ? "F" : nota >= 60 && nota <= 69 ? "D" : nota >= 70 && nota <= 79 ? "C" : nota >= 80 && nota <= 89 ? "B" : nota >= 90 && nota <= 100 ? "A" : "Nota invalida.");

