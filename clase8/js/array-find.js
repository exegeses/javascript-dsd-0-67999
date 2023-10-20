const marcas = [ 
    'Hermès', 'Zara', 'Boss', 
    'Aeropostale','Tommy', 'Hollister', 
    'Kingpin', 'Old Navy', 'YSL'
];
const cantidad = marcas.length;
console.log( `array: ${marcas}` );

const encontrado = marcas.includes('Boss');//true si lo encuentra

console.log(encontrado);

console.log('-------------');

const cadenaAEncontrar = 'Tommy';

let existe = false;
for( let i = 0; i < cantidad; i++ ){
    if( marcas[i] == cadenaAEncontrar ){
        existe = true;
        break;//corta la ejecución del loop 
    }
}
console.log(existe);