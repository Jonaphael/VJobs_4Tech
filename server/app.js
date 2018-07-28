'use strict';

const express = require('express');

const port = process.env.PORT || 8080;
const server = require('./config/server');

/* app */
server.use('/vjobs', express.static(__dirname + '/app/static'));
server.get('/', async(req, res) => res.redirect(`https://vjobs-joil.herokuapp.com/vjobs`));
server.listen( port, () => console.log(`Server listening on port ${ port }`));