//ubicamos elementos dentro del DOM
const txt = document.querySelector('#txt');
const btn = document.querySelector('#btn');


//btn.addEventListener( 'evento', acción );
btn.addEventListener(
        'click',
        function()
        {
            txt.innerText = 'click';
        }
);
btn.addEventListener(
        'mouseover',
        function()
        {
            txt.innerText = 'mouse sobre'
        }
);
btn.addEventListener(
        'mouseout',
        function()
        {
            txt.innerText = 'mouse fuera'
        }
);
