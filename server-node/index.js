const environment = process.env.NODE_ENV || 'development';
const config = require(`./config/config.${environment}.json`);
const winston = require('winston');
const express = require('express');
const app = express();
require('./startup/logging')();
require('./startup/routes')(app);

// Listen to the server
const port = process.env.PORT || config.PORT;
module.exports = app.listen(port, () => {
    winston.info(`Listening to port ${port}...`);
    winston.info(`Server on ${environment} environment...`);
});