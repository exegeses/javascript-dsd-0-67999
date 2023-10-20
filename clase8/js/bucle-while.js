let n = 1;
while( n < 15 ){
    //document.write( n + '<br>' );
    document.write( `${n} <br>` );
    n++;
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

    //document.write('<li>'+ marcas[0] +'</li>');
    //document.write(`<li> ${marcas[0]} </li>`);
let i = 0;
while( i < cantidad ){
    document.write(`<li> ${marcas[i]} </li>`);
    i++;
}


document.write('</ul>');