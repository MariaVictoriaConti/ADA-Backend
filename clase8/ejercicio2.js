const prompt = require("prompt-sync")({ sigint: true});

const RANGO_MINIMO = 10;
const RANGO_MAXIMO = 100;

let numeroUsuario = parseInt(prompt("Ingrese un numero del 1 al 100: "));

if(numeroUsuario >= RANGO_MINIMO && numeroUsuario <= RANGO_MAXIMO){
    console.log("El numero que ingresaste esta dentro del rango establecido.")
}else{
    console.log("El numero que ingresaste esta fuera del rango permitido.")
;}