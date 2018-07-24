
/* requires */
const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const consign = require('consign');
const cors = require('cors')

/* app */
server.use(bodyParser.urlencoded({ extended : false }));
server.use(bodyParser.json());
server.use(cors({ origin : '*'}))

consign()
    .include('./config/firebaseConfig.js')
    .then('./routes')
    .into(server)

module.exports = server;