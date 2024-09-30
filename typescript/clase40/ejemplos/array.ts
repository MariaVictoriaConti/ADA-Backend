//Declaracion de un array de frutas (string)

let frutas:string[] = ['manzana', 'banana', 'pera']

//Agregar una fruta al final del array
frutas.push('naranja');
console.log('frutas despues de agregar naranja: ' + frutas);

//Eliminar la ultima fruta del array
let ultimaFruta = frutas.pop();
console.log('fruta eliminada (pop): ' + ultimaFruta);
console.log('frutas despues de eliminar la ultima fruta: ' + frutas);

//Agregar una fruta al inicio
let frutaAgregada = frutas.unshift('kiwi');
console.log('fruta agregada al inicio' + frutaAgregada);
console.log('Frutas despues de agregar kiwi al inicio' + frutas);

//Eliminar la primera fruta del array
let primeraFruta = frutas.shift();
console.log('fruta eliminada (shift): ' + primeraFruta);
console.log('frutas despues de eliminar la primera fruta: '+ frutas);

//Buscar posicion de la pera
let posicionPera = frutas.indexOf('pera');
console.log('Posicion de la pera: '+ posicionPera);

//Verificar si el array contine banana
let tieneBanana = frutas.includes('banana');
console.log('el array contiene banana?: '+ tieneBanana);

//Combinar todos los elemenetos del array en una cadena
let cadenaFrutas = frutas.join(', ');
console.log('Frutas unidas por una coma: '+ cadenaFrutas);

//invertir el orden del array
frutas.reverse();
console.log('Frutas despues de invertir el orden: ' + frutas);

//Concatenar dos arrays
let otrasFrutas:string[] = ['mango', 'frutilla']
let todasLasFrutas = frutas.concat(otrasFrutas);
console.log('Array concatenado: '+ todasLasFrutas);










