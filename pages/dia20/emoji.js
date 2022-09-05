var input = document.querySelector('.text')

var picker = new EmojiButton({
    position: 'right-start'
})

picker.on('emoji', function(emoji){
    input.value += emoji;
})

input.addEventListener('click', function() {
    picker.pickerVisible ? picker.hidePicker() : picker.showPicker(input)
})

const $response = document.querySelector('#response')
function copyEmoji(){
    input.select();
    input.setSelectionRange(0, 99999 );


    document.execCommand("copy")

    $response.innerHTML = '<p>O texto copiado é : ' + input.value  +'</p>';
    
}
