const greet = require("./src/greet");

greet.emit("clap");
greet.emit("shout", "VIVA LA VIDA LOCO");

const callback = (something) =>
{
    console.log(`Callback says: ${something}`);
};

greet.emit("call", "hola!", callback);