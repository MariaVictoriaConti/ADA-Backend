class Empleado {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    //metodo
    trabajar(): void {
console.log(`${this.nombre} esta trabajando.`);
    }
}

class Programador extends Empleado{
    lenguaje:string;

    constructor(nombre:string, lenguaje:string){
        super(nombre)
        this.lenguaje = lenguaje;
    }

    trabajar(): void {
        super.trabajar()
            console.log(`${this.nombre} programa en ${this.lenguaje}.`);
        
    }
}


const programador = new Programador('Victoria', 'Typescript')
programador.trabajar()