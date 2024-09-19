//• Ejercicio 1: Calcular el precio final con IVA. 
//Solicita al usuario el precio de un producto y el porcentaje de IVA. 
//Usa una función flecha para calcular el precio final.

const prompt = require("prompt-sync")({ sigint: true});

let precio = parseFloat(prompt("Ingrese el precio del producto: "));
let iva = parseFloat(prompt("Ingresar valor IVA: "));

const precioConIva = (precio, iva) => precio + (precio * iva / 100);
let precioFinal = precioConIva(precio, iva);

console.log(`El precio final con iva es $${precioFinal}.`)