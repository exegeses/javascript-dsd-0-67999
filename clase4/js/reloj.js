//ubicamos elemento dentro del DOM
const txt = document.getElementById('txt');

//declaramos funcón de control
function mostrarReloj()
{
    //formato:  21:07:45
    //creamos objeto de fecha
    const fecha = new Date();
    console.log( fecha );

    //obtenemos el número de las horas
    let horas = fecha.getHours()
    if( horas < 10 ){
        horas = '0'+ horas;
    }
    console.log( horas );

    //obtenemos el número de los minutos
    let minutos = fecha.getMinutes();
    if( minutos < 10 ){
        minutos = '0'+ minutos;
    }
    console.log(minutos);
    
    //obtenemos el número de los segundos
    let segundos = fecha.getSeconds();
    if( segundos < 10 ){
        segundos = '0'+ segundos;
    }
    console.log(segundos);

    //imprimimos dentro del span
    txt.innerText = horas +":"+ minutos +":"+ segundos;
}

//invocamos la función mostrarReloj
mostrarReloj();

//actualizamos el llamado a la función  
setInterval( mostrarReloj );