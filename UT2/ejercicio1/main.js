var ventana1;
var ventana2;
var ventana3;
var ventana4;
var ventana5;

function abrir() {
    if (ventana1 == undefined || ventana1.closed) { // Se abre la ventana mientras no esté abierta.
        ventana1 = window.open();
        ventana1.document.write("<title>Ventana 1</title>")
        ventana1.document.write("<h1>Ventana 1</h1>");
        ventana1.document.write("<button onclick='self.close();'>Cerrar</button>");
    }
    if (ventana2 == undefined || ventana2.closed) { // Se abre la ventana mientras no esté abierta.
        ventana2 = window.open();
        ventana2.document.write("<title>Ventana 2</title>")
        ventana2.document.write("<h1>Ventana 2</h1>");
        ventana2.document.write("<button onclick='self.close();'>Cerrar</button>");
    }
    if (ventana3 == undefined || ventana3.closed) { // Se abre la ventana mientras no esté abierta.
        ventana3 = window.open();
        ventana3.document.write("<title>Ventana 3</title>")
        ventana3.document.write("<h1>Ventana 3</h1>");
        ventana3.document.write("<button onclick='self.close();'>Cerrar</button>");
    }
    if (ventana4 == undefined || ventana4.closed) { // Se abre la ventana mientras no esté abierta.
        ventana4 = window.open();
        ventana4.document.write("<title>Ventana 4</title>")
        ventana4.document.write("<h1>Ventana 4</h1>");
        ventana4.document.write("<button onclick='self.close();'>Cerrar</button>");
    }

    if (ventana5 == undefined || ventana5.closed) { // Se abre la ventana mientras no esté abierta.
        ventana5 = window.open();
        ventana5.document.write("<title>Ventana 5</title>")
        ventana5.document.write("<h1>Ventana 5</h1>");
        ventana5.document.write("<button onclick='self.close();'>Cerrar</button>");
    }

    if ( // Si todas las ventanas están abiertas lanza un alert.
        !(ventana1 == undefined || ventana1.closed) &&
        !(ventana2 == undefined || ventana2.closed) &&
        !(ventana3 == undefined || ventana3.closed) &&
        !(ventana4 == undefined || ventana4.closed) &&
        !(ventana5 == undefined || ventana5.closed)
    ) {
        alert("Las ventanas ya están abiertas");
    }
}