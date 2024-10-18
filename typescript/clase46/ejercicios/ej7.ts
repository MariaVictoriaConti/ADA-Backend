/*Ejercicio 7: Comparación Completa - Sistema de Transporte Público
Diseña un sistema que combine interfaces y clases abstractas para gestionar un
transporte público.
• Crea una clase abstracta Transporte con un método abstracto mover().
• Define dos interfaces:
o Electrico con el método cargarBateria().
o Combustible con el método llenarTanque().
• Implementa dos clases:
o AutobusElectrico: Extiende de Transporte e implementa Electrico.
o Taxi: Extiende de Transporte e implementa Combustible.
*/

export abstract class Transporte {
    constructor(protected bateria?: number, protected combustible?: number) {
        this.bateria = bateria;
        this.combustible = combustible;
    }


    mover(): void { };
}

interface Electrico {
    cargarBateria(): void;
}

interface Combustible {
    llenarTanque(): void;
}

class AutobusElectrico extends Transporte implements Electrico {
    constructor(bateria: number | undefined) {
        super(bateria)
    }

    cargarBateria(): void {
        console.log(`Su bateria inicial es: ${this.bateria}`);        
        this.bateria = 100;
        console.log(`La bateria se cargo al 100.`);
        console.log(`La bateria actual es: ${this.bateria}`);
        
    }

    mover(): void {
console.log(`El AutobusElectrico se esta moviendo.`);

    }
}

class Taxi extends Transporte implements Combustible {
    constructor(combustible: number){
        super(combustible)
    }

    llenarTanque(): void {
        console.log(`El combustible actual es: ${this.combustible}`);
        this.combustible = 100;
        console.log(`Se ha cargado combustible: Su tanque esta completo.`)
            console.log(this.combustible)    
        
    }

    mover(): void {
        console.log(`El Taxi se esta moviendo.`);

    }
}

const autobusElectrico = new AutobusElectrico(70)
autobusElectrico.cargarBateria()
autobusElectrico.mover()

console.log(`---------------------------------------`);

const taxi = new Taxi(10)
taxi.llenarTanque()