const add = require("./src/addition");
const sim = require("./src/intensive");

// add.syncSum(1,2);
// add.asyncSum(2,4);

// se ejecuta en cascada
sim.simulateSync();
// se ejecuta de manera asincrona aprovechando otro hilo
sim.simulateAsync();