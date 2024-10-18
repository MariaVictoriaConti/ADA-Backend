/*Ejercicio 3: Interfaces - Sistema de Gestión de Usuarios
Crea una interfaz Usuario que tenga las propiedades:
• nombre (obligatoria).
• edad (opcional).
• readonly id (solo lectura).
Implementa esta interfaz en una clase UsuarioConcreto. Luego, intenta
modificar la propiedad id para mostrar cómo se aplican las restricciones de solo
lectura.*/

interface Usuario {
    nombre:string;
    edad?:number;
    readonly id:number;
}

class UsuarioConcreto implements Usuario {
nombre:string;
edad?:number;
readonly id:number;
    constructor( nombre:string, id:number, edad?:number){
      this.nombre =nombre;
        this.id = id;
        this.edad= edad;
    }
}

const nuevoUsiario = new UsuarioConcreto("Ana", 1, 22)
const otroUsuario = new UsuarioConcreto( "Vicky", 2, 20)

//nuevoUsiario.id = 3;

console.log(nuevoUsiario);
console.log(otroUsuario);


