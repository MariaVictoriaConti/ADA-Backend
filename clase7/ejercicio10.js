const prompt = require("prompt-sync")({ sigint: true });

let precioOriginal = parseFloat(prompt("Ingrese precio original del producto: "));
let porcentajeDescuento = parseFloat(prompt("Ingrese el porcentaje de descuento: "));

let montoDescuento = parseFloat(precioOriginal * (porcentajeDescuento / 100));
console.log("El precio final con el " + porcentajeDescuento + "% de descuento es de: " + (precioOriginal - montoDescuento) + ".");
