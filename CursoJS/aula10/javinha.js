var a = window.document.getElementById('area')  
a.addEventListener('click', clicar) //o JS fica esperto se ocorre algum evento
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)
    function clicar()
    {
        a.innerText = "clicou"
        a.style.backgroundColor = "blue"    
    }

    function entrar()
    {
        a.innerText = "entrou"
        a.style.backgroundColor = "orange"
    }

    function sair()
    {
        a.innerText = "saiu"
        a.style.backgroundColor = "red"
    }

