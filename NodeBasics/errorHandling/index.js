// main file
const errors = require("./src/errors");
const handle= require("./src/handling");

// Uso de try and catch
try
{
    //lanzando un error de tipo rango
    errors.standardErr.range();
} catch(err) {
    console.log(`Ha ocurrido un error: ${err}`);
}
// con el try and catch no se detiene el codigo y puede ejecutarse codigo despues de ello
console.log("Me ejecuto despues del error");

// Malas practicas de manejo de errores
/*
* No se deben lanzar throws dentro de funciones asincronas atrapadas o encapsuladas
* en un try and catch
*
* ver: handling.js en src
* */
handle.errorFirstCallbackWrong();
console.log("Esto se ejecutara solo porque la excepcion asincrona se ejecuta conforme al event loop");