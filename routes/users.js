const express = require('express');
let routes = express.Router();

routes.get('/', (request, response) =>{
    response.statusCode = 200;
    response.setHeader('Content-type', 'application/json');

    response.json({
        users: [
            {nome: 'Felipe', idade: 19},
            {nome: 'Julia', idade: 19},
            {nome: 'Arthur', idade: 17},
        ]

    })
});

routes.get('/admin', (request, response) =>{
    response.statusCode = 200;
    response.setHeader('Content-type', 'application/json');

    response.json({
        users: [
            {nome: 'Felipe', idade: 19},
        ]

    })
});

module.exports = routes;