//ubicamos elemento dentro del DOM
const caja = document.getElementById('caja');

//declaramos función/es de control
function ocultar()
{
    caja.style.display = 'none';
}
function mostrar()
{
    caja.style.display = 'block';
}

function mostrarOcultar()
{
    // si la caja es visible
    if( caja.style.display == 'block' ){
        // ocultamos la caja
        //caja.style.display = 'none';
        ocultar();        
    }
    else{
        //mostramos al caja
        //caja.style.display = 'none';
        mostrar();
    }
}