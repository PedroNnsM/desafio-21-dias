var $mostra = document.querySelector('#senha')
var $btn = document.querySelector('#btn')

function geraSenhaAleatoria(tamanho) {
    var senhaAleatoria = '';
    let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < tamanho; i++) {
        senhaAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        $mostra.innerHTML = '<p>Sua nova senha é:' + senhaAleatoria;
    }
    return senhaAleatoria;
}

