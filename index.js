const express = require('express');
let routesIndex = require('./routes/index');
let routesUsers = require('./routes/users');
const app = express();

app.use(routesIndex);
app.use('/usuarios', routesUsers);


app.listen(8080, '127.0.0.1', () =>{
    console.log('Servidor rodando');
});