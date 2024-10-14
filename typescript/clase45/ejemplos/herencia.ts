export class Animal {
    name: string//

    //Constructor
    constructor(name: string) {
        this.name = name;
    }

    //metodo
    makesound(): void {
        console.log(`${this.name} hace un sonido.`);
    }
}

//Clase derivada - clase hija
class Dog extends Animal {
    breed: string; //nueva propiedad de la clase hija

    constructor(name: string, breed: string) {
        super(name); //llama al constructor de la clase animal
        this.breed = breed;
    }

    //Sobreescritura del metodo del padre-makeSound
    makesound(): void {
        console.log(`${this.name} ladra.`);        
    }

    //Hago un nuevo metodo especifico de la clase hija
    search():void{
        console.log(`${this.name} esta buscando la pelota.`);
        
    }
}

//Instanciar objetos de la clase base
const genericoAnimal =  new Animal('Animal'); //Creacion de un objeto de la clase base
genericoAnimal.makesound(); //Llamamos al metodo makeSound de la clase base

const myDog = new Dog('Pipo', 'Caniche'); //Creacion de un objeto de la clase Dos
myDog.makesound();   //metodo heredado de Animal
myDog.search();   //metodo propio de myDog
