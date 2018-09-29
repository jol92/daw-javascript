var interval;
var number = 60;

function timer() {
    document.write("01:00 </br>")
        interval = setInterval(seconds, 1000);
    }

function seconds() {
    number--;
    if(number >= 10){
        document.write("00:" + number + "</br>");
    }
    

    if(number < 10){
        document.write("00:0" + number + "</br>");
    }
    
    if(number == 0){
        clearInterval(interval);
        document.write("Tu tiempo ha terminado.");
    }

}