//Definimos una interfaz con propiedades de solo lectura

interface Punto {
    readonly x:number; //Prop de solo lectura
    readonly y:number; //Prop de solo lectura
}

const punto: Punto = {x:10, y:20};

console.log(punto);

//Intentamos modificar una propiedad de solo lectura (causa error)
// punto.x = 15 //Va a salir un error pq no se puede volver a asignar a un valor por ser readOnly

