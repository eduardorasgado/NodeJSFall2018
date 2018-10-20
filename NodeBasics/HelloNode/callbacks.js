
// generando un callback
let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Eduardo',
        id
    };
    // en lo general siempre tenderemos a recibir cosas no deseadas,
    // para eso manejamos los errores
    if( id == 12 ) callback(`Èl usuario con id ${ id } no existe`);
    // el error, el usuario
    else callback(null, usuario);
};

// ejecutando la funcion y mandando a traer un callback
getUsuarioById(14, (err, usuario) =>
{
    if(err)
    {
        return console.log(err);
    }
    console.log("Ejecutando un callback...\n");
    console.log(`Usuario de base de datos:\n nombre: ${usuario.nombre}, id: ${usuario.id}`);
});

console.log("\n");
// llamada con error
getUsuarioById(12, (err, usuario) =>
{
    if(err)
    {
        // manejando el error
        return console.log(err);
    }
    console.log("Ejecutando un callback...\n");
    console.log(`Usuario de base de datos:\n nombre: ${usuario.nombre}, id: ${usuario.id}`);
});