// simulando una micro base de datos
let empleados = [
    {
        id: 1,
        nombre: 'Marta'
    },
    {
        id: 2,
        nombre: 'Jacinto'
    },
    {
        id: 3,
        nombre: 'Mario'
    }
];

let salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];

// usando la base de datos

let getEmpleado = ( id, callback ) =>
{
    let empleadoDB = empleados.find(empleado =>
    {
        // empleado que cumpla la condicion
        return (empleado.id === id);
    });
    // console.log(empleadoDB);
    if(!empleadoDB) callback(`No existe un empleado con el id: ${ id }`);
    else callback(null, empleadoDB);

};

let getSalario = (empleado, callback) =>
{
        let salarioDB = salarios.find( salario =>
        {
            // retornar el salario perteneciente a dicho empleado
            return (salario.id === empleado);
        });

        if(!salarioDB) callback(`No se encontró un salario con el id de usuario: ${empleado}`);
        else callback(null, salarioDB);
};

// mandando un id y una funcion callback
getEmpleado(2, (err, empleado) =>
{
    //manejando el error dentro del callback
    if(err)
    {
        console.log(err);
        return;
    }
    console.log(`Datos conseguidos, empleado: ${empleado.nombre}, id: ${empleado.id}`)
});

// mandando a traer un usuario que no existe
getEmpleado(100, (err, empleado) =>
{
    //manejando el error dentro del callback
    if(err)
    {
        console.log(err);
        return;
    }
    console.log(`Datos conseguidos, empleado: ${empleado.nombre}, id: ${empleado.id}`)
});

console.log("\n");
// mandando a traer el salario de un empleado especifico
getSalario(1, (err, salario) =>
{
    if(err)
    {
        console.log(err);
        return;
    }
    console.log(salario);
});

// mandar a traer el salario de un empleado que no existe
getSalario(100, (err, salario) =>
{
    if(err)
    {
        console.log(err);
        return;
    }
    console.log(salario);
});