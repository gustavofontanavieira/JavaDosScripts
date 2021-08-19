var agora = new Date() //pede a data/horário/tudo do sistema
var hora = agora.getHours() //gethours é uma função que pega o horario, funciona pra data e mais diversas coisas

    if(hora >= 5 && hora < 12){
        console.log(`Bom dia! Agora são ${hora}`)
    }else if(hora >= 12 && hora < 18){
        console.log(`Boa tarde! Agora são ${hora}`)
    }else{
        console.log(`Boa noite! Agora são ${hora}`)
    }