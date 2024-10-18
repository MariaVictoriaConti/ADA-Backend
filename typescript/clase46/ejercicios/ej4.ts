/*Ejercicio 4: Comparación - Clases Abstractas vs Interfaces

Crea una interfaz PagoOnline con un método procesarPago().
Crea una clase abstracta Pago con un método concreto validarMonto() y un
método abstracto completarPago().
Implementa ambas estructuras en una clase concreta PagoConTarjeta.*/

interface PagoOnline {
    
    procesarPago(): void;
}

abstract class Pago {
constructor(protected monto:number){
    this.monto = monto;
}

    validarMonto(): void{
console.log(`Validando monto: El monto a abonar es ${this.monto}`);
    };

     abstract completarPago(): void;


}

class PagoConTarjeta extends Pago implements PagoOnline {
    constructor(monto:number){
        super(monto)

        this.monto = monto;
    }

procesarPago(): void {
super.validarMonto();    
}


completarPago(): void {
console.log(`El monto abonado con tarjeta es: ${this.monto}.`);
    
}

}

const pago1 = new PagoConTarjeta(100)
pago1.procesarPago()
pago1.completarPago()

//No pude ponerle abstract al metodo completarPago pq me daba error- ver solucion berni



