let NeDB = require('nedb');
let db = new NeDB({
    filename: 'users.db',
    autoload: true
});

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
    });
    });

    app.post('/usuarios', (request, response) =>{
        
        db.insert(request.body, (err, usuario) =>{
            if(err) {
                console.log(err);
                response.status(400).json({
                    error: err,
                });
            }
            else
            {
                response.status(200).json(usuario);
            }
        });
    });

};