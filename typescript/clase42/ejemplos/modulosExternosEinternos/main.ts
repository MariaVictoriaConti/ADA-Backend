import {add, multiply} from './mathOperations' // importamos modulo interno
import _ from 'lodash' //Importamos modulo externo lodash

//Usamos funciones del modulo interno

const resultAdd = add(5, 3)
const resultMultiply = multiply(5, 3)

console.log(`Resultado de sumar: ${resultAdd}`)
console.log(`Resultado de multiplicar: ${resultMultiply}`);


//Usar funcion del modelo externo lodash para eliminar duplicados en un array

const numbers = [1, 2, 2, 3, 4, 4, 5];
const unicoNumero = _.uniq(numbers);

console.log(`Array sin duplicados: ${unicoNumero}`);
