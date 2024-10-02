/*Ejercicio 3: Métodos en Objetos

1. Modifica el objeto del ejercicio anterior para que incluya un método
llamado descripcion() que devuelva una descripción del libro.
2. Llama al método y muestra el resultado en la consola.*/

export class Libro {
    public titulo:string;
    public autor:string;
    public anioDePublicacion:number;
 
    constructor(titulo:string, autor:string, anioDePublicacion:number){
this.titulo = titulo;
this.autor = autor;
this.anioDePublicacion = anioDePublicacion;
    }

    public descripcion(): string{
        return `El libro ${this.titulo} es del autor ${this.autor} y fue publicado en el anio ${this.anioDePublicacion}.`
    }
}

const libro2 = new Libro("La Playa", "Garcia Marquez", 2010);
console.log(libro2.descripcion());