function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora}h`

    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'imagens/mornig300.jpg'
        document.body.style.background = '#EFEB42'
    } else if (hora >= 12 && hora <= 18) {
        //bOA TARDE!
        img.src = 'imagens/afternon300.jpg'
        document.body.style.background = '#B6A696'
    } else {
        // Boa noite
        img.src = 'imagens/night300.jpg'
        document.body.style.background = '#1C3450'
    }
} 