const $img = document.querySelector("#imagem")

function fetchApi() {
    fetch('https://source.unsplash.com/random/500x500/').then((response)=> {
        console.log(response)
        var img = response.url;
        
        $img.innerHTML = '<img src="  '+ img + '" />' 
    })
}