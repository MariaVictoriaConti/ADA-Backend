// Ejercicio 6: Herencia con Métodos Sobrescritos y super
// Consigna: Crea una clase base Zoologico con el método abrirPuertas(), que
// indique que el zoológico está abierto. Crea una clase derivada ZoologicoSafari
// que sobrescriba el método abrirPuertas() pero llamando al método de la clase
// base con super.

class Zoologico{
    public abrirPuertas():void{
        console.log(`El zoologico esta abierto.`);
    };
}

class ZoologicoSafari extends Zoologico{
public abrirPuertas(): void {
    super.abrirPuertas()
    console.log(`Este zoologico tiene animales de la sabana africana.`);
    
}
}

const zoo1 = new ZoologicoSafari();
zoo1.abrirPuertas();