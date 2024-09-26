//Definicion basica de un objeto

let gato = {
    color: "naranja",
    nombre: "Arturo", 
    anios: 1 
};

//Como mostrar las propiedades de un objeto en consola
console.log(`Color: ${gato.color}, Nombre: ${gato.nombre}, edad: ${gato.anios}`);

//Declaracion explicita del tipo de dato
let libro: {titulo:string; autor:string; paginas:number} = {
    titulo: "Cien años de soledad",
    autor: "Garcia Marquez",
    paginas: 500
};
console.log(libro);

//Propiedades ocpionales
let estudiantes: {nombre:string; edad?:number} = {
    nombre: "Ana",
}
console.log("El nombre del estudiante es: " + estudiantes.nombre);
console.log("Edad: " + estudiantes.edad + " Desconocida");

//Metodo dentro de un objeto
let perro = {
    nombre: "Khalua",
    raza: "caniche",
    ladrar: function(){
        return `${perro.nombre} esta ladrando!`
    }
}
console.log(perro.ladrar()); //Llamo al metodo ladrar del objeto perro


