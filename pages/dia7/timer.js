

var hh = 0;
var mm = 00;
var ss = 0;
var mil = 0;

var tempo = 1;
var cron;

function start(){
    cron = setInterval(() => { timer() }, tempo);

}

function pause( ){
    clearInterval(cron)
}

function parar(){
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;
    mil = 0;
    
    document.getElementById('counter').innerText = '00:00:00'
}

function timer(){
    mil++
    if(mil == 1000){
        mil = 0;
        ss++;
        if(ss == 60){
            ss = 0;
            mm++;
            
            if(mm == 60) {
                mm = 0;
                hh++;
            }
        }
    }
        

    var format = (mm < 10 ? '0' + mm : mm) + ':'+ (ss < 10 ? '0' + ss : ss) +':' + (mil < 100 ? '0' + mil : mil);
    document.getElementById('counter').innerText = format;
}