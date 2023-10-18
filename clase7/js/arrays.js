const txt = document.querySelector('#txt');

const alumnos = [
                    'Fede', 'Agus', 'Carliss',
                    'Charly', 'Edwin', 'Fede',
                    'Gaspy','Gian'
                ];
console.log( alumnos );
txt.innerText = alumnos[3]; // muestra Charly


const audi = [ 'A4', 'R8', 'S4' ];
const toyota = [ 'Corolla', 'Etios', 'Hilux' ];
const marcas = [ audi, toyota ];
console.log( marcas )
txt.innerText = marcas; // rarísimo!

//creamos objeto de fecha
const fecha = new Date();
//obtenemos el número de día de la SEMANA
let diaSemana = fecha.getDay();
txt.innerText = diaSemana; // número
const diasDeLaSemana = [
                            'Domingo', 'Lunes', 'Martes',
                            'Miércoles', 'Jueves', 'Viernes',
                            'Sábado'
                        ];

txt.innerText = diasDeLaSemana[ diaSemana ];
