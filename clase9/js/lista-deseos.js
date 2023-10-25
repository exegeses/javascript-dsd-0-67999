//ubicamos elementos dentro del DOM
const deseo = document.querySelector('#deseo');
const botones = document.querySelectorAll('#selector button');
const botonAgregar = botones[0];
const lista = document.querySelector('#lista');

//declaramos array vacío
const listaDeseos = [];

//declaramos función de control
function agregarAlArray()
{
    //obtenemos el texto escrito en el input
    let valor = deseo.value;
    //agregamos el valor al array si NO es vación
    if( valor != '' ){
        listaDeseos.push( valor );
    }
    deseo.value = '';
    console.log( listaDeseos );
}

function agregarALaLista()
{
    let contenido = '';
    let cantidad = listaDeseos.length;
    for( let n = 0; n < cantidad; n++ ){
        contenido = contenido + `<li>${listaDeseos[n]}</li>`;
    }

    lista.innerHTML = contenido;
}

botonAgregar.addEventListener(
        'click',
        function()
        {
            agregarAlArray();
            agregarALaLista()
        }
);

