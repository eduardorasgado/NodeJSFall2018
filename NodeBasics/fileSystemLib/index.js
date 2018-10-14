
const fs = require("fs");
const fileops = require("./src/fileops");

/*
* Ver la documentacion, para FIle System module:
*   https://nodejs.org/dist/latest-v8.x/docs/api/fs.html
* */

// donde se van aguardar los datos para posteriormente pasarlos a un archivo txt
let incValues;

function saveNewData(incValues)
{
    // sera llamada dentro del callback de fs.readFile
    // para gurdar la data modificada del archivo txt
    fs.writeFile("./resources/number(2).txt", incValues.join("\n"), (err, result) =>
    {
        if(err) throw err;
        console.log("Guardado con éxito");
    })
}

fs.readFile("./resources/number.txt", "utf8", (err, data) =>
{
    // abre el archivo txt en el directorio resources de nuestro OS
    // en caso de existir un error
    if(err) throw err;
    //console.log(typeof(numbers));
    let myArray = data.split("\n");
    myArray.map((n, k) => console.log(`number[${k}] is: ${n}`));
    console.log("\n");
    // modificando a la funcion
    // mandando a llamar al modulo descrito en src

    // convertir los strings a numeros
    myArray.map((n) => Number(n));
    // incrementar cada uno de los valores del array
    incValues = fileops.incrementValues(myArray);
    incValues.map((n, k) => console.log(`number[${k}] is: ${n}`));

    // guardando los datos
    saveNewData(incValues);
});
