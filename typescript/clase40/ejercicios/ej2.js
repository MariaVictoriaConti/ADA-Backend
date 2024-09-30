/*Ejercicio 2: Tuplas para almacenar información
1. Declara una tupla para representar un libro con la siguiente información:
título (string), año de publicación (número) y si está disponible (booleano).
2. Inicializa la tupla con los valores: "El principito", 1943, true.
3. Imprime el título del libro y el año de publicación.
4. Cambia el valor de disponibilidad a false y muestra el nuevo valor por
consola.*/
var tuplaLibro;
tuplaLibro = ['El principito', 1943, true];
console.log('El titulo del libro es: ' + tuplaLibro[0]);
console.log('El anio de publicacion del libro es: ' + tuplaLibro[1]);
tuplaLibro[2] = false;
console.log('La disponibilidad cambio de true a> ' + tuplaLibro[2]);
