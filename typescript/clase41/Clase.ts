//Definimos la clase

class Gato {
    //propiedades
    public nombre: string;
    public edad: number;
    private raza: string;


    //Constructor
    constructor(nombre: string, edad: number, raza: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
    }

    //Metodo para obtener informacion del gatito
    public obtenerInfo(): string {
        return `Nombre: ${this.nombre}`
    }
    public cambiarRaza(nuevaRaza: string): void {
        this.raza = nuevaRaza;
    }
}

//Creamos una constante Gato1 de la clase gato
const gato1 = new Gato("Miau", 2, "Siames");

//Llamar al metodo obtenerInfo
console.log(gato1.obtenerInfo());

//Cambiar raza
gato1.cambiarRaza("Persa");

//Llamar de nuevo al metodo obtenerInfo
console.log(gato1.obtenerInfo());


