    /*os operadores de js são:
    + = soma
    - = subtração
    * = multiplicação
    / = divisão real
    % = divisão inteira
    ** = potência

    ! = negação (não)
    && = conjunção
    || = disjunção

    Ternário
    ?
    :
    */
    var media = 5.5
    var resultado = media > 7? "Aprovado" : "Reprovado"
    document.write(resultado);

    var media1 = 7.5
    var result = media1 > 7? "Aprovado" : "Reprovado"
    document.write(result)

    var num = Number(window.prompt("Digite um valor: "))
    var teste = num + 20
    var valor = teste >= 70? "o valor é maior do que esperado" : "O valor é menor do que esperado"
    window.alert(valor)