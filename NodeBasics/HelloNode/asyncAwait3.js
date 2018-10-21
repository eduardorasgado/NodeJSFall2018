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

// Ahora vamos a manejar promesas

let getEmpleado = (id) =>
{
    return new Promise( (resolve, reject) =>
    {
        let empleadoDB = empleados.find(empleado =>
        {
            return (empleado.id === id);
        });
        // resolucion, devolvemos el json dentro del resolve y reject
        if(!empleadoDB) reject(`No existe un empleado con el ID: ${ id }`);
        else resolve(empleadoDB);
    });
};

let getSalario = async (empleado) =>
{
    let salarioDB = salarios.find((salario) =>
    {
        return (empleado.id === salario.id);
    });
    if(!salarioDB) throw new Error(`No existe un salario perteneciente al empleado deseado`);
    // emviando el json juntando al empleado y al salario
    else return ({
        nombre: empleado.nombre,
        salario: salarioDB.salario,
        id: salarioDB.id
    });
};



/*
* Ahora podemos usar async await y evitar los then catch
* */
let getInfo = async ( id ) =>
{
    let empleado =  await getEmpleado(id);
    let salario = await getSalario(empleado);
    return `${salario.nombre} tiene un salario de ${salario.salario}`;
};

// mandando a traerlo
getInfo(1)
.then(mensaje =>
{
    console.log(mensaje);
})
.catch(err =>
{
    // recordemos que los mensajes de error se encuentran dentro
    // de las funciones de promesa
    console.log(err);
});

getInfo(3)
.then(mensaje => console.log(mensaje))
.catch(err => console.log(err));