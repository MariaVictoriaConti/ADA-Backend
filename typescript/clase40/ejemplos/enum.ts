//definimos un enum numerico
enum Colores {
    rojo, 
    verde,
    azul,
}
//Acceder a los valores del enum

let colorFavorito: Colores = Colores.verde;
console.log('Color favorito (por numero): ' + colorFavorito)
;

//Acceder al nombre del valor por su indice
console.log('Nombre del color por indice: ' + Colores[colorFavorito]); //Imprime el nombre

//Definicion de un enum de cadenas
enum direcciones {
    Norte = 'N',
    Sur = 'S',
    Este = 'E',
    Oeste = 'O',
}

//Asignar un valor del enum a una variable
let direccionesViaje:direcciones = direcciones.Norte;
console.log('Direccion del viaje: '+direccionesViaje);

