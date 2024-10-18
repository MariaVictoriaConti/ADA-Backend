class Triangle {
    private _base: number;
    private _height: number;

    constructor() {
        this._base = 0; //inicializa en 0
        this._height = 0; //inicializa en 0
    }

    //Setter para la base con validacion
    public set base(value: number) {
        if (value > 0) {
            this._base = value;
        } else {
            console.log("La base debe ser mayor a 0.");
        }
    }

    //Setter para la altura con valdacion
    public set height(value: number) {
        if (value > 0) {
            this._height = value;
        } else {
            console.log("La altura debe ser mayor a 0.");
        }
    }

    //Metodo para calcular el area
    public calcularArea(): number{
        return (this._base * this._height)/2;  //Formula para calcular area de un triangulo
    }

}

const triangulo = new Triangle();

//Usamos los setter para establecer los valores permitidos
triangulo.base = 10;
triangulo.height = 5

//Calculamos y mostramos el area
console.log(`Area: ${triangulo.calcularArea()}`);

// //Intento con valores no permitidos
// triangulo.base = -5;
// triangulo.height = -3;

// //Calculamos y mostramos el area
// console.log(`Area: ${triangulo.calcularArea()}`);

