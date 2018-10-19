/*
* Modulo para ejecutar comandos de consola
* o crear instancias de un archivo de node
* */
const cp = require("child_process");

function execCommand(command)
{
    cp.exec(command, (err, stdout, stderr) =>
    {
        if(err)
        {
            console.log(` Error: ${err}`);
            return;
        }
        if (stdout)
        {
            console.log(`Standard output:\n ${stdout}`);

        }
        if (stderr)
        {
            console.log(`Standard error: \n ${stderr}`);
        }
    })
}

//execCommand("ls");
execCommand("node ./src/scripts --base=5");