/*
Enunciado Ejercicio 29:
Dado un array de objetos de peliculas de los años 80 y 90. 
 
Crea dos funciones:
- Una que las filtre por género
- y otra que las filtre por la decada en este formato 80s o 90s
 
Array de objetos a utilizar:
const peliculas = [
    { titulo: "Terminator", genero: "accion", anioLanzamiento: 1984 },
    { titulo: "Alien", genero: "ciencia ficción", anioLanzamiento: 1979 },
    { titulo: "Die Hard", genero: "accion", anioLanzamiento: 1988 },
    { titulo: "Predator", genero: "accion", anioLanzamiento: 1987 },
    { titulo: "Total Recall", genero: "ciencia ficción", anioLanzamiento: 1990 },
    { titulo: "RoboCop", genero: "ciencia ficción", anioLanzamiento: 1987 },
    { titulo: "Starship Troopers", genero: "ciencia ficción", anioLanzamiento: 1997 },
    { titulo: "The Fifth Element", genero: "ciencia ficción", anioLanzamiento: 1997 },
    { titulo: "Armageddon", genero: "accion", anioLanzamiento: 1998 },
    { titulo: "Deep Impact", genero: "ciencia ficción", anioLanzamiento: 1998 }
  ];
 
Ejemplos:
filtrarPorGenero(peliculas, "accion")
filtrarPorDecada(peliculas, "80s")
*/


const peliculas = [
    { titulo: "Terminator", genero: "accion", anioLanzamiento: 1984 },
    { titulo: "Alien", genero: "ciencia ficción", anioLanzamiento: 1979 },
    { titulo: "Die Hard", genero: "accion", anioLanzamiento: 1988 },
    { titulo: "Predator", genero: "accion", anioLanzamiento: 1987 },
    { titulo: "Total Recall", genero: "ciencia ficción", anioLanzamiento: 1990 },
    { titulo: "RoboCop", genero: "ciencia ficción", anioLanzamiento: 1987 },
    { titulo: "Starship Troopers", genero: "ciencia ficción", anioLanzamiento: 1997 },
    { titulo: "The Fifth Element", genero: "ciencia ficción", anioLanzamiento: 1997 },
    { titulo: "Armageddon", genero: "accion", anioLanzamiento: 1998 },
    { titulo: "Deep Impact", genero: "ciencia ficción", anioLanzamiento: 1998 }
  ];


function filtrarPorGenero(array, genero){

    generoFiltrado = []; 

    for(let i = 0; i < array.length; i++){
        if(array[i].genero == genero){
            
            generoFiltrado.push(array[i]); 
        }
    }

    console.log(generoFiltrado); 

}

function filtrarPorDecada(array, decada){

    decadaFiltrada = [];  

    for(let i = 0; i < array.length; i++){

        if(decada == "70s" && (array[i].anioLanzamiento >= 1970 && array[i].anioLanzamiento <= 1979)){
            decadaFiltrada.push(array[i]); 
        }

        if(decada == "80s" && (array[i].anioLanzamiento >= 1980 && array[i].anioLanzamiento <= 1989)){
            decadaFiltrada.push(array[i]); 
        }

        if(decada == "90s" && (array[i].anioLanzamiento >= 1990 && array[i].anioLanzamiento <= 1999)){
            decadaFiltrada.push(array[i]); 
        }

    }

    console.log(decadaFiltrada); 


}

filtrarPorDecada(peliculas, "90s")

