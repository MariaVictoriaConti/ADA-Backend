//Ejemplo basico fot in con un objeto

let alumna = {
    nombre: 'Lucia',
    edad: 22,
    curso: 'Backend'
};

for (let propiedad in alumna){
    console.log(`Clave ${propiedad}, valor: ${alumna[propiedad as keyof typeof alumna]}`);    
}

//Primer ejemplo: Se itera las propiedades del objeto alumna que representan un estudiante, con edad y curso que esta tomando. Se imprimen las claves y los valores correspondientes.

//Propiedad keyof typeof alumna: Con esta, le decimos al compilador que la variable propiedad es una clave valida de las propiedades del objeto alumna, es decir una de las propiedades alumna (nombre, edad y curso)

//Ejemplo con un array
let lenguajes = ['Javascript', 'Python', 'Java']

for (let indice in lenguajes){
    console.log(`Indice: ${indice}, valor: ${lenguajes[indice]}`);
    
}
//Segundo ejemplo: el array lenguajes contiene