var ventana;

//abrir una ventana
// ventana=open("http://www.iestrassierra.com");

//abrir ventana con x tamaño
// ventana=open("","","height=120, width=200");

//abrir ventana de un html secundario
//ventana=open("fmSecun.html");

function abrir(){
    if(ventana == undefined || ventana.closed){
        ventana = open();
        ventana.document.write("<h1>Ventana Secundaria</h1>");
        ventana.document.write("<button onclick='self.close();'>Cerrar SubVentana</button>");
    }
    else{
        alert("La ventana ya está creada.")
    }

}

function cerrar(){ //cierra ventana
    if(ventana == undefined || ventana.closed){
        close();
    }
    else{
        alert("La ventana secundaria está abierta.")
    }
}
