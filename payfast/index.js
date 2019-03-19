//chamando a função express
var app = require('./config/config-express')();

//setando a porta que o servidor irá rodar, e mostrando uma mensagem na função callback
app.listen(3000, function(){
    console.log("Servidor rodando!");
});

