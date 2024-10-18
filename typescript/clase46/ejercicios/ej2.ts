/*Ejercicio 2: Clases Abstractas - Sistema de Vehículos
Crea una clase abstracta Vehiculo con una propiedad velocidad y un método
abstracto mover(). Luego, implementa dos clases concretas: Auto y Bicicleta. Usa
los modificadores de acceso para controlar la visibilidad de las propiedades. */

export abstract class Vehiculo {
    constructor(protected velocidad: number) { }

    abstract mover(): void;
}

class Auto extends Vehiculo {
    mover(): void {
        console.log(`El auto se mueve a ${this.velocidad} km/h.`);
    }
}

class Bicicleta extends Vehiculo {
    mover(): void {
        console.log(`La bicicleta se mueve a ${this.velocidad} km/h.`);
    }
}

const auto1 = new Auto(20)
const bici1 = new Bicicleta(10)

auto1.mover();
bici1.mover();