/*8. Ejercicio de Empleado
Crea una clase Empleado que contenga propiedades privadas para nombre,
salario, y departamento. Implementa métodos para cambiar el salario (que no
puede ser menor a 0) y obtener la información del empleado. Si se intenta
establecer un salario negativo, imprime un mensaje indicativo.*/
export class Empleado {
    private _nombre:string;
    private _salario:number;
    private _departamento:string;

    constructor(nombre:string, salario:number, departamento:string){
this._nombre = nombre;
this._salario = salario;
this._departamento = departamento;
    }

    public get salario():number{
        return this._salario;
    }

    public set salario(value:number){
        if(value > 0){
            this._salario = value;
        }else{
            console.log(`El salario no puede ser menor a 0.`);            
        }
    }

    public describirEmpleado():void{
        console.log(`El empleado/a ${this._nombre} trabaja en el departamento de ${this._departamento} y su salario actual es de ${this._salario}.`);        
    }
}

const empleado1 = new Empleado("Victoria Conti", 100000, "IT");
console.log(empleado1.salario)
console.log("-------------------------------------");

empleado1.salario = 200000;
console.log(empleado1);
console.log("-------------------------------------");

empleado1.salario = -10;
console.log(empleado1);
console.log("-------------------------------------");

empleado1.describirEmpleado()


