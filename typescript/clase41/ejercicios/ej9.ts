/*Ejercicio 9: Sistema de Gestión de Vehículos
1. Crea un sistema de gestión de Vehículos que incluya las siguientes clases:
o Vehiculo: Clase base con propiedades como marca, modelo y un
método para mostrar información del vehículo.
o Coche: Clase que extiende Vehiculo e incluye una propiedad para
tipoCombustible y un método para mostrar la información completa
del coche.
o Motocicleta: Clase que extiende Vehiculo e incluye una propiedad
para cilindrada y un método para mostrar la información completa
de la motocicleta.
*/

class Vehículo {
    public marca: string;
    public modelo: string;
    public tipoVehiculo: string;

    constructor(marca: string, modelo: string, tipoVehiculo:string) {
        this.marca = marca;
        this.modelo = modelo;
        this.tipoVehiculo = tipoVehiculo;
    }

    public infoVehiculo(): string {
        return `El vehiculo es un/una ${this.tipoVehiculo} marca ${this.marca} y modelo ${this.modelo}. `;
    }
}



export class Coche extends Vehículo {
    public tipoCombustible: string;

    constructor(marca: string, modelo: string, tipoVehiculo:"Coche", tipoCombustible: string) {
        super(marca, modelo, tipoVehiculo);
        this.tipoCombustible = tipoCombustible;
    }

    public infoAndTipoCombustible(): string {
        return super.infoVehiculo() + `El tipo de combustible que utiliza este vehiculo es ${this.tipoCombustible}.`;
    }
}



class Motocicleta extends Vehículo{
    public cilindrada: number;

    constructor(marca:string, modelo:string, tipoVehiculo:"Motocicleta", cilindrada:number){
        super(marca, modelo, tipoVehiculo);
        this.cilindrada = cilindrada;
    }
    public infoAndCilindrada():string{
        return super.infoVehiculo() + `Esta motocicleta es de ${this.cilindrada} cilindradas.`;
    }
}

const vehiculo1 = new Vehículo("Chevrolet", "Corsa", "Auto");
console.log(vehiculo1.infoVehiculo());


const Coche1 = new Coche("Honda", "City", "Coche", "Gas");
console.log(Coche1.infoAndTipoCombustible());

const motocicleta1 = new Motocicleta("Honda", "Wave", "Motocicleta", 150)
console.log(motocicleta1.infoAndCilindrada());

//En este ejercicio le establezco el tipo de vehichulo con un string fijo para que dé la informacion correcta en caso de ser moto o auto. Si quiero crear un objeto coche, pero lo hago con la class de motocicleta, NO ME VA A PERMITIR HACERLO. Y lo mismo al reves. Para eso fijo el tipo de vehiculo en cada clase. No se si esta bien. PREGUNTAR.
