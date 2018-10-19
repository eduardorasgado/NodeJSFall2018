const fs = require("fs");

module.exports = {
    sync: function()
    {
        try {
            const m = 1;
            const n = m + z;
        } catch(err) {
            throw `This is a sync ${err}`;
        }
    },

    errorFirstCallbackWrong: function()
    {
        try {
            fs.readFile('some/file/that/does-not-exists', (err, data) =>
            {
                // mistaken assumption: thrrowing here...
                if(err)
                {
                    // MALA PRACTICA PARA MANEJO DE ERRORES
                    // el try and catch no va a capturar este throw
                    // porque el try and catch esta fuera del contexto
                    //de esta ejecucion asincrona
                    throw `THis is a sync ${err}`;
                }
            });
        } catch (err) {
            // This will not catch the throw
            console.error(`catched er: ${err}`);
        }
    },

    errorFirstCallback: function()
    {
        fs.readFile('/some/file/that/does-not-exist', (err, data) =>
        {
            if(err)
            {
                console.log(`This error-first callback`, err);
                // BUENA PRACTICA DE MANEJO DE ERRORES
                // SIN UN TRY AND CATCH PERO CON UN RETURN DENTRO DE ESTE IF
                // Y UN MANEJO DE err
                return;
            }
            console.log(data);
        });
    }
}