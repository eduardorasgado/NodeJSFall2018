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
//console.log(argv);

// tomamos el arreglo que aparece al poner opciones asi
// node main crear listar borrar comer
let comandos = argv._[0];

switch (comandos) {
    case 'listar':
        // node main listar --limite=5 --base=5
        console.log(`Listar tabla del ${argv.base}...`);
        mult.listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        // esto funcionara con node main crear --base 6
        console.log(`Creando archivo de tabla del ${argv.base} ...`);
        mult.saveMultiplication(argv.base)
            .then(message =>
            {
                console.log(message);
            })
            .catch(err => console.log(err));
        break;

    default: console.log("Comando desconocido");
}