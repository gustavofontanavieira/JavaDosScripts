var nome = window.prompt("Qual é o seu nome?")
    document.write(`Seu nome tem ${nome.length} letras, ele em maiusculo fica: ${nome.toUpperCase()} e em minusculo fica: ${nome.toLowerCase()}`)
    var salario = Number(window.prompt("qual seu salario?"))
    document.write(`Seu sálario é: ${salario.toFixed(2).replace('.', ',')}`)
 