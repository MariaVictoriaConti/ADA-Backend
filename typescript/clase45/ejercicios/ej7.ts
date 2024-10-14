// Ejercicio 7: Herencia Múltiple Indirecta y Modificadores de Acceso
// Consigna: Define una clase base Negocio con un método protegido operar().
// Define otra clase Consultoria que herede de Negocio y sobrescriba el método
// operar() para mostrar un mensaje sobre cómo opera el negocio de consultoría.

class Negocio{
    protected operar():void{
//
    };
}


class Consultoria extends Negocio{
public operar(): void {
    super.operar()
    console.log(`Este negocio Trabaja de 9:00hs a 18hs de Lunes a Viernes.`);
    
}
}

const negocio1 = new Consultoria();
negocio1.operar();