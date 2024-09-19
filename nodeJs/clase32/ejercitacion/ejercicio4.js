const readlineSync = require('readline-sync');

const numeros = readlineSync.question("Ingrese 5 numeros separados por comas: ");

const numerosArray = numeros.split(",");

numerosArray.sort((a,b)=>a-b);

console.log("Los numeros ingresados y ordenados de menor a mayor son: " + numerosArray);
