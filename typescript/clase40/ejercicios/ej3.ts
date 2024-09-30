/*Ejercicio 3: Uso de enum para días de la semana
1. Declara un enum llamado DiasDeLaSemana con los valores: Lunes, Martes,
Miercoles, Jueves, Viernes, Sabado, Domingo.
2. Crea una función que reciba un día de la semana y devuelva un mensaje
indicando si es un día laborable o un día de descanso.
3. Usa el enum para invocar la función con el valor Sabado y muestra el
resultado por consola.*/
enum DiasDeLaSemana {
    Lunes,
    Martes,
    Miercoles,
    Jueves, 
    Viernes, 
    Sabado, 
    Domingo,
};
let queDiaEs = (dia:DiasDeLaSemana):void =>{
   if(dia === DiasDeLaSemana.Lunes || dia === DiasDeLaSemana.Martes || dia === DiasDeLaSemana.Miercoles || dia === DiasDeLaSemana.Jueves || dia === DiasDeLaSemana.Viernes){
    console.log("Es dia laboral. A trabajar!"); 
   }else{
    console.log("Es fin de semana! A descansar!");
    
   }
 }

 queDiaEs(DiasDeLaSemana.Sabado)