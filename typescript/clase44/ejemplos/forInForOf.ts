//Comparacion entre for In y for Of

//Ejemplo 1. Recorrer un array de autos con for in y con for of

let auto = ['Toyota', 'Honda', 'Tesla'];

console.log('=== RECORRIDO DE UN ARRAY DE AUTOS');

// Uso de for in (recorre indices)
console.log("Usando for in - Indice");
for(let indice in auto){
    console.log(`Indice: ${indice}, Auto: ${auto[indice]}`);    
}
//Recorrido de un aray de autos: Recorre los indices (0, 1, 2) y se accede a los nombres de los autos a traves de esos indices


//------------------------------------------------
//Uso de for of (Recorrer valores)
console.log("\nUsando for of - Valores");

for(let autos of auto){
console.log(`Auto: ${autos}`);
}
//For of recorre directamente los nombres o valores del array auto sin necesidad de acceder a los indices

//------------------------------------------------
console.log("\n===RECORRDIO DE UN OBJETO AUTO");

//Ejemplo 2: recorrer un objeto auto con for in

let autito = {
marca:'Fiat',
modelo:'UNO',
anio: 1998
}

//Uso de for in
console.log("Usando for in (claves de un objeto");
for(let propiedad in autito){
    console.log(`Clave: ${propiedad}, Valor: ${autito[propiedad as keyof typeof autito]}`);    
}

//Uso de for of NO es posible con un ojeto regular (ERROR)
// for (let valor of autito){
//     console.log(valor);    
// }

//Recorrido de objeto autito: 
//for in: se usa para recorrer las claves de un objeto que representa un auto (marca, modelo, anio) y se imprimen tanto la clave como el valor correspondiente
//for of: no es posible usarlo con un objeto porque los objetos no son iterables por eso nos da error






