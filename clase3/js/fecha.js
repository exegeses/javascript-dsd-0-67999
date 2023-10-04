//ubicamos elemento dentro del DOM
const txt = document.getElementById('txt');

/*
  mostrar fecha actual
  formato   Martes 03/10/2024
*/

//creamos objeto de fecha
const fecha = new Date();

//obtenemos el número de día de la SEMANA
let diaSemana = fecha.getDay();
/* 
    Domingo --> 0
    Lunes --> 1
    Martes --> 2
*/
/*
if( diaSemana == 0 ){
    diaSemana = 'Domingo';
}
else if( diaSemana == 1 ){
    diaSemana = 'Lunes';
}
else if( diaSemana == 2 ){
    diaSemana = 'Martes';
}
else if( diaSemana == 3 ){
    diaSemana = 'Miércoles';
}
else if( diaSemana == 4 ){
    diaSemana = 'Jueves';
}
else if( diaSemana == 5 ){
    diaSemana = 'Viernes';
}
else{
    diaSemana = 'Sábado';
}
*/

switch( diaSemana ){
    case 0:
        diaSemana = 'Domingo';
        break;
    case 1:
        diaSemana = 'Lunes';
        break;
    case 2:
        diaSemana = 'Martes';
        break;
    case 3:
        diaSemana = 'Miércoles';
        break;
    case 4:
        diaSemana = 'Jueves';
        break;
    case 5:
        diaSemana = 'Viernes';
        break;
    default:
        diaSemana = 'Sábado';
        break;
}




//obtenemos el número de día de mes
let diaMes = fecha.getDate();
if ( diaMes < 10 ){
    diaMes = '0' + diaMes; 
}

//obtenemos el número de mes actual
let mes = fecha.getMonth() + 1;
if( mes < 10 ){
    mes = '0' + mes;
}

//obtenemos el núemro del año actual
let anio = fecha.getFullYear();

//imprimimos dentro del span
//txt.innerText = diaSemana +' '+  diaMes + '/' + mes + '/' + anio;
txt.innerText = `${diaSemana} ${diaMes}/${mes}/${anio}`;