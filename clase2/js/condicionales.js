//ubicamos elemento dentro del DOM
const txt = document.getElementById('txt');

/*
    hacer una pregunta al usuario
    almacenar la respuesta en memoria
*/
let respuesta = prompt('¿qué seleccionado ganó la copa Qatar 2022?');

if( respuesta.toLowerCase() == 'argentina' ){
    //bloque a ejecutar si la condición es true
    txt.innerHTML = 'Correcto! <br> <img src="imgs/ok.png">';
}
else{
    //bloque a ejecutar si la condición es false
    txt.innerHTML = 'Incorrecto! <br> <img src="imgs/error.png">';
}