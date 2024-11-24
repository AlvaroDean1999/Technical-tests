/*Enunciado Ejercicio 6:
Dado un año actual, crea un programa que me muestre 
los años bisiestos que habrá en los proximos 30 años
 
Ejemplo:
bisiestos(2023);
 
// Salida:
2024
2028
2032
2036
2040
2044
2048
2052
*/

function leapYear(year){

let counter = 0; 
    while(counter < 30){     
        if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
            console.log(year); 
            counter++;
        }
        year += 1; 
        counter ++; 
    }
}

leapYear(2023); 