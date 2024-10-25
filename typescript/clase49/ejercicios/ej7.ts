/*Ejercicio 7: Uso de tuplas en una función genérica (Ejercicio Entrevista)
Crea una función genérica que acepte una tupla con dos elementos de cualquier
tipo y retorne una nueva tupla con los elementos invertidos.
Para este ejercicio deben pensar mucho porque es para poner en juego la lógica
de programacion */

export function invertidos<T, U>(tupla: [T, U]): [U,T]{
     return [tupla[1], tupla[0]]
}

console.log(invertidos(["Coca", 12]));

