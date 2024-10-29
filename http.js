// Importanto biblioteca HTTP
const http = require('http');

// Definir porta do servidor 
const PORT = 3000;

// Criar servidor 
const server = http.createServer(function(req, res) {

 // Cabeçalho de Resposta
 res.writeHead(200, {'Content-Type': 'text/plain'});

 res.end('Olá Mundo! Este é um servidor HTTP simples');

});

server.listen(PORT, function() {
    console.log('Servidor rodando em http://localhost:' + PORT);
})

