for( let n = 1; n < 15; n++ ){

    document.write( `${n} <br>` );
}

/*   */
const marcas = [ 
    'Hermès', 'Zara', 'Boss', 
    'Aeropostale','Tommy', 'Hollister', 
    'Kingpin', 'Old Navy', 'YSL'
];
const cantidad = marcas.length;

document.write('<hr>');

document.write('<ul>');

for( let i = 1; i < cantidad; i++ ){
    document.write(`<li> ${marcas[i]} </li>`);
}

document.write('</ul>');

