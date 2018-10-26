const { argv } = require("./config/yargsConfig");

// crear listar actualizar eliminar:CRUD
let comando = argv._[0]; // en la posicion 0 se encuentra el comando
switch(comando)
{
    case 'crear':
        //
        // solamente imprimiendo lo que obtenemos de la consola
        console.log(argv.element);
        console.log(argv.desc);
        break;
    case 'listar':
        //
        console.log("Lstar todas las tareas.");
        break;
    case 'actualizar':
        //
        console.log("Actualizar una tarea.");
        break;
    default: console.log("El comando es desconocido.");
}