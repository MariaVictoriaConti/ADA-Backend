export abstract class Animal {
//Constructor: define la prop nombre, establece solo en esta clase y subclases
constructor(protected nombre:string){
    this.nombre = nombre;
}

//Metodo abstracto: debera ser implementado por cada subclase
//Este metodo definira como se mueve el animal
abstract moverse(): void;

//Metodo concreto (con implementacion) que describe al animal

describir(): void{
    console.log(`Este es un animal llamado ${this.nombre}.`);    
}
}

//Definimos clase concreta "Perro" que extiende de la clase abstract Animal
class Perro extends Animal {
    //Implementamos el metodo abstracto "moverse" de la clase Animal
    moverse(): void {
        console.log(`${this.nombre} esta corriendo.`);        
    }
}
//Definimos otra clase "Pajaro" que extiende de la clase abstracta Animal
class Pajaro extends Animal {
    //Implementamos el metodo abstracto "moverse" de la clase Animal
    moverse(): void {
        console.log(`${this.nombre} esta volando.`);        
    }
}

const perro1 = new Perro("Coco");
perro1.moverse();

const pajaro1 = new Pajaro("Rio");
pajaro1.moverse();