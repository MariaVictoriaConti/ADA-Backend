/*1. Ejercicio de Coche
Diseña una clase Coche que represente un vehículo. Esta clase debe tener
propiedades privadas para marca, modelo, año, y kilometraje. Implementa
métodos para encender el coche y realizar un viaje, que incrementen el
kilometraje. Asegúrate de que el año no sea menor que 1886 (el año en que se
inventó el coche) y que el kilometraje no pueda ser negativo. Si se intenta
establecer un año o kilometraje no válido, imprime un mensaje indicando el
error.
*/
export class Coche {
    private _marca: string;
    private _modelo: string;
    private _anio: number;
    private _kilometraje: number;


    //hacer un if en el constructor
    constructor(marca: string, modelo: string, anio: number, kilometraje: number) {
        this._marca = marca;
        this._modelo = modelo;

        if (anio > 1986) {
            this._anio = anio;
        } else {
            throw new Error ("Año invalido"); //La unica forma de que me tome este parametro fue usando throw new Error ni se lo q es. Si pongo console.log no me deja
        }

         if (kilometraje < 0) {
             throw new Error("Kilometraje invalido");
         } else {
             this._kilometraje = kilometraje;
         }
    }


    public get encenderCoche(): string {
        return "El vehiculo esta encendido.\n";
    }

    public set hacerViaje(value: number) {
        
        if (value > 0) {        
            console.log(`Su kilometraje actual es: ${this._kilometraje} kms. El viaje a realizar es de ${value} kms.`);
            this._kilometraje += value;
            console.log(`Su kilometraje actual es: ${this._kilometraje} kms.\n`);

        } else {
            console.log("Debe realizar un viaje mayor a 0km para modificar el kilometraje.\n");
        }
    }
    public get anio(): number {
        return this._anio;
    }

    public get kilometraje(): number {
        return this._kilometraje;
    }
}

const coche1 = new Coche("tutu", "lolo", 1985, 20)

console.log(`Año del coche: ${coche1.anio}`);
console.log(`Kilometraje: ${coche1.kilometraje}`);

console.log(coche1.encenderCoche)
coche1.hacerViaje = 50;




