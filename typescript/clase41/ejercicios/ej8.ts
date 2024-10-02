/*Ejercicio 8: Integramos contenidos - Animales
1. Crea un pequeño sistema de gestión de Animales que incluya las clases
Animal, Mascota, y MascotaExotica.
o La clase Animal debe tener propiedades como nombre y tipo.
o La clase Mascota debe extender Animal e incluir una propiedad para
dueño.
o La clase MascotaExotica debe extender Animal e incluir una
propiedad para habitat.
2. Implementa métodos para mostrar información sobre cada tipo de animal
y agrega ejemplos de instanciación.*/

export class Animal {
    public nombre:string;
    public tipo:string;

    constructor(nombre:string, tipo:string){
        this.nombre = nombre;
        this.tipo = tipo;
    }

    public infoAnimal(): string{
        return `${this.nombre} es un ${this.tipo}. `;
        
    }
}

class Mascota extends Animal{
public duenio:string;

constructor (nombre:string, tipo:string, duenio:string){
    super(nombre, tipo);
    this.duenio = duenio;
}
public infoAndDuenio(): string {
    return super.infoAnimal() + `Ahora ${this.nombre} tiene duenio y se llama ${this.duenio}, ahora es una mascota.`;
    }

}

class MascotaExotica extends Mascota{
    public habitat:string;

    constructor(nombre:string, tipo:string, duenio:string, habitat:string){
        super(nombre, tipo, duenio)
        this.habitat = habitat;
    }

     public infoDuenioHabitat():string{
         return super.infoAndDuenio() + " " + `El habitat natutal de ${this.nombre} es: ${this.habitat} por eso es una mascota exotica.`
     }
}

// const Animal1 = new Animal("ROCO", "Mono");
// console.log(Animal1.infoAnimal());

// const Mascota1 = new Mascota("ROCO", "Mono", "Richard")
// console.log(Mascota1.infoAndDuenio());

const MascotaExotica1 = new MascotaExotica("Roco", "Mono", "Richard", "Selva");
console.log(MascotaExotica1.infoDuenioHabitat());


