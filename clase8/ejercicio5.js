const prompt = require("prompt-sync")({ sigint: true});

let numero1 = prompt("Ingrese el primer numero: ");
let numero2 = prompt("Ingrese el segundo numero:");
let numero3 = prompt("Ingrese el tercer numero:");

let numeroMayor = null;

if(numero1 > numero2 && numero1 > numero3){
    console.log("El numero mayor es: " + (numeroMayor = numero1))
}else if(numero2 > numero1 && numero2 > numero3){
    console.log("El numero mayor es: " + (numeroMayor = numero2))
}else if(numero3 > numero1 && numero3 >numero2){
    console.log("El numero mayor es: " + (numeroMayor = numero3))
};


