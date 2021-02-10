const express = require('express');

const app = express();


app.get('/', (request, response) =>{
    response.statusCode = 200;
    response.setHeader('Content-type', 'text/html');
    response.end('<h1>Ola</h1>');  
    console.log('url: ', request.url);
    console.log('metodo: ', request.method);
});

app.post('/', (request, response) =>{
    response.statusCode = 200;
    response.setHeader('Content-type', 'text/html');
    response.end('<h1>Tchau</h1>');  
    console.log('url: ', request.url);
    console.log('metodo: ', request.method);
});

app.listen(8080, '127.0.0.1', () =>{
    console.log('Servidor rodando');
});