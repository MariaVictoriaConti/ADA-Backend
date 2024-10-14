// Ejercicio 4: Herencia de Métodos y Sobrescritura
// Consigna: Define una clase base Flor con el método describir(), que imprime un
// mensaje general sobre la flor. Luego, crea dos clases derivadas Rosa y Girasol,
// cada una sobrescribiendo el método describir() con un mensaje específico.

class Flor{
    reino:string;
    alimento:string;

    constructor(reino:string, alimento:string){
this.reino = reino;
this.alimento = alimento;
    }
    
    describir():void{
        console.log(`Las Flores son del reino ${this.reino} y se alimentan de ${this.alimento}.`);        
    };
}

class Rosa extends Flor{
    nombre:string;
color:string;
tieneAroma:boolean;



constructor(nombre:string, color:string, tieneAroma:boolean, reino:string, alimento:string){
    super(reino, alimento)
    this.nombre = nombre;
    this.color = color;
    this.tieneAroma = tieneAroma;
}
describir(): void {
    super.describir();
    console.log(`La ${this.nombre} es color ${this.color}. Tiene aroma?: ${this.tieneAroma}`);
    
}
}

const rosa1 = new Rosa("Rosa", "Roja", true, "vegetal", "agua y sol")
rosa1.describir()