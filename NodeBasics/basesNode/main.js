//console.log( process.argv );
const mult = require("./multiplicar/multiplicar");
// importando el paquete de yargs
const argv = require("yargs")
    // crear un comando llamado listar con su descripcion para la consola
    .command('listar', 'Imprime en consola la tabla de multiplicar',
        {
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
        })
    // para tener disponible la ayuda del comando
    .help()
    .argv;
// EJEMPLO DE USO:
// node main listar --limite 20 --base=6
// node main --help
// node main listar --help

console.log(`La base es ${argv.base}`);
console.log(`El limite es ${argv.limite}`);

//let base = argv.base;
//
// mult.saveMultiplication(base)
//     .then(message =>
//     {
//         console.log(message);
//     })
//     .catch(err => console.log(err));