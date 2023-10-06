//ubicamos elementos dentro del DOM
const txtDias = document.getElementById('txtDias');
const txtHoras = document.getElementById('txtHoras');
const txtMinutos = document.getElementById('txtMinutos');
const txtSegundos = document.getElementById('txtSegundos');

//declaramos función de control
function countdown(){
    //creamos objetos de fecha
    const actual = new Date();
    const final = new Date(2023, 9, 10, 20);
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

    /* agregamos 0s iniciales */
    if( segundos < 10 ){
        segundos = '0'+ segundos
    }
    if( minutos < 10 ){
        minutos = '0'+ minutos
    }
    if( horas < 10 ){
        horas = '0'+ horas
    }
    if( dias < 10 ){
        dias = '0'+ dias
    }


    /* imprimimos en los span */
    txtDias.innerText = dias;
    txtHoras.innerText = horas;
    txtMinutos.innerText = minutos;
    txtSegundos.innerText = segundos;
}
//invocamos a la función
countdown();
//actualizamos el llamado a la función
setInterval( countdown )