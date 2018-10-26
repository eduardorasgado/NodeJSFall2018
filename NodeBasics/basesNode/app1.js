const mult = require("./multiplicar/multiplicar");

// mandando a traer nuestra funcion y pasandole un parametro
mult.saveMultiplication(4)
.then((message) =>
{
    console.log(message);
})
.catch(err =>
{
    console.log(err);
});