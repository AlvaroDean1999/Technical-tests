/* Enunciado Ejercicio 23:
Crea una función que a la cual le pase unos números en un array y me decodifique
el mensaje teniendo en cuenta que cada letra tiene un numero asignado.
 
Las letras del abecedario de la A a la Z tienen un número
por ejemplo la A es el numero 1 y la Z es el numero 26
 
Ejemplos:
decodificarMensaje([8, 15, 12, 1]);
 
Devuelve: 
HOLA
 
*/


function decodificarLetra(numero){

    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    return alphabet[numero - 1]; 

}


function decodificarMensaje(array){

let mensajeOculto = []; 
    for(let i = 0; i < array.length; i++){
        let letra = decodificarLetra(array[i]); 

        mensajeOculto.push(letra); 
    }

    let cadena = mensajeOculto.join(""); 
    console.log(cadena); 
}

decodificarMensaje([8, 15, 12, 1]);