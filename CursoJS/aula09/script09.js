//CHAMANDO ATRAVÉS DE TAGS
var p1 = window.document.getElementsByTagName('p')[0]//esse número em [] mostra qual parágrafo que quero, 0 = primeiro p
document.write(p1.innerHTML)//copiou o parágrafo zero e editou, com innerText só copia o texto o HTML pega até mesmo formatações dentro do parágrafo
p1.style.color = "blue"; //muda a cor da fonte do parágrafo


var div = window.document.getElementById('msg'); //getElemntsByName tem o mesmo principio do id
document.write(div.innerText)

//seletor
var d = window.document.querySelector('div#msg'); //classe usa # id usa ponto final .
d.style.color = "blue"