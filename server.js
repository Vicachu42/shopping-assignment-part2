const express = require('express');
const fs = require('fs');

const app = express();
const port = 8000;

const routes = require('./routes');
app.use('/api', routes);

app.use(express.static('public'));

app.use((request, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', 'http://192.168.1.237:5500');
});

app.listen(port);