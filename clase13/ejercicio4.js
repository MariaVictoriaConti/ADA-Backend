/*Ejercicio 4: Numero pares
Escribí un programa que imprima los números pares del 0 al 100. No es
necesario pedirle al usuario, solo imprimir el resultado. Agreguen los
números pares a un array.
Pista: Usa un ciclo*/
let numPares = [];

for (let i = 2; i <= 100; i += 2) {
        numPares.push(i)
    }

console.log(numPares)