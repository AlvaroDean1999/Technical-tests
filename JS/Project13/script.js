/*

Enunciado Ejercicio 13:
Crea una funcion que calcule el area de un cuadrado, un rectangulo o un triangulo
 
Ejemplos:
calcularAreaPoligono({ tipo: 'triangulo', base: 6, altura: 9 }); 
 
Devuelve: 27
 
*/


function calcularAreaPoligono(tipo, base, altura){
resultado = 0; 
    if(tipo == "triangulo"){
        resultado = (base * altura) / 2
        console.log("El resultado del área de ese triángulo es de " + resultado); 
    }

    if(tipo == "cuadrado" && base == altura) {
        resultado = base * altura; 
        console.log("El resultado del área de ese cuadrado es de " + resultado);         
    }

    if(tipo == "cuadrado" && base != altura) {
        console.log("Eso no es un cuadrado amigo! ");         
    }

    if(tipo == "rectangulo"){
        resultado = base * altura; 
        console.log("El resultado del área de ese triángulo es de " + resultado); 
    }

    else{
        console.log("Los tipos permitidos son triangulo, cuadrado y rectangulo"); 
    }
}


calcularAreaPoligono("rectangulo", 19, 9); 
