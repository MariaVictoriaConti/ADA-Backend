/*3) Escribir un programa que muestre la sumatoria de todos los
números entre el 0 y el 100.*/

let suma = 0;

function sumaNumeros() {
    for (i = 0; i <= 100; i++) {
       suma += i;
}
return suma;
}

console.log(sumaNumeros())