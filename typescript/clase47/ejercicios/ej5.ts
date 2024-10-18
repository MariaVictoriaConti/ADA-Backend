/*5. Ejercicio de Vacaciones
Desarrolla una clase Vacacion que tenga propiedades privadas para destino,
duracion (en días) y presupuesto. Implementa getters y setters, asegurándote de
que duracion no sea menor que 1 y presupuesto sea mayor que 0.*/

class Vacacion {
    private _destino!:string;
    private _duracion!:number;
    private _presupuesto!:number;

    constructor() {
        this._destino!;
        this._duracion!;
        this._presupuesto!
    }

    public get destinoFerias(): string{
        return this._destino;
    }

    public get duracionFerias(): number {
        return this._duracion;
    }

    public get presupuestoFerias():number {
        return this._presupuesto;
    }

    public set destinoFerias(value:string){
        this._destino = value;
        console.log(`El destino para vacacionar es ${this._destino}`);         
    }

    public set duracionFerias(value:number){
        if(value>0){
            this._duracion = value;
            console.log(`La duracion de las vacaciones sera de: ${this._duracion}`);
        }else{
            console.log("La duracion de las vacaciones debe ser al menos 1 dia.");            
        }
        
    }

    public set presupuestoFerias(value:number){
        this._presupuesto = 100 * this._duracion;
        console.log(`El presupuesto de las vacaciones, teniendo en cuenta los dias de duracion es de : ${this._presupuesto}`);
        
    }
}

const vacacion = new Vacacion()
vacacion.destinoFerias = "Brasil";
vacacion.duracionFerias = 10;
vacacion.presupuestoFerias = 100;
console.log(vacacion)
