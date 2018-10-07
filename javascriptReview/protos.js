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

// creando nuevos objetos dado un prototipo
var eduardo = new Persona('Eduardo', 'Rasgado', 1.65)
var name = eduardo.nombre+' '+eduardo.apellido

console.log(name)

eduardo.saludar()
eduardo.alto()
console.log("\n")

var erika = new Persona('Erika', 'Garcia', 1.55)
var arturo = new Persona('Arturo', 'Martinez', 1.81)

erika.saludar()
erika.alto()
console.log("\n")
arturo.saludar()
arturo.alto("\n")