
function sayHello(name){
    return new Promise((resolve, reject) =>
    {
        let greetings = "Hello there > "+ name;
        console.log(greetings);
    });
}

async function sayHelloCall(name)
{
    return await sayHello(name);
}

// asincronismo en node js
sayHelloCall("Eduardo");
sayHelloCall("Daniro");
sayHelloCall("Laura");
// una impresion muy comun
console.log("hello there");