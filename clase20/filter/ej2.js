/*2) Tenemos un array en una variable numeros con números al azar.
También tenemos dos arrays vacios en las dos variables numerosPares y
numerosImpares.
Utilizando filter crear un nuevo array con todos los números pares y
guardalo en la variable numerosPares
Utilizando filter crear un nuevo array con todos los números impares y
guardalo en la variable numerosImpares.*/

const numeros = [43, 11, 18, 46, 44, 37, 42, 29, 9, 2, 37, 0, 49, 10, 38, 34, 25, 40, 4, 32];

numerosPares = numeros.filter(numero => numero % 2 == 0);
numerosImpares = numeros.filter(numero => numero % 2 == !0);

console.log("Los numeros pares son: " + numerosPares);
console.log("Los numeros impares son: " + numerosImpares);