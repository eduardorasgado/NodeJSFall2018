//******
// Aqui trabajaremos
//******

//
const math = require("./math");
const greet = require("./greetings");
const hello = require("./greetings/hello");

console.log(math.add(4, 6));
console.log(math.multiply(4, 6));
console.log(math.divide(4, 6));
console.log(math.substract(4, 6));

// Si importamos una campeta en node,
// lo primero que hace es buscar un archivo llamado index
// y la toma como su modulo
console.log(greet.doGreetings("Eduardo"));
console.log(hello.sayHello("Tulio"));