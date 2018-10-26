const argv = require('yargs')
    .command('crear', 'crear una tarea',
        {
            element:
                {
                    demand: true,
                    alias: 'e'
                },
            desc:
                {
                    demand: true,
                    alias: 'd'
                }
        })
    .help()
    .argv;

// crear listar actualizar eliminar:CRUD
let comando = argv._[0];
switch(comando)
{
    case 'crear':
        //
        // solamente imprimiendo lo que obtenemos de la consola
        console.log(argv.element);
        console.log(argv.desc);
        break;
}