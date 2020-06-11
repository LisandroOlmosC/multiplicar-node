// requireds
const fs = require('fs');

let listarTabla = ((base, limite) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor ingresado ${base}, no es un número`)
        }
        if (!Number(limite)) {
            reject(`El valor ingresado ${limite}, no es un número`)
        }

        for (i = 1; i <= limite; i++) {
            console.log(`${base} x ${i} = ${base*i}\n`);

        }
    })

});

let crearArchivo = ((base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ingresado ${base}, no es un número`);
        }

        let data = '';

        for (i = 1; i <= limite; i++) {

            data += `${base} * ${i} = ${base * i}\n`;

        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(`tabla-${base}`)
            }
        });
    })
})

module.exports = {
    crearArchivo,
    listarTabla
}