var $html = document.querySelector('#html')
var $css = document.querySelector('#css')
var $js = document.querySelector('#js')
var $react = document.querySelector('#react')
var $container = document.querySelector('.linguagens')

$container.addEventListener


$html.addEventListener('click', function(e){
    $html.classList.add('fixa')
    $html.classList.remove('flutua')
    $container.appendChild($html)

})

 $css.addEventListener('click', function(e){
    $css.classList.add('fixa')
    $css.classList.remove('flutua')
        $container.appendChild($css)
    
});

$js.addEventListener('click', function(e){
    $js.classList.add('fixa')
    $js.classList.remove('flutua')
    $container.appendChild($js)
})
$react.addEventListener('click', function(e){
    $react.classList.add('fixa')
    $react.classList.remove('flutua')
    $container.appendChild($react)
})



