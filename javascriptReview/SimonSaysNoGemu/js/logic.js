// SimonSaysNoGemu logic

const BTN_EMPEZAR = document.getElementById('btnEmpezar');
const celeste = document.getElementById('celeste');
const violeta = document.getElementById('violeta');
const naranja = document.getElementById('naranja');
const verde = document.getElementById('verde');

const ULTIMO_NIVEL = 2;

class Juego
{
    constructor()
    {
        this.inicializar();
        this.generarSecuencia();
        this.siguienteNivel();
    }

    inicializar()
    {
        this.siguienteNivel = this.siguienteNivel.bind(this);
        // para que no se pierda el contexto de la ventana dentro de
        // la funcion agregarEventosClick
        this.elegirColor = this.elegirColor.bind(this)
        BTN_EMPEZAR.classList.add('hide');
        this.nivel = 1;
        this.colores = {
            // llenamos una lista con nuestros colores globales
            celeste: celeste,
            violeta: violeta,
            naranja: naranja,
            verde: verde
        };
        for(let i = 0;i < 4;i++) {
        	console.log(this.colores['violeta']);
        }
    }

    generarSecuencia()
    {
        // definimos un array de diez ceros y
        // los vamos llenando
        this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => (
            // generar numeros entre 0 y 3
            Math.floor(Math.random() * 4)
        ));
    }

    siguienteNivel()
    {
    	this.subnivel = 0;
    	// Retardando un poco la iluminacion justo despues de picar
        // el boton de comenzar a jugar
        setTimeout(() =>
        {
            this.iluminarSecuencia();
            // leer las entradas del usuario
            this.agregarEventosClick();
        }, 500);

    }

    transformarNumeroAColor(numero)
    {
        // esta funcion es usada en iluminar secuencia para tomar los
        // colores que corresponden a cada numero
        switch(numero)
        {
            case 0: return 'celeste';
            case 1: return 'violeta';
            case 2: return 'naranja';
            case 3: return 'verde'
        }
    }

    iluminarSecuencia()
    {
        // hasta el nivel en el que estamos
        for (let i = 0; i < this.nivel; i++) {
            // pidiendo un numero dentro de la secuencia
            // que generamos con la funcion generar secuencia
            // por cada numero del nivel
            let color = this.transformarNumeroAColor(this.secuencia[i]);
            // la accion de cambiar propiedades en el html para
            // iluminar el color deseado
            // los colores deben de iluminarse por tiempos, al ejecutarse el for,
            // estamos llamando a settimeout para darle esos tiempos a cada llamado
            setTimeout(() => this.iluminarColor(color), i * 1000);
        }
    }

    iluminarColor(color)
    {
        // mandado a llamar por el ciclo for de iluminarSecuencia
        // toma el objeto del documento HTML
        this.colores[color].classList.add('light');
        // el color seleccionado se ilumina por un periodo corto de tiempo
        setTimeout(() => this.apagarColor(color), 350);
    }

    apagarColor(color)
    {
        // funcion mandada a llamar por iluminarColor
        // dentro de un settimeout
        this.colores[color].classList.remove('light');
    }

    agregarEventosClick()
    {
        // funcion que se ejecuta asincronicamente
        // atamos un event listener, y aqui usualmente this se ata a el boton de color
        // asi que para uqe no se confunda, regresamos this a window, esto con bind
        this.colores.celeste.addEventListener('click', this.elegirColor);
        this.colores.violeta.addEventListener('click', this.elegirColor);
        this.colores.naranja.addEventListener('click', this.elegirColor);
        this.colores.verde.addEventListener('click', this.elegirColor);
    }

    eliminarEventosClick()
    {
    	// Se llama para evitar leer los clicks en medio de la ejecucio de
    	// la funcion elegirCOlor
    	this.colores.celeste.removeEventListener('click', this.elegirColor);
        this.colores.violeta.removeEventListener('click', this.elegirColor);
        this.colores.naranja.removeEventListener('click', this.elegirColor);
        this.colores.verde.removeEventListener('click', this.elegirColor);
    }

    transformarColorANumero(color)
    {
    	switch(color)
    	{
    		case 'celeste': return 0;
    		case 'violeta': return 1;
    		case 'naranja': return 2;
    		case 'verde': return 3;
    	}
    }

    again()
    {
        swal('De nuevo?!')
            .then(() =>
            {
                // comenzar de nuevo
                empezarJuego();
            })

    }
    // si gana
    ganaJuego()
    {
        // swal devuelve una promesa
        swal('Wow!', 'Le has ganado a la matrix')
            .then(() =>
            {
                this.again();
            });

    }

    // si pierde
    pierdeJuego()
    {
        swal('Boo!', 'Perdiste :C')
            .then(() =>
            {
                this.eliminarEventosClick();
                this.again();
            });
    }

    elegirColor(event)
    {
        // console.log(event);
        const nombreColor = event.target.dataset.color;
        console.log(nombreColor);
        const numeroColor = this.transformarColorANumero(nombreColor);
        // console.log(numeroColor);
        this.iluminarColor(nombreColor);
        // Si el ususario toco bien el boton que tenia que tocar
        console.log("numeroCOlor: ", numeroColor);
        console.log("this.secuencia: ", this.secuencia[this.subnivel]);
        if(numeroColor === this.secuencia[this.subnivel])
        {
        	this.subnivel++;
        	if(this.subnivel == this.nivel)
        	{
	        	this.nivel++;
	        	this.eliminarEventosClick();
                //NIVEL ACTUAL(que es un indice) == ULTIMO NIVEL?
	        	if(this.nivel == (ULTIMO_NIVEL + 1)){
	        		// GANA
                    setTimeout(() => this.ganaJuego(), 1000);

	        	} else {
	        	    // esperar antes del siguente nivel
	        		setTimeout(this.siguienteNivel, 1000);
        		}
        	}
        }
        // en caso de que no se haya tocado el boton correcto
        else
            {
        	// PIERDE
            setTimeout(() => this.pierdeJuego(), 1000);
        }
    }
}

swal('Bienvenido A SymonSaysNoGemu!')

function empezarJuego()
{
    let juego = new Juego;
}