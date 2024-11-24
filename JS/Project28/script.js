/*
Enunciado Ejercicio 28:
Crea una función que me diga si un número es armstrong o no.
 
Un número es armstrong si la suma de los cubos de sus dígitos es igual al número. 
Por ejemplo, el número 371 es armstrong porque 3^3 + 7^3 + 1^3 = 371.
 
Si la cifra es de 4 digitos, se eleva a 4, y si es de 5 a 5.
 
Ejemplos:
esArmstrong(371)  // Devuelve: true

*/


function calcularNumeroAmstrong(numero){

    let array = numero.toString().split('').map(Number);

    let total = 0; 

    for(let i = 0; i < array.length; i++){

        total = total + array[i]**array.length; 

        
    }

    if (numero == total) {
        console.log("true")
    } else {
        console.log("false")
    }

}

calcularNumeroAmstrong(3721); 