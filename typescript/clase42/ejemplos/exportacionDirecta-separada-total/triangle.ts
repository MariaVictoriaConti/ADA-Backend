//La funcion logCalculation no se exporta y es privada al modulo
//calculateTriangleArea y TRIANGLE_NAME si se exportan

const logCalculation = (area:number) => {
    console.log(`Calculando el area: ${area}`);
}

//Exportacion directa de la funcion
export const calculateTriangleArea = (base:number, heigth:number): number =>{
    const area = (base * heigth) / 2;
    logCalculation(area); //uso de la funcion privada
    return area;
}

export const TRIANGLE_NAME = "Triangle";
