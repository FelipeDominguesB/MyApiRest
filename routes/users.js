module.exports = (app) =>{

    app.get('/usuarios', (request, response) =>{
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

app.post('/usuarios', (request, response) =>{
    

    response.json(request.body);
});

};