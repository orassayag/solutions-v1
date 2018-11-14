const express = require('express');
const cors = require('cors');
const photos = require('../routes/photos');
const error = require('../middleware/error');

// Define all routes of the API and error handling middleware.
module.exports = (app) => {

    // Cors.
    app.use(cors());
    app.options('*', cors());

    // Routes.
    app.use(express.json());
    app.use('/api/photos', photos);

    // Error handling middleware.
    app.use(error);
};