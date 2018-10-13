const loopLimit = 10e9;
module.exports = {
    simulateSync: function()
    {
        console.log("Comenzando bloqueo simulado...");
        for (let i = 0; i <= loopLimit; i++)
        {
            // Simulacion de operacion intensiva
            // cifrado
            // compresion
            // proceso de datos
            // peticion http
            // quiery a base de datos
            if(i ===loopLimit) console.log("He llegado al final");
        }
        console.log("El bucle ha finalizado");
    },
    simulateAsync: function()
    {
        console.log("Comenzando bloqueo simuulado");
        // se lleva a cabo el recurso necesario pero en otro hilo
        // dejando que los demas procesos continuen
        setImmediate(() =>
        {
            for (let i = 0; i <= loopLimit; i++)
            {
                // SImulacion de operacion intensiva
                // cifrado
                // compresion
                // preocesi de datos
                // peticion http
                // query a la base de datos
                if (i === loopLimit) console.log("He llegado al final");
            }
        });
        console.log("El bucle ha finalizado");
    }
}