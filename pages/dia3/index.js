var $checkbox = document.querySelector('#checkbox');
var $html = document.querySelector('html');
var $claro = document.querySelector('#claro')
var $escuro = document.querySelector('#escuro')

$checkbox.addEventListener("click", function(event){
    $html.classList.toggle('dark-mode')
    $claro.classList.toggle('invisivel')
    $escuro.classList.toggle('invisivel')
    
} );
