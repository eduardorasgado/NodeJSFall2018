//console.log( process.argv );
const mult = require("./multiplicar/multiplicar");

// tomaremos datos del usuario via argumentos de ejecucion
let argv = process.argv;
// el elemento 3 en la lista al ejecutar process.argv
let parametro = argv[2];
console.log(parametro);
// substraemos la base del parametro
let base = parametro.split("=")[1];
//console.log(base);

// creando el archivo de la tabla de la base requerida
// por parametro de consola
mult.saveMultiplication(base, 10)
.then(message =>
{
    console.log(message);
})
.catch(err => console.log(err));