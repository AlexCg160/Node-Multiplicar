const fs = require('fs');

let listarTabla = (base, limite) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base*i }`);
    }
}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ${ base } no es un número`)
            return;
        }

        let texto = '';

        for (let i = 1; i <= limite; i++) {
            texto += `${ base } * ${ i } = ${ base*i } \n`
        }

        fs.writeFile(`tablas/Tabla-${ base }.txt`, texto, (err) => {
            if (err) {
                reject(`No se pudo crear el arhivo\n ${ err }`)
            } else {
                resolve(`Tabla-${ base }.txt`)
            }
        })
    });
};

module.exports = {
    crearArchivo,
    listarTabla
}