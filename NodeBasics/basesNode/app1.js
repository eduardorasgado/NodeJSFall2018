/*
* USO DEL MODULO INTERNO FILE SYSTEM
* */
const fs = require("fs");
//const exp = require("express"); // esto tenemos que instalarlo con npm
//const myArchivo = require("./archivo"); // modulos propios
let data = '';
let multiply = (base) =>
{
    for (let i = 1; i <= 10; i++) {
        let sentence = `${base} x ${i} = ${base*i}`;
        data+=sentence+"\n";
    }
};

let saveMultiplication = (n) =>
{
    multiply(n);
    fs.writeFile(`./tablas/table${n}.txt`, data, (err) =>
    {
        if(err)
        {
            console.log(err);
            return;
        }
        console.log("Archivo creado con exito");
    });
};

saveMultiplication(3);