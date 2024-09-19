const prompt = require("prompt-sync")({ sigint: true});

let numero1 = prompt("Ingrese un numero: ");
let numero2 = prompt("Ingrese un numero diferente al anterior: ");

console.log(numero1);
console.log(numero2);

if(numero1 > numero2){
    console.log(numero1 + " es mayor que: " + numero2)
}else if(numero2 > numero1){
    console.log(numero2 + " es mayor que: " + numero1)
};

if(numero1 == numero2){
    console.log("Los numeros son iguales")
}else{
    console.log("Los numeros son distintos.")
}

