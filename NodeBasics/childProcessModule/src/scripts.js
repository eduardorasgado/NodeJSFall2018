const args = require("yargs").argv;
const { base } = args;

function multiplesTable(base)
{
    console.log(`Tablas de multiplos de ${base}`);
    for(let i = 0;i < 10;i++)
    {
        console.log(`${base}x${i}=${base*i}`);
    }
}

if(base && !isNaN(base))
{
    multiplesTable(base);
}
else
{
    //opcion #1
    throw new Error("Argument 'base' not defined");

    //opcion #2
    // console.log("Argument 'base' not defined");
    return;
}

// si el script es usado como un modulo
module.exports = {
    table: multiplesTable
}