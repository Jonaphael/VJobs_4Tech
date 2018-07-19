'use strict';

const express = require('express');

const port = 3000;
const server = require('./config/server');

/* app */
server.use('/vjobs', express.static(__dirname + '/app/static'));
server.listen( port, () => console.log(`Server listening on port ${ port }`));