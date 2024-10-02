class Animal {
    //propiedad publica que tiene acceso desde cualquier parte
    public nombre: string;

    //prop privada solo accesible dentro de esta clase
    private tipoAlimento: string;

    //prop protegida accesible dentro d ela clase y clases hijas herencia
    protected especie: string;

    constructor(nombre: string, tipoAlimento: string, especie: string) {
        this.nombre = nombre;
        this.tipoAlimento = tipoAlimento;
        this.especie = especie;
    }
    //Metodo publico
    public describirAnimal(): void {
        console.log(`${this.nombre}, un animal de la especie ${this.especie}`);
    };

    //Metodo privado
    private mostrarTipoAlimento(): void {
        console.log(`${this.nombre} se alimenta de ${this.tipoAlimento}`);
    }

    //Metodo protegido
    protected sonidoAnimal(): void {
        console.log(`${this.nombre}, hace un sonido.`);
    }

    //Metodo privado para acceder dentro de la clasr
    public alimentarAnimal(): void {
        this.mostrarTipoAlimento() //llama al metodo privado dentro de la clase
    }

}

//Crear una instancia de la clase Animal
const miAnimal = new Animal("Coca", "Balanceado", "Perro");
miAnimal.describirAnimal();
miAnimal.alimentarAnimal();
