export interface Persona{
    nombre:string;//propiedad obligatoria
    edad?:number; //propiedad opcional
}

//Objeto que implementa la interfaz solo con la prop obligatoria
const persona1: Persona = {nombre: "Pau"};

//Objeto que implementa la interfaz con ambas propiedades
const persona2: Persona = {nombre:"Vicky", edad:35}

console.log(persona1);
console.log(persona2);

