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

//===================================implementacion de la tarea

let empleado1 = getEmpleado(1, (err, empleado) =>
{
    if(err)
    {
        console.log(err);
        return;
    }
    getSalario(empleado.id, (err, emp) =>
    {
        if (err)
        {
            console.log(err);
            return;
        }
        let paga = {
            empleado: empleado.nombre,
            salario: emp.salario
        };
        console.log(paga);
    });
});

// Implementacion de la solucion acorde al maestro
let getSal2 = (empleado, callback) =>
{
    if (!empleado)
    {
        return callback(`No existe salario con el empleado deseado`);
    }
    let salarioDB = salarios.find(salario =>
    {
        return (salario.id === empleado.id);
    })
    if(!salarioDB) callback(`No existe salario con el empleado con id: ${empleado.id}`);
    // mandando el nombre del empleado y el salario
    else callback(null,{ nombre: empleado.nombre, salario: salarioDB.salario });
};

console.log("\n===== classroom implementation =====");
getSal2(empleados[1], (err, salario) =>
{
    if(err)
    {
        console.log(err);
        return;
    }
    console.log(salario);
});

// mandando un empleado que noo existe
getSal2(empleados[3], (err, salario) =>
{
    if(err)
    {
        console.log(err);
        return;
    }
    console.log(salario);
});