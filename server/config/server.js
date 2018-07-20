
/* requires */
const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const consign = require('consign');

/* app */
server.use(bodyParser.urlencoded({ extended : false }));
server.use(bodyParser.json());

consign()
    .include('./config/firebaseConfig.js')
    .then('./routes')
    .into(server)

module.exports = server;