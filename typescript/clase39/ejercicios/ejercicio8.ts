/*Ejercicio 8: Funciones con diferentes tipos de retorno
Consigna: Crea una función llamada calcularArea que acepte el tipo de figura
("circulo" o "rectangulo") y luego acepte los parámetros necesarios para cada
tipo de figura (radio para el círculo y largo y ancho para el rectángulo). La
función debe retornar el área de la figura. Usa tipos específicos para cada caso.*/

let calcularArea = function (figura: string, radioOAltura?: number, ancho?: number) {
    if (figura === "circulo") {
        if (radioOAltura) {
            console.log("Aqui va la formula del circulo");
        }

    } else if (figura === "rectangulo") {
        if(radioOAltura && ancho){
            let areaRectangulo = (radioOAltura * ancho) / 100
            return console.log(areaRectangulo);
        };
    };
};

calcularArea("rectangulo", 1000, 10)