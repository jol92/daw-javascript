"use strict";

function cambioColor(){
    let color;
    if(parent.marco1.form1.color.selectedIndex == 0){
        color="red"
    }
    else{
        color="green";
    }

    if(parent.marco1.form1.lado.selectedIndex == 0){
        parent.marco1.document.bgColor=color;
    }
    else{
        parent.marco2.document.bgColor=color;
    }
}