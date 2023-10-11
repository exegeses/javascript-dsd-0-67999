//ubicamos elementos dentro del DOM
const redbull = document.querySelector('#redbull');
const ferrari = document.querySelector('#ferrari');
const amartin = document.querySelector('#amartin');
const mercedes = document.querySelector('#mercedes');

/* 
    estado inicial: 
    se ve 1(uno) de los 4 divs
    vamos a mostrar el 1ero (redbull)
    y vamos a ocultar los otros 3
*/ 
ferrari.style.display = 'none';
amartin.style.display = 'none';
mercedes.style.display = 'none';

//declaramos funcion de control
function mostrarOcultar( escuderia )
{
    if( escuderia == 'redbull' ){
        redbull.style.display = 'flex';
        ferrari.style.display = 'none';
        amartin.style.display = 'none';
        mercedes.style.display = 'none';
    }
    else if( escuderia == 'ferrari' ){
        redbull.style.display = 'none';
        ferrari.style.display = 'flex';
        amartin.style.display = 'none';
        mercedes.style.display = 'none';
    }
    else if( escuderia == 'amartin' ){
        redbull.style.display = 'none';
        ferrari.style.display = 'none';
        amartin.style.display = 'flex';
        mercedes.style.display = 'none';
    }
    else {
        redbull.style.display = 'none';
        ferrari.style.display = 'none';
        amartin.style.display = 'none';
        mercedes.style.display = 'flex';
    }

}