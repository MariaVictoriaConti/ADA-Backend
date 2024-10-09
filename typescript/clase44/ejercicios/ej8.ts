/*Actividad 8: Clase genérica con iteración

Crea una clase genérica llamada Coleccion que acepte un tipo genérico T. Esta
clase debe tener:
1. Un arreglo privado donde se almacenan los elementos.
2. Un método agregar que permita añadir un nuevo elemento.
3. Un método recorrer que use un bucle for...of para iterar sobre los
elementos y aplicar una función pasada por parámetro.
Utiliza esta clase para almacenar números y luego imprimir solo los valores
pares*/
class Coleccion<T>{
private almacenElements:T[] = [];


agregarElemento<T>(valor:T){
return this.almacenElements;
}
}