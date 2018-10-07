function Persona(nombre, apellido, altura)
{
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function()
{
    console.log(`Hola, me llamo ${this.nombre}`)
}
Persona.prototype.alto = function()
{
    if(this.altura > 1.80) console.log("Soy alto")
    else console.log("NO soy alto")
}

// Otra clase, clase padre
function Desarrollador(nombre, apellido)
{
    this.nombre = nombre
    this.apellido = apellido
}

// HERENCIA
function heredaDe(prototipoHijo, prototipoPadre)
{
    // funcion dummy que nos va a servir
    var fn = function() {}
    // para no pisar el prototipo del padre lo asignamos a fn
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}

heredaDe(Desarrollador, Persona)

// lo ponemos aqui para que sobreescriba la funcion saludar de la clase persona
Desarrollador.prototype.saludar = function()
{
    console.log(`Hola, yo soy un/a desarrollador/a! Y me llamo ${this.nombre}` )
}

// creando nuevos objetos dado un prototipo
var eduardo = new Desarrollador('Eduardo', 'Rasgado', 1.65)
eduardo.saludar()