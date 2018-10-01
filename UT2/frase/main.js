/**
 * Programa que lea un string introducido por el usuario.
 * Comprueba que solo contenga letras.
 * Cambia la primera letra a mayúscula y el resto a minúscula.
 * Le quita los espacios a principio y final de la cadena.
 */

var text; // texto introducido por el usuario
var regex = /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]*$/; // expresión regular que sólo admite letras (mayúsculas o minúsculas) y espacios.

text = prompt("Introduzca el texto");

while (!regex.test(text) || text == " " || text == "") { // comprobación de string en bucle.
    text = prompt("Error. Introduzca el texto");
}

text = cleanUp(text.trim()); // se llama a la función cleanUp y se añade el método trim para borrar los espacios al principio y final de la cadena.
document.write(text);

function cleanUp(string) {  // convierte la primera letra a mayúscula y la une al resto de la cadena convertida a minúscula.
    return string.charAt(0).toUpperCase() + string.substr(1).toLowerCase();
}