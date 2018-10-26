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

module.exports = {
    argv
};