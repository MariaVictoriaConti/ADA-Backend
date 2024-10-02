/*Ejercicio 2: Creación de Objetos y Atributos
1. Define un objeto que represente un libro con las siguientes propiedades:
título, autor, y año de publicación.
2. Crea una instancia de ese objeto y muestra sus propiedades en la consola.*/

class Libro {
    public titulo:string;
    public autor:string;
    public anioDePublicacion:number;
 
    constructor(titulo:string, autor:string, anioDePublicacion:number){
this.titulo = titulo;
this.autor = autor;
this.anioDePublicacion = anioDePublicacion;
    }
}

const libro1 = new Libro("Fantasmas", "Susana Gimenez", 2000)
console.log(`Titulo: ${libro1.titulo}, Autor: ${libro1.autor}, Anio de Publicacion: ${libro1.anioDePublicacion}`);



