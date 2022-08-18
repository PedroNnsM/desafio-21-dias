var $checkbox = document.querySelector('#checkbox');
var $html = document.querySelector('html');

$checkbox.addEventListener("click", function(event){
    $html.classList.toggle('dark-mode')
} );
