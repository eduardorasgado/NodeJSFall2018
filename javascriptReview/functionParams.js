class Persona
{
    constructor(nombre, apellido, altura)
    {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(fn)
    {
        console.log(`Hola, me llamo ${this.nombre}`)
        // si nos pasaron una funcion
        if(fn) fn(this.nombre,this.apellido, false)
    }

    soyAlto()
    {
        if(this.altura > 1.8) console.log("Soy alto")
        else console.log("NO soy alto")
    }
}

class Desarrollador extends Persona
{
    constructor(nombre, apellido, altura)
    {
        // llamamos al constructor de la clase padre
        super(nombre, apellido, altura)
    }

    saludar(fn)
    {
        var nombre = this.nombre
        var apellido = this.apellido
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a!`)
        if(fn) fn(this.nombre,this.apellido, true)
    }
}

// FUNCION QUE PASAMOS COMO PARAMETRO
function responderSaludo(nombre, apellido, esDev)
{
    console.log(`Buen dia ${nombre}`)
    if(esDev) console.log(`Buaaa! También eres desarrollador!`)
}

//========================================================================

var eduardo = new Desarrollador('Eduardo', 'Rasgado', 1.50)
var johaness = new Persona('Johaness', 'Thompson', 1.90)

eduardo.saludar(responderSaludo) // 'Chico', 'Perez', false
eduardo.soyAlto()

console.log("\n")

// PASANDO FUNCIONES COMO PARAMETROS
johaness.saludar(responderSaludo)  // 'Juanisimo', 'Mendoza', true
johaness.soyAlto()

