/*Ejercicio 6: Sistema de Gestión de Productos Usando Abstracción y Clases
Crea un sistema de inventario que gestione diferentes tipos de productos.
Define una clase abstracta Producto con:
• Propiedades protegidas: nombre, precio.
• Un método abstracto calcularDescuento().
Implementa dos subclases: Ropa y Electronica.
• La subclase Ropa aplicará un 10% de descuento.
• La subclase Electronica tendrá un 5% de descuento.
Añade un método concreto en la clase abstracta para mostrar la información del producto.*/

abstract class Producto{
    constructor(protected nombre:string, protected precio:number){
        this.nombre = nombre;
        this.precio = precio;
    }


    infoProducto(): void{
        console.log(`El producto ${this.nombre}, tiene un valor de ${this.precio}`);
        
    }
    abstract calcularDescuento(): void;

}

export class Ropa extends Producto{
constructor(protected nombre:string, protected precio:number){
super(nombre, precio)
//super.infoProducto()
}
calcularDescuento(): void {
    let totalConDescuento = this.precio - ((this.precio * 10)/100) 
    console.log(`El total del producto con el 10% de descuento es de: ${totalConDescuento}`
    );
}
}

export class Electronica extends Producto{
    constructor(protected nombre:string, protected precio:number){
    super(nombre, precio)
    //super.infoProducto()
    }
    calcularDescuento(): void {
        let totalConDescuento = this.precio - ((this.precio * 5)/100) 
        console.log(`El total del producto con el 5% de descuento es de: ${totalConDescuento}`
        );
    }
}

 const ropa1 = new Ropa("Remera", 100)
 ropa1.infoProducto();
 ropa1.calcularDescuento()
console.log("-----------------------------");

 const electronica1 = new Electronica("Microondas", 100)
 electronica1.infoProducto()
 electronica1.calcularDescuento()
