/*Ejercicio 5: Números Naturales
Se ingresa por teclado un número natural de hasta 2 cifras, si tiene una cifra
que muestre lo mínimo que le falta para ser un número de 2 cifras; de lo
contrario, que muestre lo mínimo que le falta para ser un número de 3 cifras.
Considerar que el usuario ingresa números de hasta dos cifras.*/

const prompt = require("prompt-sync")({ sigint: true });

let ingreseNum = parseInt(prompt("Ingrese un numero natural: "));

let numNaturales = ingreseNum =>{
if(ingreseNum < 10){
    let diferencia = 10 - ingreseNum;
    console.log("Al numero ingresado le falan " + diferencia + " numeros para ser de 2 cifras.")
}else if(ingreseNum >= 10 && ingreseNum <= 100){
    diferencia = 100 - ingreseNum;
    console.log("Al numero ingresado le falan " + diferencia + " numeros para ser de 3 cifras.")
}
}
numNaturales(ingreseNum);