// SimonSaysNoGemu logic

const BTN_EMPEZAR = document.getElementById('btnEmpezar');
const CELESTE = document.getElementById('celeste');
const VIOLETA = document.getElementById('violeta');
const NARANJA = document.getElementById('naranja');
const VERDE = document.getElementById('verde');

class Juego
{
    constructor()
    {
        this.inicializar();
        this.generarSecuencia();
    }

    inicializar()
    {
        BTN_EMPEZAR.classList.add('hide');
        this.nivel = 1;
        this.colores = {
            // llenamos una lista con nuestros colores globales
            celeste: CELESTE,
            violeta: VIOLETA,
            naranja: NARANJA,
            verde: VERDE
        };
    }

    generarSecuencia()
    {
        // definimos un array de diez ceros y
        // los vamos llenando
        this.secuencia = new Array(10).fill(0).map(n => (
            // generar numeros entre 0 y 3
            Math.floor(Math.random() * 4)
        ));
    }
}

function empezarJuego()
{
    let juego = new Juego;
}