function verificar(){
    var data = new Date()
    var ano = data.getFullYear()//ano atual
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value == 0 || fano.value > ano){
        window.alert("Não é um ano válido")
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.getElementById('foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if (idade > 0 && idade < 10){
                //criança
                img.src = 'Hcriança.jpg'
            }else if (idade >10 && idade < 20){
                //adolescente
                img.src = 'Hadole.jpg'
            }else if( idade > 20 && idade < 50){
                //adulto
                img.src = 'Hadulto.jpg'
            }else{
                //idoso
                img.src = 'Hidoso.jpg'
            }
        }else if (fsex[1].checked){
            genero = 'mulher'
            if (idade > 0 && idade < 10){
                //criança
                img.src = 'Mcriança.jpg'
            }else if (idade > 10 && idade < 20){
                //adolescente
                img.src = 'Madole.jpg'
            }else if( idade > 20 && idade < 50){
                //adulto
                img.src = 'Madulta.jpg'
            }else{
                //idoso
                img.src = 'Midosa.jpg'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        
        res.appendChild(img)
        

    }
}