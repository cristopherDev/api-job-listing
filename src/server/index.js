const express = require('express');
const server = express();
const cors = require('cors');
const compression = require('compression');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { MGDBURI, config } = require('../db');

mongoose
    .connect(MGDBURI, config)
    .then(() => console.log('mongodb connect'));

const serverRoutes = require('../routes');

server.use(express.json());
server.use(compression());
server.use(cors({
    credentials: true,
    origin: true
}));
server.options('*', cors());
server.use(morgan('combined'));

server.use('/api', serverRoutes);

module.exports = server;
