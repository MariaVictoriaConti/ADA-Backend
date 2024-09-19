const prompt = require("prompt-sync")({ sigint: true});

const EDAD_MINIMA = 18;

let edad = parseInt(prompt("Ingrese su edad: "));

if (edad >= EDAD_MINIMA){
    console.log("Usted es mayor de edad.")
}else{
    console.log("Usted es menor de edad.")
};
