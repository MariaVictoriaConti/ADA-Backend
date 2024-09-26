/*Ejercicio 2: Uso de funciones con parámetros opcionales
Consigna: Define una función llamada saludar que acepte un parámetro nombre
de tipo string y otro opcional saludo de tipo string. Si el parámetro saludo no es
proporcionado, la función debe usar "Hola" por defecto. Retorna el saludo y
muestra el resultado en la consola.*/

let saludar = function (nombre:string, saludo:string ="Hola"){
    return `${saludo}, ${nombre}`
}

console.log(saludar("Victoria"))
console.log(saludar("Victoria", "Bienvenida!"))


//Otra opcion
let saludar2 = function (nombre:string, saludo?:string){
    if(saludo){
        return `${saludo}, ${nombre}`;
    }else{
        return `Hola ${nombre}`;
    }
}

console.log(saludar2("victoria"));
console.log(saludar2("victoria", "Bienvenida"));

