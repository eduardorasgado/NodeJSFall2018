// main file
const errors = require("./src/errors");

// Uso de try and catch
try
{
    //lanzando un error de tipo rango
    errors.standardErr.range();
} catch(err) {
    console.log(`Ha ocurrido un error: ${err}`);
}