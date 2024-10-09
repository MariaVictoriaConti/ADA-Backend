/*Actividad 4: Crear una clase genérica

Crea una clase genérica Caja que almacene un valor de cualquier tipo y tenga
un método para obtener el valor almacenado.*/
export class Caja{
public elemento:string;

constructor(elemento:string){
    this.elemento = elemento;
}
public obtenerElemento<T> ():void{
    console.log('El elemento de la caja es: ' + this.elemento);
    
}
}
const caja1 = new Caja('osito')
console.log(caja1);


caja1.obtenerElemento<number>()// porque me lo imprime si puse tipo number y el elemento es tipo string?

