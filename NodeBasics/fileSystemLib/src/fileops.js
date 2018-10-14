module.exports = {
    incrementValues: function(list)
    {
        // se guarda la funcion que va a ser ocupada por map
        const mapIncrement = val => Number(val) + 1;
        // se mapea la lista y almismo tiempo se pasa como paramentro
        // la constante anteriormente descrita
        return list.map(mapIncrement);
        // asi se veria de manera conjunta:
        //return list.map(val => Number(val) + 1);
    },

    callNames: function(list)
    {
        const mapCall = name => `Hola ${name}! Aqui esta tu nombre!.`;
    }
}