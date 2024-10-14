// Ejercicio 5: Herencia con Modificadores de Acceso
// Consigna: Crea una clase base Compania con un atributo privado
// nombreCompania y un atributo protegido ingresosAnuales. Crea una clase
// derivada EmpresaTecnologia que use el atributo protegido y agregue un
// método que calcule el doble de los ingresos anuales

class Compania{
    private nombreCompania:string;
    protected ingresosAnuales:number;

    constructor(nombreCompania:string, ingresosAnuales:number){
        this.nombreCompania = nombreCompania;
        this.ingresosAnuales = ingresosAnuales;
    }
}

class EmpresaTecnologia extends Compania{
    //Se PUEDE HEREDAR SOLO UNA PROPIEDAD?? Y COMO HAGO PARA PONER UNA PROPIEDAD QUE PUEDE O NO PEDIRSE CON EL ? DONDE LO PONGO
    
     constructor(nombreCompania:string, ingresosAnuales:number){
         super(nombreCompania, ingresosAnuales)
     }

    dobleIngresosAnuales():void{
        let doble = this.ingresosAnuales*2;
        console.log(`El doble de los ingresos anuales es: ${doble}.`)
    }
}

const empresaTec1 = new EmpresaTecnologia("Vickytech", 100);
empresaTec1.dobleIngresosAnuales()