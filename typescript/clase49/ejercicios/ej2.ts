/*Ejercicio 2: Definición de una interfaz para un objeto simple
Define una interfaz para representar una persona con nombre, edad y correo
electrónico. Crea una función que imprima esta información.*/

interface Persona{
    nombre:string;
    edad:number;
    correoElectronico:string;
}

function imprimir(persona:Persona):void{
    console.log(persona);
};

export const persona1: Persona = {nombre:"Vicky", edad:25, correoElectronico:"sda"} 
imprimir(persona1)


