function contar(){
    var comeco = document.getElementById('cntate')
    var ate = document.getElementById('ate')
    var pular = document.getElementById('pular')
    var dig = document.getElementById('res')

    let começar = Number(comeco.value)
    let ateo = Number(ate.value)
    let pulo = Number(pular.value)


    if(começar == 0 || ateo == 0 || pulo == 0 || começar > ateo){
        window.alert("Os campos não estão válidos, preencha novamente")
    }else{
        dig.innerHTML = "CONTANDO: "
        for(let cont = começar; cont <= ateo; cont += pulo){
        dig.innerHTML += ` ${cont} `
        }
    }
}