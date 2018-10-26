const mult = require("./multiplicar/multiplicar");

mult.requestMult().
then((b) =>
{
    console.log("here goes well");
    // mandando a traer nuestra funcion y pasandole un parametro
    mult.saveMultiplication(b)
    .then((message) =>
    {
        console.log(message);
    })
    .catch(err =>
    {
        console.log(err);
    });
})
.catch(err =>
{
    console.log(err);
});