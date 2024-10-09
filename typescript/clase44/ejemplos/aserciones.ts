//Aserciones:
//Permiten "DECirle" al compilador que tipo de datos debe asumir cuando no le puede inferir automaticamente o cuando queremos especiificar un tipo mas preciso

//Ejemplo1: asercion basi ca de tipo "any" a tipo "string"
let valorGenerico: any = "Typescript es buenisimo";

let longitudString: number = (valorGenerico as string).length
console.log('La longitud del string es: '+ longitudString);

console.log("--------------------------------------");


//Asercion de tipos de union
//Imaginemos q tenemos una funcion q puede recibir un nombre o valor nulo
function obtenerNombreEnMayusculas(nombre:string | null):string{
    if(nombre){
        //aqui, usando la asercion, le decimos a typescript q asuma que nombre es un string
        return (nombre as string).toUpperCase();
    }else {
        return "nombre no proporcionado"
    }
}

console.log(obtenerNombreEnMayusculas("Sofi"));
console.log(obtenerNombreEnMayusculas(null));
console.log("--------------------------------------");

//Ejemplo3: uso de aaserciones con "unknown"
//El tipo unknown es similar a any, pero es mas seguro. Debemos asegurarnos del tipo antes de usarlo.

let valorDesconocido:unknown ="Este e sun valor desconocido";
//no podemos acceder directamente a las propiedades de "Valor desconocido"; porque typescript no sabe su tipo
//por eso usamos aserciones de tipo (una vez que verificamos el tipo)

if(typeof valorDesconocido === "string"){
    let longitud:number = (valorDesconocido as string).length;
    console.log("La longitud del valor desconocido es: " + longitud);
    
}





