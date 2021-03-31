const express = require('express');
const server = express();
const cors = require('cors');
const compression = require('compression');
const morgan = require('morgan');

const serverAPI = require('../api');

server.use(express.json());
server.use(compression());
server.use(cors());
server.use(morgan('combined'));

server.use('/api', serverAPI);

module.exports = server;
