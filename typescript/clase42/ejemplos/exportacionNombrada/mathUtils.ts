//Este modulo exporta funciones y una constante

export const PI = 3.141592;

export function add(a:number, b:number): number{
    return a+b;
}

export function subract(a:number, b:number): number{
    return a-b;
}

//Este codigo:
//Estamos exportando una constante PI y tambien 2 funciones que son (add y subtract)
//Cada exportacion esta nombrada lo que significa que tienen que ser importadas usando sus nombres