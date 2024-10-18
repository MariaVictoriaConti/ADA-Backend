import { lowerFirst } from "lodash";

export class Persona {
 private _id: number;
 private _name: string;
 protected _age: number;

 constructor(_id: number, _name: string, _age: number) {
this._id = _id;
this._name = _name;
this._age = _age;
 }

 //Getter para obtener nombre
 public get name(): string {
    return this._name
 }

 //SEtter ára establecer nombre
 public set name(value:string){
    if(value.length > 0){
        this._name = value;
    } else {
        console.log("El nombre no puede estar vacio");        
    }
 }

 //Getter para la edad
 public get age(): number {
    return this._age;
 }

 //Setter para establecer la edad
public set age(value: number){
    if( value >= 0) {
        this._age = value;
    } else {
        console.log("La edad no puede ser negativa.");
    }
}

//Metodo publico para obtener el id
public getId(): number {
    return this._id;
}

}

//Instanciamos clase persona
const persona = new Persona(1, "Mariana", 34)

//Usamos los getter para obtener los valores
console.log(`ID: ${persona.getId()}`);
console.log(`Nombre: ${persona.name}`);
console.log(`Edad: ${persona.age}`);
