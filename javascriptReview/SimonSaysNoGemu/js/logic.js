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
        this.siguienteNivel();
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

    siguienteNivel()
    {
        this.iluminarSecuencia();
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

    iluminarColor()
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
}

function empezarJuego()
{
    let juego = new Juego;
}