let amigo = {nome: 'José',
     sexo: 'Masculino', 
     peso: 88.4, 
     engordar(p=0){
    console.log('engordou')
    this.peso += p
}}

amigo.engordar(8)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
console.log(typeof amigo)//fala que tipo é a variável