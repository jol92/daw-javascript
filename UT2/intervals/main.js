"use strict";

var interval;
var color = "blue";

function start() {
    interval=setInterval(changeColor,1000);
}

function stop() {
    clearInterval(interval);
}

function changeColor() {
    document.body.bgColor=color;
    if (color == "blue"){
        color = "green";
    }
    else{
        color="blue";
    }
}