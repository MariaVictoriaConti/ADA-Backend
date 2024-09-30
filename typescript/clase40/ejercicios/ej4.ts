/*Ejercicio 4: Manipulación de Arrays
1. Crea un array que contenga los nombres de tus 5 frutas favoritas.
2. Usa un método para añadir otra fruta al final del array.
3. Encuentra el índice de una fruta específica (por ejemplo, "Manzana")
dentro del array.
4. Elimina la última fruta y muestra el array actualizado por consola.*/

export let frutas:string[] = ['manzana', 'pera', 'frutilla', 'kiwi', 'sandia'];

frutas.push('mango');
console.log(`Array frutas luego de agregar mango al final: ${frutas}`);

console.log("El indice de frutilla es: " + frutas.indexOf('frutilla'));

frutas.pop();
console.log(`El array de frutas luego de eliminar la ultima fruta (mango) queda de esta forma: ` + frutas);

