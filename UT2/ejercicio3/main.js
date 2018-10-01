/**
 * Crear un script que permita abrir una nueva ventana. Dicha ventana deberá tener un ancho
 * de 300 pixeles y una altura de 200 pixeles. La ventana se deberá desplazar de forma aleatoria
 * un número finito de veces y finalmente se cerrará.
 */

var ventana;
var interval;
var end = 0;

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function abrir() {
    if (ventana == undefined || ventana.closed) {
        ventana = window.open("", "", "width=300,height=200");
        ventana.document.write("<title>Ventana</title>");
        interval = setInterval(move, 1000); // llama a la función move cada segundo.
    }

    else {
        alert("La ventana ya está creada.")
    }

}

function move() {
    ventana.moveTo(randomNumber(1, 1500), randomNumber(1, 1500));  // mueve la ventana
    ventana.focus();                                          // muestra la ventana
    end++;
    if (end == 10) { // número de veces que se hará el movimiento
        clearInterval(interval);
    }
}