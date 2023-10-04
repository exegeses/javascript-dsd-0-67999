//ubicamos elemento dentro del DOM
const caja = document.getElementById('caja');

//declaración de funciones
function pintarVerde()
{
    caja.style.backgroundColor = 'rgb(0, 145, 55)';
    caja.innerText = 'Verde';
}

function pintarRojo()
{
    caja.style.backgroundColor = 'rgb(180, 30, 0)';
    caja.innerText = 'Rojo';    
}
function pintarAzul()
{
    caja.style.backgroundColor = 'rgb(0, 30, 180)';
    caja.innerText = 'Azul';    
}