/*Ejercicio 5: Uso de polimorfismo con clases
Crea una clase abstracta FiguraGeometrica que tenga un método abstracto para
calcular el área. Luego, implementa dos clases concretas: Cuadrado y Circulo,
que hereden de FiguraGeometrica y calculen el área adecuadamente. */

abstract class FiguraGeometrica {
    abstract area():number; 
}

class Cuadrado extends FiguraGeometrica {
    constructor(private lado:number){
super()
    }

    area(): number {
        return this.lado*this.lado
    }
}

export class Circulo extends FiguraGeometrica {
    constructor(private radio:number){
super()
    }
    area(): number {
        return Math.PI* this.radio**2
    }
}

const cuadradito = new Cuadrado(2)
console.log(cuadradito.area())

const circulito = new Circulo(2)
console.log(circulito.area());
