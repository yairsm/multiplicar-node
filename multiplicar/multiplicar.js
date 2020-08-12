const fs = require('fs');
const { promises } = require('dns');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('===================='.green);
    console.log(`======Tabla de ${base} ======`.red);
    console.log('===================='.green);



    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }



}






let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }



        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`Tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`El archivo tabla-${base}  ha sido creado`);
        });
    });

}

module.exports = {
    crearArchivo,
    listarTabla
}