/*Actividad 5: Usar aserciones de tipo

Declara una variable de tipo any y usa una aserción para tratarla como string,
accediendo a la propiedad .length.*/

export let variable:any='Coca cola';
//let variableString = (variable as string)
let variableString = <string>variable

console.log(variableString.length);


