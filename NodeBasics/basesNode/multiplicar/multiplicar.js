/*
* USO DEL MODULO INTERNO FILE SYSTEM
* */
const fs = require("fs");
//const exp = require("express"); // esto tenemos que instalarlo con npm
//const myArchivo = require("./archivo"); // modulos propios


module.exports = {
    multiply_me: function(base)
    {
        let data = '';
        for (let i = 1; i <= 10; i++) {
            let sentence = `${base} x ${i} = ${base*i}`;
            data+=sentence+"\n";
        }
        return data;
    },
    saveMultiplication: function(n)
    {
        return new Promise((resolve, reject) =>
        {
            let data = this.multiply_me(n);
            fs.writeFile(`./tablas/table${n}.txt`, data, (err) =>
            {
                if(err)
                {
                    reject(err);
                }
                resolve(`Archivo creado con exito: table${n}.txt`);
            });
        });
    }
};