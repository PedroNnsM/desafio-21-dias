var nVoltas = 0;

function voltas(){
    nVoltas++;
    var padrao = (nVoltas < 10 ? '0' + nVoltas : nVoltas) 
    document.getElementById('voltas').innerText = padrao
}