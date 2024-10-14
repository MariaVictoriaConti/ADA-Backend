//Sistema de gestion de transporte
//Queremos definir vehiculos que se mueven de diferentes formas


//Usaremos la clase abstracta "Vehiculo" para definir el comportamiento general de todos los vehiculos y crearemos la interfaz "Electrico" para los vehiculos que sean electricos

//Definimos la interfaz
interface Electrico {
    cargaBateria(): void;
}

//Hacemos clase abstracta para todos los vehiculos
export abstract class Vehiculo {

    constructor(protected tipo:string){
        this.tipo = tipo;
    }

    abstract moverse(): void;

    describir(): void{
        console.log(`Este es un vehiculo tipo ${this.tipo}`);        
    }
}
//Clase concreta que extiende de la clase abstracta Vehiculo e implementa la interfaz

class AutoElectrico extends Vehiculo implements Electrico {
constructor(){
    super("Auto Electrico")
}

moverse(): void {
    console.log(`El auto electrico se mueve.`);
}

cargaBateria(): void {
    console.log(`El auto electrico esta cargando bateria`);
    
}
}
const tesla = new AutoElectrico();
tesla.describir();
tesla.moverse();
tesla.cargaBateria();