var continuar = false;
myDate = prompt("Introduzca una fecha. (formato: mmm dd, yyyy");


while (!continuar) {
    if (
        (isNaN(myDate.charAt[0]) && isNaN(myDate.charAt[1]) && isNaN(myDate.charAt[2])) &&
        (myDate.charAt[3] == " ") &&
        (!isNaN(myDate.charAt[4]) || !isNaN(myDate.charAt[5])) &&
        (myDate.charAt[6] == ",") &&
        (myDate.charAt[7] == " ") &&
        (!isNaN(myDate.charAt[8]) || !isNaN(myDate.charAt[9]) || !isNaN(myDate.charAt[10]) || !isNaN(myDate.charAt[11]))
    ) {
        continuar = true;
    }
    else {
        continuar = false;
    }
    myDate = prompt("Error. Introduzca una fecha. (formato: mmm dd, yyyy");
}

document.write(myDate);