/*Ejercicio 3: Uso de type con unión de tipos y función que retorna tupla
Define un type que pueda representar tanto números como cadenas. Crea una
función que reciba dos parámetros de este tipo y retorne una tupla con el tipo
de cada parámetro.*/

type numerosYcadenas = number | string;

function queRetorna(param1:numerosYcadenas, param2:numerosYcadenas): [string, string]{
    return [typeof param1, typeof param2]
}

console.log(queRetorna(1,"Hola"))