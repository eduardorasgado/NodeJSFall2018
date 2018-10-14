const call = require("./src/call");

console.log(call.sync("Eduardo"));

// mandando a traer la funcion callback dentro del modulo
// para ser usada por la funcion withCallback
call.withCallback("Eduardo Rasgado", call.sync);

call.withPromise("Eduard")
.then((data) =>
{
    console.log(data);
})