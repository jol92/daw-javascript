var text; // texto introducido por el usuario
var regex = /^[a-zA-Z\s]*$/; // expresión regular que sólo admite letras (mayúsculas o minúsculas) y espacios.

text = prompt("Introduzca el texto");

while(!regex.test(text) || text == " " || text == ""){ // comprobación de string en bucle
    text = prompt("Error. Introduzca el texto");
}

text = capitalize(text.trim());
document.write(text);

function capitalize(string) {  // convierte la primera letra a mayúscula y la une al resto de la cadena
    return string.charAt(0).toUpperCase() + string.slice(1);
}