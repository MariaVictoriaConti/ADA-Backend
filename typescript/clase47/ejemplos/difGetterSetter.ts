class Circle {
    private _radius:number; //propiedad privada del radio

    constructor(radius:number){
this._radius = radius;
    }

    //Getter para el radio
    public get radius(): number {
        return this._radius;
    }

    //Setter para el radio con una validacion
    public set radius(value: number) {
        if (value > 0) {
            this._radius = value; //asignamos el nuevo radio
        } else {
            console.log(`El radio debe ser mayor a 0.`);            
        }
    }

    //Getter para calcular el area
    public get area(): number {
        return Math.PI * this._radius * this._radius; //logica para calcular area del circulo
    }


    //Getter para calcular la circunferencia
    public get circunferencia(): number {
        return 2 * Math.PI * this._radius;  //esto devuelve circunferencia
    }
}

//Uso de la clase Circle
const circle = new Circle(5);  //Creamos una instancia nueva con radio de 5


//Usamos los Getter
console.log(` Radio: ${circle.radius}`);
console.log(`Area: ${circle.area}`);
console.log(`Circunferencia: ${circle.circunferencia}`);

//Usamos los setter para modifiar el radio
circle.radius = 10;
console.log(`Nuevo Radio: ${circle.radius}`);






