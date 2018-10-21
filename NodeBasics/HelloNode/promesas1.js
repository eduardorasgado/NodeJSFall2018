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

let getSalario = (empleado) =>
{
    return new Promise( (resolve, reject) =>
    {
        let salarioDB = salarios.find((salario) =>
        {
            return (empleado.id === salario.id);
        });
        if(!salarioDB) reject(`No existe un salario perteneciente al empleado deseado`);
        // emviando el json juntando al empleado y al salario
        else resolve({
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: salarioDB.id
        });
    });
};

//mandando a llamar a la promesa
getEmpleado(1)
.then((emp) =>
{
    console.log(`Empleado de DB: ${emp.nombre}`);
})
.catch(err =>
{
    console.log(err);
});

console.log("\n\n");

// llamando la cadena de promesas ----------------
getEmpleado(1)
.then(emp =>{
    return getSalario(emp);
})
.then(salario =>
{
   console.log(`El empleado es: ${salario.nombre},
                el salario es: ${salario.salario},
                el id es: ${salario.id}`);
})
.catch((err) =>
{
    // en caso de fallar alguna de las promesas anteriormente llamadas
    console.log(err);
});