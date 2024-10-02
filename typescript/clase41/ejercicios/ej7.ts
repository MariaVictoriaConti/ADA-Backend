/*Ejercicio 7: Modificadores de Acceso
1. Define una clase Coche con propiedades marca, modelo (públicas) y
precio (privada).
2. Implementa un método para mostrar la información del coche que acceda
a las propiedades públicas y no a la privada directamente*/
class Coche{
    public marca:string;
    public modelo:string;
    private precio:number;


    constructor(marca:string, modelo:string, precio:number){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }

    public infoCoche():string{
        return `El coche ingresado es marca ${this.marca}, modelo ${this.modelo}.`
    }
    private infoPrecio():string{
        return `El precio del coche es de ${this.precio}`
    }//Este metodo funciona solo si lo llamo dentro de otro metodo publico de esta clase
}

const coche1 = new Coche("Honda", "City", 100);
console.log(coche1.infoCoche());
//console.log(coche1.infoPrecio);    como este metodo es privado no se puede acceder
