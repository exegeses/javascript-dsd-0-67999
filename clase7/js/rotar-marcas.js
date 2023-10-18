//ubicamos elementos dentro del DOM
const botones = document.querySelectorAll('#marcas img');
const prev = botones[0];
const next = botones[1];
const txt2 = document.querySelector('#txt2');

const marcas = [ 
        'Hermès', 'Zara', 'Boss', 
        'Aeropostale','Tommy', 'Hollister', 
        'Kingpin', 'Old Navy', 'YSL'
   ];

let posicion = 7;
/* escribimos dentro del span */
txt2.innerText = marcas[ posicion ];

next.addEventListener(
        'click',
        function()
        {
            posicion++;//posicion = posicion+1;
            if( posicion == marcas.length ){
                posicion = 0;
            }
            txt2.innerText = marcas[ posicion ];
        }
);