let getNombre = () => {
    return new Promise((resolve, reject) =>
    {
        setTimeout(() =>
        {
            resolve('Eduardo');
        }, 1000);
    });
};

let saludo = async ( ) =>
{
    // javascript va a esperar a que se cumpla la promesa
    let nombre = await getNombre();
    return `Hello ${nombre}`;
};

// getNombre()
// .then(nombre =>
// {
//     console.log();
// })
// .catch(err =>
// {
//     console.log(err);
// });

saludo()
.then(mensaje =>
{
    console.log(mensaje);
})
.catch(err =>
{
    console.log(err);
});