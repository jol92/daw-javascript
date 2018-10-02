var interval;
var number = 60;

function timer() { // llama a la función seconds cada segundo.
    document.write("01:00 </br>")
        interval = setInterval(seconds, 1000);
    }

function seconds() {
    number--; // resta un segundo del contador
    if(number >= 10){ // mientras sea mayor que 10 se pone "00:"
        document.write("00:" + number + "</br>");
    }
    

    if(number < 10){ // cuando sea menor que 10 se pone "00:0"
        document.write("00:0" + number + "</br>");
    }
    
    if(number == 0){ // cuando llegue a 0 terminamos la ejecución
        clearInterval(interval);
        document.write("Tu tiempo ha terminado.");
    }

}