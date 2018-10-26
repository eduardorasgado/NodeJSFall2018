
const opts = {
    // los flags que debe contener ese comando
    base: {
        // para que sea obligatorio
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10,
    }
};

// importando el paquete de yargs
const argv = require("yargs")
// crear un comando llamado listar con su descripcion para la consola
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea un archivo dentro de una carpeta ./tablas con la tabla de la base', opts)
    // para tener disponible la ayuda del comando
    .help()
    .argv;

module.exports = {
    argv
};