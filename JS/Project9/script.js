/*

Crea una función que reciba un array de números y calcule
la suma de todos los números pares del array
 
Ejemplos:
sumarPares([2, 13, 6, 15]);  // Resultado: 8
 
*/


function sumarPares(array){

suma = 0; 

    for(var i = 0; i < array.length; i++){

        if(array[i] % 2 == 0){
            suma += array[i]; 
        }
    }

    console.log(suma); 

    return suma; 
}

let array = [1, 2, 3, 4, 5, 6, 10]; 

sumarPares(array); 