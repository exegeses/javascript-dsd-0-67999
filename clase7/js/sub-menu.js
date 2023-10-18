//ubicamos elementos dentro del DOM
const subMenu = document.querySelector('#sub-vehicles');
const nav = document.querySelectorAll('header nav a');
console.log(nav);
const btn = nav[0];

//let estado = 'oculto';
subMenu.classList.add('oculto');


btn.addEventListener(
        'click',
        function()
        {
            subMenu.classList.toggle('oculto');
            /*
            if( estado == 'oculto' ){
                subMenu.classList.remove('oculto');
                subMenu.classList.add('desplegado');
                estado = 'desplegado';
            }
            else{
                subMenu.classList.remove('desplegado');
                subMenu.classList.add('oculto');
                estado = 'oculto';
            }*/
        }
);