/*Cálculo de descuento por edad
Solicita al usuario su edad y usa una función flecha para aplicar un descuento
dependiendo de la edad. Puedes tomar punto de partida los siguientes datos:
✓ 65 anos = 15% de descuento
✓ Menor a 65 = No hay descuento*/
const prompt = require("prompt-sync")({ sigint: true});


let edad = parseInt(prompt("Ingrese su edad: "));
let precio = 200;
let total;

let calcularDesc = (edad) => {
    if(edad <65){
        return "No tenes descuento.";
    }else{
        total = precio - (precio * (15 / 100));
        return "Tenes un 15% de descuento en tus compras! El total a abonar es: $" + total;
    }
}
let descSiOno = calcularDesc(edad);

console.log(descSiOno);