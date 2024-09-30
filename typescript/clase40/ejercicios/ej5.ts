/*Ejercicio 5: Tuplas y desestructuración
1. Declara una tupla para representar las coordenadas de un punto en el
plano (x, y).
2. Inicializa la tupla con los valores [10, 15].
3. Desestructura los valores de la tupla en dos variables: x e y.
4. Imprime por consola los valores de x e y*/

let coordenadas: [number, number];

coordenadas = [10, 15] 

let [x, y] = coordenadas

console.log('La coordenada x vale: ' + x);
console.log('La coordenada y vale: ' + y);


