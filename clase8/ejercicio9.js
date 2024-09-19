const prompt = require("prompt-sync")({ sigint: true});

const PI = 3.14159 ;
let radio = parseFloat(prompt("Ingrese el radio de un circulo: "));

const area = PI * (radio * radio);
console.log("El area del circulo es: " + area + ".");

const perimetro = (2 * PI)* radio;
console.log("El perimetro del circulo es: " + perimetro + ".");

