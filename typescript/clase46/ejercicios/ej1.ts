/*Ejercicio 1: Abstracción Básica - Ejemplo del Mundo Real
Modela un sistema de cafetería. Crea una interfaz Bebida que defina un método
preparar(). Implementa esta interfaz en dos clases: Cafe y Te. Usa abstracción
para que ambas bebidas oculten su lógica de preparación interna pero
expongan un comportamiento común.*/

interface Bebida {
    preparar(): void;
}

class Cafe implements Bebida {

     preparar(): void {
        console.log(`Para preparar Coloca 2 cucharadas de cafe y agua hasta completar la taza.`);        
    }
}

class Te implements Bebida {
    preparar(): void {
        console.log(`Coloca el saquito de te en la taza y agua hasta completar la taza.`);        
    }
}

const cafe = new Cafe();
const te1 = new Te()

cafe.preparar();
te1.preparar();

