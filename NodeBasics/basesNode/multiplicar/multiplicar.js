/*
* USO DEL MODULO INTERNO FILE SYSTEM
* */
const fs = require("fs");
const readLine = require("readline");
//const exp = require("express"); // esto tenemos que instalarlo con npm
//const myArchivo = require("./archivo"); // modulos propios


module.exports = {
    listarTabla: function(base, limite)
    {
        //
        for (let i = 1; i <= limite; i++)
        {
            let sentence = `${base} x ${i} = ${base*i}`;
            console.log(sentence);
        }
    },
    multiply_me: function(base, limite=10)
    {
        let data = '';
        for (let i = 1; i <= limite; i++) {
            let sentence = `${base} x ${i} = ${base*i}`;
            data+=sentence+"\n";
        }
        return data;
    },
    saveMultiplication: function(n, l)
    {
        return new Promise((resolve, reject) =>
        {
            if(!Number(n)) {reject('No es un numero'); return;}
            let data = this.multiply_me(n, l);
            fs.writeFile(`./tablas/table${n}.txt`, data, (err) =>
            {
                if(err)
                {
                    reject(err);
                }
                resolve(`Archivo creado con exito: table${n}.txt`);
            });
        });
    },
    AskForm: function(rl)
    {
        return new Promise((resolve, reject) =>
        {
            rl.question("Inserte la base: ", (answer) =>
            {
                if(!answer) reject("No answer.");
                else resolve(answer)
            });
        });
    },
    requestMult: function ()
    {
        // crearmos una interfaz
        const rl = readLine.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        return new Promise(
            async(resolve, reject) =>
            {
                const result = await this.AskForm(rl);
                // cerrando la entrada y salida de las preguntas
                rl.close();
                console.log(result);
                // resolving the request to readline
                if(!result) reject("No answer.");
                else resolve(result);
            }
        );
    }
};