/*Ejercicio 7: Función que modifica propiedades de un objeto
Consigna: Crea una función llamada aumentarSalario que acepte un objeto
empleado con las propiedades nombre (string) y salario (number), y un número
que represente el porcentaje de aumento. La función debe aumentar el salario
del empleado y devolver el nuevo salario. Muestra en la consola el resultado.*/

let aumentarSalario = function(nombre:string, salario:number, porcentaje:number) {
    let empleado = {
        nombreEmpleado:nombre,
        salarioEmpleado:salario
    };
    let salarioConAumento = (empleado.salarioEmpleado * porcentaje /100) + empleado.salarioEmpleado;
    console.log(`El salario con el aumento del ${porcentaje} porciento es de: ${salarioConAumento}`);   
};

aumentarSalario("Vctoria", 1000, 20)

// let aumentarSalario = (nombre:string, salario:number, aumento:number) => {
// const empleado = Object.fromEntries([["nombre",nombre],["salario",salario], ["aumento", aumento]])
// console.log(empleado);

// }
//console.log(aumentarSalario("Victoria", 200, 20))

//como ingreso al salario del objeto??
// let verObjeto = function (objetoIngresado:Object, porcentaje:number){
// let salarioConAumento = (objetoIngresado.salario * porcentaje / 100) + objetoIngresado.salario
//     console.log(salarioConAumento);

// }
// console.log(verObjeto({nombre:"Vicky", salario:200}, 20))

