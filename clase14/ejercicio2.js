/* Ejercicio 2: Libros
Define dos objetos libro1 y libro2 con las siguientes propiedades y valores:
✓ título: una cadena con el título del libro.
✓ autor: una cadena con el nombre del autor del libro.
✓ anioPublicacion: un número con el año de publicación del libro.
Luego, crea una función llamada mostrarLibro que tome un arreglo de libros
como parámetro y muestre por consola la información de cada libro en el
formato especificado*/

let libro1 = {titulo: "Flores", autor: "Juancho Pereira", anioDePublicacion: "1989"};
let libro2 ={titulo: "El corazon de leon", autor: "Franco Suarez", anioDePublicacion: "2000"};

function mostrarLibro(){
   let libros = [libro1, libro2];
   console.log("Los libros de la lista de libros son: ", libros);
    return libros;
}
mostrarLibro();
