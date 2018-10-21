// Ahora vamos a manejar promesas

let getNombre = async( ) =>
{
    //throw new Error("No existe un nombre para ese usuario");
    return 'Eduardo';
};

console.log(getNombre());
getNombre()
.then(nombre =>
{
    console.log(`Hola ${nombre}`);
})
.catch(err =>
{
    console.log(err);
});