function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date();                  
    var hora = data.getHours();
    msg.innerHTML = `agora são ${hora} horas`
        if(hora >= 0 && hora <= 12){
            img.src = 'manhareal.jpg'
            document.body.style.background = '#bb8700' 

        } else if(hora > 12 && hora <=18){
            img.src = 'manha.jpg'
            document.body.style.background = '#ffa500'

        }else{
            img.src = 'notches.jpg'                      //troca imagem
            document.body.style.background = '##020135' //troca cor de fundo do body
          
        }
}