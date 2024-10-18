/*6. Ejercicio de Supermercado
Crea una clase Producto que contenga propiedades privadas como nombre,
precio y cantidad. Utiliza getters y setters, asegurándote de que precio no sea
negativo y que cantidad no sea menor que 0.
*/

class Producto {
    private _nombre:string;
    private _precio:number;
    private _cantidad: number;

    constructor(nombre:string, precio:number, cantidad:number){
this._nombre = nombre;
this._precio = precio;
this._cantidad= cantidad;
    }

    public get nombre():string{
        return this._nombre;
    }

    public get precio():number{
        return this._precio;
    }

    public get cantidad():number{
        return this._cantidad;
    }

    public set nombre(value:string){
        this._nombre = value;
    }

    public set precio(value:number){
        if(value>0){
            this._precio = value;
        }else{
            console.log(`El precio no puede ser un numero negativo.`);            
        }
    }

    public set cantidad(value:number){
        if(value>0){
            this._cantidad = value;
        }else{
            console.log(`La cantidad debe ser mayor a 0.`);
            
        }
    }
}

const producto= new Producto("harina", 500, 100);
console.log(producto);

producto.nombre = "arroz"
console.log(producto);

producto.cantidad = 0;
console.log(producto);

producto.precio = -1;
console.log(producto);



