var ventana;

function abrir(){
    if(ventana == undefined || ventana.closed){
        for(i = 1; i <= 5; i++){
            ventana = window.open();
            ventana.document.write("<title>Ventana "+i+"</title>")
            ventana.document.write("<h1>Ventana "+i+"</h1>");
            ventana.document.write("<button onclick='self.close();'>Cerrar</button>");
        }
    }
    else{
        alert("Las ventanas ya están creadas.")
    }

}
