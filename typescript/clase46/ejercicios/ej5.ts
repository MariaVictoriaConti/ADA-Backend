/*Ejercicio 5: Decidir Entre Clases Abstractas e Interfaces
Diseña un sistema de transporte público. Define:
• Una interfaz VehiculoElectrico con el método cargarBateria().
• Una clase abstracta Transporte con el método abstracto mover().
Implementa ambas estructuras en una clase concreta AutobusElectrico.*/

interface VehiculoElectrico {

    cargarBateria(): void;
}

abstract class Transporte {
    constructor(protected tipo: string) {
        this.tipo = tipo;
    }

    //metodo abstracto mover()
    abstract mover(): void;
}

class AutobusElectrico extends Transporte implements VehiculoElectrico {

    constructor(protected tipo: string, protected bateria: number) {
        super("Autobus");

        this.bateria = bateria;

    }



    mover(): void {
        if (this.bateria <= 50) {
            console.log(`Debes cargar bateria para poder moverte.`);
        } else {
            console.log(`El ${this.tipo} se esta moviendo.`);
            this.bateria= this.bateria - 10;
            console.log(`Bateria actual: ${this.bateria}`);
            

        }
    }

    cargarBateria(): void {
        this.bateria = 100;
    }
};

const AutobusElectrico1 = new AutobusElectrico("Autobus 1", 20);
AutobusElectrico1.cargarBateria()
AutobusElectrico1.mover();

