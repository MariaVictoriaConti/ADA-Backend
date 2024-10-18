/*2. Ejercicio de Libro
Crea una clase Libro que represente un libro en una biblioteca. Esta clase debe
tener propiedades privadas para titulo, autor, anioPublicacion, y disponible.
Implementa métodos para prestar y devolver el libro, asegurando que solo se
pueda prestar si está disponible y que se pueda devolver solo si ha sido
prestado. Imprime un mensaje en caso de que se intente realizar una acción no
válida.*/

export class Libro {
    private _titulo: string;
    private _autor: string;
    private _anioPublicacion: number;
    private _disponible: boolean;

    constructor(titulo: string, autor: string, anioPublicacion: number) {
        this._titulo = titulo;
        this._autor = autor;
        this._anioPublicacion = anioPublicacion;
        this._disponible = true;
    }


    
    public get disponible(): boolean {
        return this._disponible;    
      }

      public prestar():void {
        if (this._disponible) {
            this._disponible = false;
            console.log(`El libro esta dispobible. Ya podes retirarlo.`);            
        } else {
            console.log("El libro esta prestado");
        }
    }

    public devolver() {
        if (!this._disponible) {
            this._disponible = true;
            console.log("Gracias por devolver el libro prestado.")
        }else{
            console.log("El libro no habia sido prestado.")
        }
    }

    }

const libro1 = new Libro("coco", "PEPE", 1987)
libro1.prestar()
console.log(libro1);

libro1.devolver()
console.log(libro1);

