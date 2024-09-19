/*2) Tenemos un array en una variable librosDeJS con una lista de libros de
javascript. Queremos saber la cantidad de libros que tenemos en el array
Nos pidieron que evitemos usar la propiedad length para contar los
elementos de un array y que tenemos que usar si o si un forEach
Completá el siguiente código para que funcione el último console.log() y
muestre el mensaje Mi lista de libros de JavaScript tiene 9 libros.*/
const librosDeJS = ["libro1", "libro12", "libro3", "libro4", "libro5", "libro6", "libro7", "libro8", "libro9"];
let suma = 0;
librosDeJS.forEach(() => suma++);

console.log(`Mi lista de libros de JS tiene ${suma} libros`);