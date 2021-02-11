const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

consign().include('routes').include('utils').into(app);

app.listen(8080, '127.0.0.1', () =>{
    console.log('Servidor rodando');
});