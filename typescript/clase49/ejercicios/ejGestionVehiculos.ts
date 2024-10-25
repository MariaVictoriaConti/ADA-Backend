/*// Gestión de Vehículos
// Se requiere implementar un sistema para gestionar diferentes tipos de vehículos 
// (coches, motocicletas, bicicletas). 
// Cada vehículo debe tener un identificador único, un tipo de combustible 
// (en caso de que lo use), y todos los vehículos deben poder moverse.
// Los vehículos motorizados como coches y motocicletas deben tener un método para arrancar.
// Las bicicletas solo necesitan poder moverse, ya que no usan combustible ni motor.
// Debes usar tuplas, alias (type) e interfaces para estructurar la solución.*/

type Coordenadas = [number, number];

//Funcion que acepta "Coordenadas" como tupla y muestra la posicion
function mostrarPosicion(posicion: Coordenadas): void {
    console.log(`Posicion actual: x = ${posicion[0]}, Y = ${posicion[1]}.`);
}

//Uso de type(definimos alias para el combustible)
type Combustible = "Gasolina" | "Diesel" | "Electrico";

//Alias para el ID de un vehiculo que puede ser string o number
type VehiculoId = string | number;

//Alias para un objeto "Motor" que contiene informacion del tipo de combustible
type Motor = {
    tipoCombustible: Combustible;
    encendido: boolean;
}

//Uso de interfaces
//Definimos una interfaz "Vehiculo" que describe las prop comunes de cualquier vehiculo

interface Vehiculo{
    id: VehiculoId; // identificador unico
    posicion: Coordenadas; // Posicion actual del vehiculo(usando tupla)

    mover(nuevaPosicion: Coordenadas): void; //metodo para mover el vehiculo
}

//Interfaz para vehiculos que tienen motor
interface VehiculoMotorizado extends Vehiculo {
    motor: Motor //Informacion del motor
    arrancar(): void; //metodo para arrancar el vehiculo
}

//Clase coche que implementa la interfaz VehiculoMotorizado
export class Coche implements VehiculoMotorizado{
    id:VehiculoId;
    posicion: Coordenadas;
    motor: Motor;

    constructor(id: VehiculoId, posicion: Coordenadas, motor: Motor){
        this.id = id;
        this.posicion = posicion;
        this.motor = {
            tipoCombustible: motor,
            encendido: false
        }
    }
    arrancar(): void {
this.motor.encendido = true;
console.log(`El coche ha arrancado con ${this.motor.tipoCombustible}`);

    }

    mover(nuevaPosicion: Coordenadas): void {
        this.posicion = nuevaPosicion;
        console.log(`Se ha movido el coche a la posicion`);
        mostrarPosicion(this.posicion);
        }
}

class Bicicleta implements Vehiculo{
    id: VehiculoId;
    posicion: Coordenadas;

    constructor(id: VehiculoId, posicion: Coordenadas){
        this.id = id;
        this.posicion = posicion;
    }

    mover(nuevaPosicion: Coordenadas): void {
        this.posicion = nuevaPosicion;
        console.log(`Se ha movido la bicicleta a la posicion`);
        mostrarPosicion(this.posicion);
    }
}

const coche1 = new Coche("1", [0, 0], );

//FAlta terminar!
