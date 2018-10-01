function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

randomNumber = getRndInteger(50,150);

document.write("Número aleatorio entre el 50 y el 150: </br>")
document.write(randomNumber);