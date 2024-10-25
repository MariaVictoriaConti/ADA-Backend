/*Ejercicio 8: Sistema de Nave Espacial con Gestión de Recursos
Crea un sistema para gestionar una nave espacial en una misión de recolección
de recursos en diferentes planetas. Define una clase NaveEspacial con atributos
como combustible y capacidadDeCarga. Implementa métodos para viajar entre
planetas, recolectar recursos (oxígeno, minerales, agua), y gestionar el
combustible. Usa tuplas para representar las coordenadas espaciales de los
planetas y una interfaz para los tipos de recursos recolectados.*/

//Interfaz de recursos
interface Recursos{
    tipo:string;
    cantidad:number;
}

//Tuplas de coordenadas
type coordenadas = [number, number, number] 

//class Planeta{
//}


class NaveEspacial{
    private  _combustible:number;
    private _capacidadDeCarga:number;

    constructor(combustible:number, capacidadDeCarga:number){
        this._combustible = combustible;
        this._capacidadDeCarga = capacidadDeCarga;
        }

    public get combustible():number{
        return this._combustible;
    }

    public set cargarCombustible(value:number){
this._combustible += value;
console.log(`Has cargado ${value} litros de combustible.`);
    }

    public viajar(planeta:string){
        if(planeta === "Marte"){

        }
    }

}

const nave1 = new NaveEspacial(65, 100);
