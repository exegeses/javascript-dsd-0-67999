//ubicamos elementos dentro del DOM
const persona = document.querySelector('#persona');
const persona2 = document.querySelector('#persona2');
const articulo = document.querySelector('#articulo');


persona.addEventListener(
        'mouseover',
        function()
        {
            persona.src = 'imgs/person-3.png';
        }
);
persona.addEventListener(
        'mouseout',
        function(){
            persona.src = "imgs/person-2.png";
        }
)

persona2.addEventListener(
        'mouseover',
        function()
        {
            //agregar la clase .sepia
            persona2.classList.add('sepia');
        }
);
persona2.addEventListener(
        'mouseout',
        function()
        {
            //quitar la clase .sepia
            persona2.classList.remove('sepia');
        }
);

articulo.addEventListener(
    'click',
    function()
    {
        articulo.classList.toggle('mensaje');
    }
);