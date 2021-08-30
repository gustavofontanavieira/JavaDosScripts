let num = [5, 8, 2, 9, 3]
num.push(1)//adiciona o valor 1 na ultima posição
console.log(`vetor ${num}`)
console.log(`vetor ${num.length}`)//mostra quantos arrays tem/ comprimento do vetor
//console.log(`vetor ${num.sort()}`)//coloca em ordem crescente

let valores = [8, 1, 7, 4, 2, 9]

//for(let pos = 0; pos < valores.length; pos++){
    //console.log(valores[pos])
//}

for(let pos in valores){ //para cada pos em valores repetir console.log
    console.log(valores[pos])
}
let posicao = num.indexOf(2)//mostra em qual posição está o valor 2, caso não exista o array com elemento 2 ou número apontado o JS retorna -1

console.log(`o valor 2 está na posição ${posicao}`)