module.exports = {
    greet: function(nombreCompleto)
    {
        console.log(`Hola ${nombreCompleto}! Sientes la asincronía?`);
    },

    withPromise: function(nombre, apellido)
    {
        console.log("Llamando a la funcion con una promesa");
        return new Promise((resolve, reject) =>
        {
            console.log("Ejecutando, espera...");
            setTimeout(() =>
            {
                console.log("Resolviendo la espera!");
                resolve(`${nombre} ${apellido}`);
            }, 2000);
        });
    }
}