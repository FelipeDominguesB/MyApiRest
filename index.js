const express = require('express');
const consign = require('consign');

const app = express();


consign().include('routes').into(app);

app.listen(8080, '127.0.0.1', () =>{
    console.log('Servidor rodando');
});