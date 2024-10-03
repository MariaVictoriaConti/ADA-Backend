#Modularizacion

VENTAJAS:
Reutilizacion del codigo, mantenibilidad, separacion de preocupaciones, colaboracion en equipos grandes, pruebas aisladas.

Modularizacion en Typescript se basa en concepto de modulos ES6.
Modulo- codigo q se puede exportar para q otros archivos hagan uso de ese codigo

#Exportacion e Importacion de Modulos

2 formas
-Exportaciones nombradas
se pueden poner alias a las exportaciones cuando las importamos
import { PI as CirclePI, ass as sum, substract as difference} from './mathUtils';
-Exportaciones por defecto
importa todo el modulo, no usa llaves y no usa alias

#3 formas de exportar elementos
-exportacion directa
-exportacion separada
-exportacion de todo (Re-exportacion)

#Modulos internos y externos
modulos que creamos nosotros y estan dentro de nuestro proyecto
modulos externos se instalan x npm-install son paquetes de terceros instalados en node_modules
