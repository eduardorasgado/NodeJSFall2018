/*
* Aprendiendo sobre el uso del package readline de
* node js para la lectura y captura de los datos
* proporcionados por el usuario a traves de la
* consola de comandos
* */

const readline = require("readline");
// primero debemos de construir una interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const q = [
    "Cual es tu primer nombre?",
    "Cual es tu apellido?",
    "Cuál es tu edad?"
];

const AskQuestion = (rl, question) =>
{
    //Se manda a llamar en AkForm,
    // promesa que evalua cada pregunta que se tiene en la interfaz de readline
    return new Promise((res, rej) => rl.question(question, (answer) => resolve(answer)));
};

const AskForm = function(questions)
{
    return new Promise(
        async resolve =>
        {
            // donde se van a guardar los resultados al array de pregutas
            let results = [];
            for(let i = 0; i < questions.length; i++)
            {
                // se manda a llamar la funcion elaborada anteriormente
                // funcion que crea la promesa
                // se le manda pregunta a pregunta dentro del array de preguntas
                // esperando que retorne los resultados una vez el usuario las haya contestado
                const result = await AskQuestion(rl, questions[i]);
                // guardamos las respuestas del usuario
                results.push(result);
            }
            // tenemos que cerrar nuestra interfaz
            rl.close();
            // resolvemos nuestra promesa con las respuestas que el
            //usuario introdujo en la consola
            resolve(results);
        }
    )
};

// ahora se manda a llamar el formulario solicitado
AskForm(q)
    .then(q =>
    {
        // ya que el array de resultados lleno
        // usamos todos y los imprimimos
        console.log(`Hola ${q[0]} ${q[1]}, edad: ${q[2]}`)
    })
