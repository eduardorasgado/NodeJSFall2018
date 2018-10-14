const call = require("./src/call");

// call.greet("Eduardo Rasgado");

// console.log(call.withPromise("Eduardo", "Rasgado"));

// funciones capaces de esperar paso a paso una por una a que se resuelvan las
// promesas que se estaban esperando
async function callWithPromise()
{
    const fullName = await call.withPromise("Eduardo", "Rasgado");
    console.log(fullName);
}

callWithPromise();