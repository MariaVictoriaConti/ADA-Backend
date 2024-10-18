/*4. Ejercicio de Aviones
Crea una clase Avion con propiedades privadas para el modelo, capacidad y
velocidad. Implementa getters y setters para cada propiedad, asegurándote de
validar que la capacidad no sea menor que 0 y que la velocidad no sea negativa.
Nota sobre la inicialización de propiedades
En la clase Avion, se debe utilizar el operador de afirmación no nula (!) en las
propiedades _capacidad y _velocidad. Esto se hace para evitar un error de
TypeScript que indica que estas propiedades no estaban inicializadas en el
constructor. Este enfoque asegura que las propiedades serán asignadas
adecuadamente en el constructor mediante el uso de los setters, manteniendo
así la validación de los valores. Tener esto en cuenta para los demás ejercicios. , capacidad:number, velocidad:number*/

export class Avion {
    private _modelo: string;
    private _capacidad!: number;       //aqui se ponen las aserciones de no nulidad - no entendi bien para q se usa //lei q se puede inicializar con null o undef para evitar usar !
    private _velocidad!: number;

    constructor(modelo: string) {  
        this._modelo = modelo;
        this._capacidad! 
        this._velocidad!  //Es para inicializarlos con el setter directamente?? osea no nos va a pedir estos valores cuando creemos la instancia sino que se lo agregamos con el setter verdad?
    }

    public get modeloAvion():string {
        return this._modelo;
    }

    public get capacidadAvion():number {
        return this._capacidad;
    }

    public get velocidadAvion():number {
        return this._velocidad;
    }

    public set capacidadAvion(value: number) {
        if (value > 0) {
            this._capacidad = value;
        } else {
            console.log(`La capacidad debe ser mayor a cero.`);
        }
    }

    public set velocidadAvion(value:number){
        if(value>0){
            this._velocidad = value;
        }else{
            console.log(`La velocidad no puede ser un valor negativo.`);            
        }
    }
}

const avion1 = new Avion("Volachi")

console.log(avion1);
console.log("----------------------------");

avion1.capacidadAvion = 200;
avion1.velocidadAvion = 6272;
console.log(avion1);

