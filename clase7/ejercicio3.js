const prompt = require("prompt-sync")({ sigint: true});

const EDAD_MINIMA = 18;
const EDAD_MAXIMA = 99;

let edad = parseInt(prompt("Ingrese su edad: "));

if (edad >= EDAD_MINIMA && edad <= EDAD_MAXIMA){
    console.log("Estas dentro del rango de edad permitido.");
}else{
    console.log("No estas dentro del rango de edad permitida");
}



