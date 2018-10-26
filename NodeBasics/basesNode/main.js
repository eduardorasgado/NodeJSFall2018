//console.log( process.argv );
const mult = require("./multiplicar/multiplicar");

let base = 2;

mult.saveMultiplication(base)
    .then(message =>
    {
        console.log(message);
    })
    .catch(err => console.log(err));