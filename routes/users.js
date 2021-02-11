let NeDB = require('nedb');
let db = new NeDB({
    filename: 'users.db',
    autoload: true
});

module.exports = (app) =>{

    let route = app.route('/usuarios');

    route.get((request, response) =>{
        db.find({}).sort({name:1}).exec((err, usuarios) =>{
            if(err) {
                
            }
            else
            {
                response.statusCode = 200;
                response.setHeader('Content-type', 'application/json');

                response.json({usuarios});
            }
        });
        
    });

    route.post((request, response) =>{
        
        db.insert(request.body, (err, usuario) =>{
            if(err) {
                app.utils.error.send(err, request, response);
            }
            else
            {
                response.status(200).json(usuario);
            }
        });
    });

    let routeID = app.route('/usuarios/:id');

    routeID.get((req, res) =>{
        db.findOne({_id: req.params.id}).exec((err, usuario) =>{
            if(err)
            {
                app.utils.error.send(err, req, res);
            }
            else
            {
                res.status(200).json(usuario)
            }

        });
    });

    routeID.put((req, res) =>{
        db.update({_id: req.params.id}, req.body, (err) => {
            if(err)
            {
                app.utils.error.send(err, req, res);
            }
            else
            {
                res.status(200).json(Object.assign(req.params, req.body));
            }

        });
    });


};