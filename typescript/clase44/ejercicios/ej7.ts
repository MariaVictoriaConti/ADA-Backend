/*Actividad 7: Filtrar elementos de un arreglo genérico usando For...Of y
Aserciones

Crea una función genérica llamada filtrarElementos que reciba un arreglo de
valores mixtos (por ejemplo, number | string | boolean). Usando un bucle for...of,
filtra solo los valores que sean cadenas de texto (string). Utiliza aserciones de
tipo para acceder a las propiedades específicas de string.*/

let valoresMixtos = ['string1', 'string2', 22, true];

function filtrarElementos<T>(arrayX: T[]): string[] {
    const arrayDeString: string[] = [];

    for (let elemento of arrayX) {
        if (typeof elemento === 'string') {
            arrayDeString.push(elemento)
        }
    }
    return arrayDeString;

}


let resultado = filtrarElementos(valoresMixtos)
console.log(resultado);
