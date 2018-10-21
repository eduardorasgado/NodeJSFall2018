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