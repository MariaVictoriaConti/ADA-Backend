//Esta exportacion te trae todo el modulo que llamas

import Calculator from "./calculator";

const calc = new Calculator();
console.log(calc.add(10, 5));

console.log(calc.substract(10, 5));

//Aqui calculator es importado como clase principal el modulo calculator.ts aunque podriamos haber llamado a esta importacion de cualquier otra manera (como import Mycalc from ...)
//Es una buena practica utilizar un nombre relacionado con lo que estamos importando

