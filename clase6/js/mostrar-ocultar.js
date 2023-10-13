//ubicamos elementos dentro del DOM
const caja = document.querySelector('#caja');
const btn = document.querySelector('#btn');

//declaramos funciones de control
function ocultar()
{
    caja.style.display = 'none';
}
function mostrar()
{
    caja.style.display = 'block';
}
function showHide()
{
    if( caja.style.display == 'block' ){
        ocultar();
    }
    else{
        mostrar();
    }
}

/*btn.addEventListener(
        'click',
        function()
        {
            if( caja.style.display == 'block' ){
                ocultar();
            }
            else{
                mostrar();
            }
        }
);*/
/* btn.addEventListener(
        'click',
        () =>
        {
            if( caja.style.display == 'block' ){
                ocultar();
            }
            else{
                mostrar();
            }
        }
);*/

btn.addEventListener(
        'click',
        function(){
            showHide();
        }
);