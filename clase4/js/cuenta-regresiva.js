//ubicamos elementos dentro del DOM
const txtDias = document.getElementById('txtDias');
const txtHoras = document.getElementById('txtHoras');
const txtMinutos = document.getElementById('txtMinutos');
const txtSegundos = document.getElementById('txtSegundos');
const h1 = document.querySelector('h1');

let intervalo = ''; // variable auxiliar

//declaramos función de control
function agragarCero( numero )
{
    if( numero < 10 ){
        numero = '0' + numero;
    }
    return numero;
}


function countdown(){
    //creamos objetos de fecha
    const actual = new Date();
    const final = new Date(2023, 9, 10, 22);
    //diferencia entre horas
    let diferencia = final - actual;
    /*  tiempo  expresado en MILISEGUNDOS*/
    console.log(diferencia);

    /* obtenemos tiempo expresado en segundos, minutos, horas y días */
    //expresado en segundos
    let segundos = Math.trunc( diferencia / 1000 );
    console.log(segundos);

    //expresado en minutos
    let minutos = Math.trunc( segundos / 60 );
    console.log(minutos);

    //expresado en horas
    let horas = Math.trunc( minutos /60 );
    console.log(horas);

    //expresado en días
    let dias = Math.trunc( horas / 24 );
    console.log(dias);

    /* calculamos los tiempos restantes */
    horas = horas % 24;
        console.log(horas);
    minutos = minutos % 60;
        console.log(minutos);
    segundos = segundos % 60;
        console.log(segundos)

/*  intetrumpir el setInterval */
if( dias <= 0 && horas <= 0 && minutos <= 0 && segundos < 0  ){
    //dejar de actualizar
    h1.innerText = 'Oderta finalizada';
    clearInterval( intervalo );
    segundos = 0;
    minutos = 0;
    horas = 0;
    segundos = 0;
}

    /* agregamos 0s iniciales */

        segundos = agragarCero( segundos );
        minutos = agragarCero( minutos );
        horas = agragarCero( horas );
        dias = agragarCero( dias );


    /* imprimimos en los span */
    txtDias.innerText = dias;
    txtHoras.innerText = horas;
    txtMinutos.innerText = minutos;
    txtSegundos.innerText = segundos;
}
//invocamos a la función
countdown();
//actualizamos el llamado a la función
intervalo = setInterval( countdown );