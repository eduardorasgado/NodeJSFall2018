class Persona
{
    constructor(nombre, apellido, altura)
    {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar()
    {
        console.log(`Hola, me llamo ${this.nombre}`)
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

    saludar()
    {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a!`)
    }
}


var eduardo = new Desarrollador('Eduardo', 'Rasgado', 1.50)
eduardo.saludar()
eduardo.soyAlto()