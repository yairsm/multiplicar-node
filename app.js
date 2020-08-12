//const fs = requiere('express');
//const fs = requiere('./fs');

const colors = require('colors');

const argv = require('yargs')

.command('listar', 'Imprime en consola la tabla de multiplicar', {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }

})

.command('crear', 'Genera un archivo con la tabla de multiplicar', {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }

})




.help()
    .argv;


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':

        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.cyan}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}


//let base = '5';

//console.log( process.argv );





//let argv = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1]