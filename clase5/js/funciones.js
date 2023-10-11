//ubicamos elementos dentro del DOM
//const caja = document.getElementById('caja');
const caja = document.querySelector('#caja');
const colorPicker = document.querySelector('#color-picker');

// declaración 
function saludar( persona )
{
    //console.log( 'texto en consola' );
    console.log( 'buenas noches ' + persona );
}
function pintar( codigoColor, nombreColor )
{
    caja.style.backgroundColor = codigoColor;
    caja.innerText = nombreColor;
}

function pintar2()
{
    //obtenemos el valor seleccionado en el color-picker
    let valor = colorPicker.value;
    pintar( valor, valor );
    /*
    caja.style.backgroundColor = valor;
    caja.innerText = valor;
    */
}


//invocación
saludar( 'Marcos' );
saludar( 'Rick' );
saludar( 'Jess' );


