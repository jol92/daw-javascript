/* - Construir un programa que calcule el índice de masa corporal de una persona 
(IMC = peso [kg] / altura2 [m]) e indique el estado en el que se encuentra 
esa persona en función del valor de IMC:
< 16 ->Criterio de ingreso en hospital
de 16 a 17 ->infrapeso
de 17 a 18 -> bajo peso
de 18 a 25 -> peso normal (saludable)
de 25 a 30 -> sobrepeso (obesidad de grado I)
de 30 a 35 ->sobrepeso crónico (obesidad de grado II)
de 35 a 40 -> obesidad premórbida (obesidad de grado III)
>40 -> obesidad mórbida (obesidad de grado IV) */

var peso; // guarda el peso.
var altura; // guarda la altura.
var imc; // guarda el imc.
var altura2; // guarda la altura al cuadrado para hacer los cálculos.

peso = prompt("Introduzca su peso.");
while (isNaN(peso) || peso == "" || peso == " ") { // comprobamos que no se introducen datos incorrectos.
    peso = prompt("Error. Introduzca su peso.")
}

altura = prompt("Introduzca su altura.")
while (isNaN(altura) || altura == "" || altura == " ") { // comprobamos que no se introducen datos incorrectos.
    altura = prompt("Error. Introduzca su altura.")
}

// cálculos
altura2 = altura * altura;
imc = peso / altura2;

// se muestra el resultado dependiendo del imc del usuario.
switch (true) {
    case (imc < 16):
        document.write("Peso: " + peso + "<br>" + "Altura: " + altura + "<br>" + "IMC: " + imc.toFixed(2) + "<br>" + "Criterio de ingreso en hospital.");
        break;

    case (imc >= 16 && imc < 18):
        document.write("Peso: " + peso + "<br>" + "Altura: " + altura + "<br>" + "IMC: " + imc.toFixed(2) + "<br>" + "Infrapeso.");
        break;

    case (imc >= 18 && imc < 25):
        document.write("Peso: " + peso + "<br>" + "Altura: " + altura + "<br>" + "IMC: " + imc.toFixed(2) + "<br>" + "Peso normal.");
        break;

    case (imc >= 25 && imc < 30):
        document.write("Peso: " + peso + "<br>" + "Altura: " + altura + "<br>" + "IMC: " + imc.toFixed(2) + "<br>" + "Sobrepeso. (Obesidad de grado I)");
        break;

    case (imc >= 30 && imc < 35):
        document.write("Peso: " + peso + "<br>" + "Altura: " + altura + "<br>" + "IMC: " + imc.toFixed(2) + "<br>" + "Sobrepeso crónico. (Obesidad de grado II)");
        break;

    case (imc >= 35 && imc < 40):
        document.write("Peso: " + peso + "<br>" + "Altura: " + altura + "<br>" + "IMC: " + imc.toFixed(2) + "<br>" + "Obesidad premórbida. (Obesidad de grado III)");
        break;

    case (imc > 40):
        document.write("Peso: " + peso + "<br>" + "Altura: " + altura + "<br>" + "IMC: " + imc.toFixed(2) + "<br>" + "Obesidad mórbida (Obesidad de grado IV).");
        break;
}