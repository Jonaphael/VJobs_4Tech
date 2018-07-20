'use strict';

const express = require('express');

const port = 3000;
const server = require('./config/server');

/* app */
server.use('/vjobs', express.static(__dirname + '/app/static'));
server.get('/', async(req, res) => res.redirect('http://localhost:3000/vjobs'));
server.listen( port, () => console.log(`Server listening on port ${ port }`));