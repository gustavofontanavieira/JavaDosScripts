const express = require('express');
const app = express();

//criando a rota principal da aplicação
//chama a função de request e response
app.get('/', function(req, res){
    res.sendFile(__dirname + '/HTML/index.html');//sendFile para enviar arquivo, que no caso é o HTML, mas pra apontar o arquivo precisa da variavel __dirname
    //essa variavel aponta o diretorio raiz da aplicação até o Disco Local
});

//criando outra rota no caso,  sobre
app.get('/sobre', function(req, res){
    res.sendFile(__dirname + "/HTML/sobre.html")
});

//criando outra rota
app.get('/contato', function(req, res){
    res.sendFile(__dirname+'/HTML/contato.html')
}); 

//parametros
//quando se tem o /:parametro, após esses dois pontos tem que passar um parametro
app.get('/ola/:nome/:cargo/:cor', function(req, res){
   // res.send("Olá" + req.params.nome);//responde o parametro passado na url, assim: {"nome":"Pedro"}




   //res.send("<h1>Olá " + req.params.nome + "seja bem-vindo</h1>");//envia um olá e o nome passado, mas é necessário apontar o req.params.nome
   //res.send("<h2>Seu cargo é: " req.params.cargo + " </h2>");
   //res.send("<h3>Sua cor favorita é: " +req.params.cor + " </h3>")
   //SE EU FIZER ASSIM DÁ ERRO, POIS SÓ PÓDE SER UTILIZADO UM SEND POR GET
   res.send("<h1>Olá " + req.params.nome + " seja bem-vindo</h1>"+"<h2>Seu cargo é: " + req.params.cargo + " </h2>"+"<h3>Sua cor favorita é: " + req.params.cor + " </h3>")

})

app.listen(8080, function(){
    console.log('servidor rodando na URL: https//localhost:8080')

})

//app.listen obrigatóriamente tem que fica na ultima linha