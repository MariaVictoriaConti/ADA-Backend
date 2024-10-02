/*Ejercicio 10: Registro de Estudiantes
1. Crea un sistema para registrar Estudiantes con las siguientes clases:
o Estudiante: Clase que incluye propiedades como nombre, edad y
curso, además de un método que muestre la información del
estudiante.
o RegistroEstudiantes: Clase que maneje una lista de estudiantes, con
métodos para agregar un estudiante y mostrar todos los estudiantes
registrados.*/

export class Estudiante {
    public nombre:string;
    public edad:number;
    public curso:string;

    constructor(nombre:string, edad:number, curso:string){
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;

    }

    //metodo
    public infoEstudiante():string{
        return `El estudiante se llama ${this.nombre}, tiene ${this.edad} anios y va al curso ${this.curso}`;
    }
}

class RegistroEstudiantes extends Estudiante{

    public arrayEstudiantes: Estudiante[];

    constructor(nombre:string, edad:number, curso:string,){
        super(nombre, edad, curso)
        this.arrayEstudiantes = [];
    }

    //metodo
    registrarEstudiante(estudiante: Estudiante):void{
this.arrayEstudiantes.push(estudiante);
console.log(this.arrayEstudiantes);
    }
}

const estudiante1 = new Estudiante("Victoria", 35, "8va Backend");
console.log(estudiante1.infoEstudiante());

const estudiante1bis = new RegistroEstudiantes("Victoria", 35, "8va Backend", );
estudiante1bis.registrarEstudiante(estudiante1);

