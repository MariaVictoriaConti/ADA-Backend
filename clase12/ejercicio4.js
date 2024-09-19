//• Ejercicio 4: Calcular descuento por cantidad
//Solicita al usuario la cantidad de productos comprados y el precio unitario. Usa una función flecha para calcular el total con descuento según la cantidad.
const prompt = require("prompt-sync")({ sigint: true});

let cantidadProductos = parseInt(prompt("Cuantos productos compraste?: "));
let precioUnitario = [];
let suma = 0;

for (let i = 0; i < cantidadProductos; i++) {
    precioUnitario[i] = parseFloat(prompt("Cuanto vale tu producto " + (i + 1) + "?: "));
suma += precioUnitario[i];
}
console.log("Tu total sin descuento es: " + suma);

let total = 0;
let totalConDesc = (cantidadProductos) => {
    if(cantidadProductos <= 5){
        totalDesc = parseFloat(10/100)*suma;
        total = suma - totalDesc;
        console.log("Tenes un 10% de descuento." + "El total a abonar es: " + total)
    }else{
        totalDesc = parseFloat(20/100)*suma;
        total = suma - totalDesc;
        console.log("Tenes un 20% de descuento." + "El total a abonar es: " + total)
    }        
}
totalConDesc(cantidadProductos);




