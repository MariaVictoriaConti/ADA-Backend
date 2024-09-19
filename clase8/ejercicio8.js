const prompt = require("prompt-sync")({ sigint: true});

let lado1 = parseInt(prompt("Ingrese la longitud del lado 1 del triangulo: "));
let lado2 = parseInt(prompt("Ingrese la longitud del lado 2 del triangulo: "));
let lado3 = parseInt(prompt("Ingrese la longitud del lado 3 del triangulo: "));

if(lado1 == lado2 && lado2 == lado3){
    console.log("Es un triangulo equilatero.")
}else if(lado1 == lado2 && lado3 != lado1){
    console.log("Es un triangulo escaleno.")
}else if(lado1 == lado3 && lado2 != lado1){
    console.log("Es un triangulo escaleno.")
}else if(lado2 == lado3 && lado1 != lado2){
    console.log("Es un triangulo escaleno.")
}else if(lado1 != lado2 && lado2 != lado3 && lado3 != lado1){
    console.log("Es un triangulo isosceles.")
};

