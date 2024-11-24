/*
Enunciado Ejercicio 18:
Dado un array de usuarios, mostrar sólo los que tengan más de 20 años
y en su nombre tengan la letra "o" y "n"
 
  const usuarios = [
    { nombre: 'Antonio', edad: 20 },
    { nombre: 'Juan', edad: 23 },
    { nombre: 'Pepe', edad: 12 },
    { nombre: 'Raul', edad: 28 },
    { nombre: 'Paco', edad: 38 },
    { nombre: 'Jason', edad: 56}
  ];
 
Ejemplos:
filtrarUsuarios(usuarios);
 
Devuelve: 
[
    { nombre: 'Antonio', edad: 20 },
    { nombre: 'Jason', edad: 56}
]
*/


function letraNombre(letra, nombre){

    for(let i = 0; i < nombre.length; i++){
        if(nombre[i] === letra){
            return true; 
        }        
    }
    return false; // Si llegamos al final del nombre sin encontrar la letra, devolvemos false
}


function filtrarUsuarios(array){

    let nuevoArray = []; 

    for(let i = 0; i < array.length; i++){

        if (array[i].edad >= 20 && (letraNombre("o", array[i].nombre) == true && letraNombre("n", array[i].nombre))){
            nuevoArray.push(array[i]); 
        }
    }

    console.log(nuevoArray); 
}

const usuarios = [
    { nombre: 'Antonio', edad: 20 },
    { nombre: 'Juan', edad: 23 },
    { nombre: 'Pepe', edad: 12 },
    { nombre: 'Raul', edad: 28 },
    { nombre: 'Paco', edad: 38 },
    { nombre: 'Jason', edad: 56}
  ];


filtrarUsuarios(usuarios); 