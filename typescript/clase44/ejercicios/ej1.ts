/*Actividad 1: Usar For...In para recorrer propiedades de un objeto
Crea un objeto con al menos 3 propiedades (nombre, edad, ciudad) y usa un
bucle for...in para recorrer y mostrar cada propiedad y su valor.*/

let persona2 = {
    nombre:'Victoria',
    edad: 35,
    nacionalidad: 'Argentina'
}

for (let propiedad in persona2){
    console.log(`Propiedad ${propiedad}, Valor: ${persona2[propiedad as keyof typeof persona2]}`);
    
}