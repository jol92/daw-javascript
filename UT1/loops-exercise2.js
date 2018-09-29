/* Realizar un programa que nos permita aceptar números hasta que se introduzca un cero. 
Validar la entrada de datos, solo números. 
Después se mostrará los siguientes datos:
1-Suma de los números pares introducidos.
2-Mayor nº impar introducido.
3-Cuántos números hemos introducido.
4-Cuantos números de los introducidos han sido pares y cuantos impares. */

var numero; // variable de número introducido por usuario
var pares = 0; // total de números pares introducidos.
var totalImpares = 0; // total de números impares introducidos.
var mayorImpar = 0; // variable del mayor número impar introducido.
var total = 0; // total de números introducidos.
var sumaPares = 0; // suma total de los números pares.

// se pide el primer número, se comprueba que sea correcto y se hacen los respectivos cambios en las variables.
numero = prompt("Introduzca un número. (0 para salir)");
while (isNaN(numero) || numero == "" || numero == " ") {
    numero = prompt("Error. Introduzca un número.")
}
if (numero % 2 == 0) {
    sumaPares = sumaPares + parseInt(numero);
    pares++;
} else {
    mayorImpar = numero;
    totalImpares++;
}
total++;

// mientras que no sea 0 se siguen pidiendo números.
while (numero != 0) { 
    numero = prompt("Introduzca un número. (0 para salir)");
    while (isNaN(numero) || numero == "" || numero == " ") {
        numero = prompt("Error. Introduzca un número. (0 para salir)")
    }
    if (numero % 2 == 0) {
        pares++;
        sumaPares = sumaPares + parseInt(numero);
    } else {
        totalImpares++;
        if (numero >= mayorImpar) {
            mayorImpar = numero;
        }
    }
    total++;
}

//resto el último 0 introducido de la variable pares y total.
pares = pares - 1; 
total = total - 1;

document.write("Suma de los números pares introducidos: " + sumaPares + "<br>");
document.write("Mayor nº impar introducido: " + mayorImpar + "<br>");
document.write("Total de números introducidos: " + total + "<br>");
document.write("Total de números pares e impares: " + "<br>" + "Impares: " + totalImpares + "<br>" + "Pares: " + pares + "<br>");