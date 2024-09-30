//Declaracion e inicializacion de una tupla
export let persona: [string, number];

//Inicializacion de la tupla
persona = ['Ana', 25];

// Accediendo a los elementos de la tupla
console.log('Nombre: ' + persona[0]);
console.log('Edad: ' + persona[1]);

//Modificar la tupla
persona[1] = 30;
console.log('Edad actualizada: ' + persona[1]);

//Desestructurar la tupla
let [nombre, edad] = persona;
console.log(`La persona se llama ${nombre} y tiene ${edad} anios`)



