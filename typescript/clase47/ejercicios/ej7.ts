/*7. Ejercicio de Bodega
Diseña una clase Bodega que tenga propiedades privadas para nombre,
direccion, y inventario (un array de objetos con producto y cantidad).
Implementa métodos para agregar productos al inventario, eliminar productos,
y listar el inventario. Si se intenta agregar un producto con una cantidad
negativa, imprime un mensaje informativo.*/


export interface Producto {
    producto: string;
    cantidad: number;
}

export class Bodega {
    private _nombre: string;
    private _direccion: string;
    private _inventario: Producto[] = [];

    constructor(nombre: string, direccion: string) {
        this._nombre = nombre;
        this._direccion = direccion;
        this._inventario! = [];
    }

    public agregarProductoInventario(producto: string, cantidad: number) {
        if (cantidad > 0) {
            let nuevoProducto: Producto = {
                producto: producto,
                cantidad: cantidad
            };
            this._inventario.push(nuevoProducto)
            return this._inventario;
        } else {
            console.log(`La cantidad de productos a agregar debe ser mayor a 0.`);

        }
    }


    public get inventario(): Producto[] {
        console.log(`El inventario de la bodega ${this._nombre} es:`);
        return this._inventario;
    }

    public eliminarProducto(value:string){
        let indexProducto = this._inventario.findIndex(producto => producto.producto === value);
        if(indexProducto !== -1){
            this._inventario.splice(indexProducto, 1)      
console.log(`El producto ${value} fue eliminado del inventario.`);
        }else{
            console.log(`Producto no encontrado.`);            
        }
    }


}

const bodega1 = new Bodega("VINITO", "CAchigua 172")
console.log(bodega1);
console.log("--------------------------------------");

bodega1.agregarProductoInventario("bebida", 20);
console.log(bodega1);
console.log("--------------------------------------");

bodega1.agregarProductoInventario("harina", 50)
console.log(bodega1);
console.log("--------------------------------------");

console.log(bodega1.inventario)

bodega1.eliminarProducto("harina")
console.log(bodega1);



