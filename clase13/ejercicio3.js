/*Ejercicio 3: Número secreto
Escribí un programa que piense un número de forma aleatoria del 1 al 10 y
le pida al usuario que lo trate de adivinar. Si el número es correcto debe
imprimir en la consola “Felicitaciones, ¡ese era!", de lo contrario, debe
imprimir "Lo siento, ¡intenta nuevamente!"*/

const prompt = require("prompt-sync")({ sigint: true });
let numAleat = Math.floor(Math.random() * 10) + 1;
console.log(numAleat);
let numero = prompt("Ingresa un numero del 1 al 10: ");
let i = 0;
let continuar;

do {
if(numero==numAleat){
    console.log("Acertaste!")
}else if(numAleat!=numero){
    prompt("intenta de nuevo: ");

}
} while (numero!=numAleat);  


