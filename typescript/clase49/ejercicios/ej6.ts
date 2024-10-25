/*Ejercicio 6: Encapsulamiento en clases
Crea una clase CuentaBancaria que tenga atributos privados como saldo y un
método público para consultar el saldo y otro para depositar dinero. */

class CuentaBancaria {
    private saldo:number;
    
    constructor(saldo:number){
        this.saldo = saldo;
    }

    public get consultarSaldo():string{
return `Su saldo actual es ${this.saldo} pesos.`  
}

public set depositarDinero(value:number){
    this.saldo += value;
    console.log(`Se han depositado ${value} pesos.`);
    
}

}

const cuenta1 = new CuentaBancaria(10);
console.log(cuenta1.consultarSaldo)

cuenta1.depositarDinero = 20;

console.log(cuenta1.consultarSaldo);
