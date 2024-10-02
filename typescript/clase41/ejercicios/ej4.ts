/*Ejercicio 4: Clases y Objetos
1. Define una clase llamada Animal con propiedades nombre y tipo, y un
método hacerSonido().
2. Crea una instancia de la clase Animal y llama al método*/
export class Animal{
    public nombre:string;
    public tipo:string;

    public constructor(nombre:string, tipo:string){
        this.nombre = nombre;
        this.tipo = tipo;
    }

    public hacerSonido(): void {
console.log(`${this.nombre} hace un sonido.`);
        }
    
}

const animal1 = new Animal("Zuri", "Gato")
animal1.hacerSonido();
