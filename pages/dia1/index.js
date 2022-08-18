var imgRocket = document.querySelector('#img')
var btn = document.querySelector('h1')

btn.addEventListener("click", function(event){
    if(imgRocket.classList.contains('hide')){
        imgRocket.classList.remove('hide')
        imgRocket.classList.add("invisivel")

    }else{
        imgRocket.classList.add('hide')
        imgRocket.classList.remove("invisivel")

    }
})



