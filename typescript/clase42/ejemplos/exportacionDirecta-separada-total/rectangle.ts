// --Exportacion separada--
//Declaramos funciones y constantes y despues las exportamos al final del archivo como export separada

const calculateRectangleArea = (width:number, heigth:number): number =>{
    return width*heigth;
}

const RECTANGLE_NAME = "Rectangle";

//Exp separada
export {calculateRectangleArea, RECTANGLE_NAME}