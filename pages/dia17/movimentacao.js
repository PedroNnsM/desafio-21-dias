var dx;
var dy;
var px;
var py;
var vel;
var obj;
var tempo;
var teclaPrecionada;

function inicia(params) {
    dx = 0;
    dy = 0;
    px = 0;
    py = 0;
    vel = 10;
    obj = document.querySelector('.circulo')
    teclaPrecionada = '';
    document.addEventListener("keydown", tecladDw);
    document.addEventListener("keyup", tecladUp);


    tempo = setInterval(enterFrame, 20);
}

function tecladDw(event) {
    let tecla = event.keyCode;
    if(tecla == 37){
        dx = -1;
    }else if (tecla == 38){
        dy = -1;
    }else if(tecla == 39 ){
        dx= 1;
    }else if ( tecla == 40){
        dy = 1;
    }
}

function tecladUp(event) {
    let tecla = event.keyCode;
    if(tecla == 37){
        dx = -1;
    }else if (tecla == 38){
        dy = -1;
    }else if(tecla == 39 ){
        dx= 1;
    }else if ( tecla == 40){
        dy = 1;
    }
}


function enterFrame(){
    px += dx*vel;
    py += dy*vel;
    obj.style.left = px +'px';
    obj.style.top = py + 'px';
}
window.addEventListener("load", inicia);