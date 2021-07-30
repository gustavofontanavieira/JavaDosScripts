var nome = window.prompt('Qual teu nome meu mano?');//pede pro usuário escrever algo que será salvo em uma váriavel
window.alert("bem vindo " +nome)

var n1 = Number.parseFloat(window.prompt("Digite o primeiro valor que será somado: "));
var n2 = Number(window.prompt("Digite o segundo valor que será somado"));
var resultado = (n1 + n2);
window.alert(`O resultado da soma é: ${resultado}`) //o código `` com a var dentro de ${} se chamam template string pra chamar a var no meio da mensagem
