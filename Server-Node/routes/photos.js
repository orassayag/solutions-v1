const { parsePhotos } = require('../models/photo');
const { coreGetPhotosAPI, coreGetPhotosFile } = require('../core/photos');
// const { getPhotosAPI } = require('../api/api');
// const { getPhotosFile } = require('../api/api');
const express = require('express');
const router = express.Router();

// Get all photos
const getAllPhotos = async (count) => {
    // Get all the photos from the server.
    let response = null;
    try {
        response = await coreGetPhotosAPI(count);
        //response = await coreGetPhotosFile(count);

    } catch (err) {
        throw Error(err);
    }

    let allPhotos = null;
    if (response) {
        allPhotos = parsePhotos(response);
    }
    return allPhotos;
}

// Get all photos
// http://localhost:3000/api/photos
// http://localhost:3000/api/photos?count=10
router.get('/', async (req, res) => {

    // Return all the photos.
    let count = null;
    if (req.query.count) {
        count = Number(req.query.count);
        if (!count || isNaN(count)) {
            count = null;
        }
    }

    const allPhotos = await getAllPhotos(count);

    return res.status(200).send(allPhotos);
});

// Get specific photo by id and return it.
// http://localhost:3000/api/photos/1
router.get('/:id', async (req, res) => {
    // Validate that the request body is not empty and the request body parameters.
    if (!req) {
        return res.status(400).send('No request object');
    }

    if (!req.params.id) {
        return res.status(400).send('No id parameter');
    }

    // Get all the photos.
    const allPhotos = await getAllPhotos();
    if (!allPhotos) {
        return res.status(400).send('Failed to get all photos');
    }

    const photoId = Number(req.params.id.trim());
    const photo = allPhotos.find(p => p.id === photoId);
    if (!photo) {
        return res.status(404).send(`Photo ${photoId} not found`);
    }

    // Return selected photo.
    return res.status(200).send(photo);
});

module.exports = router;

/* // Update movie and return it

// Create movie and return it.
router.post('/', async (req, res) => {

    //If invalid movie parameters, return 400 Bad Request
    const validateMovieResult = validateRequestMovie(req);
    if (!validateMovieResult.isValid) {
        return res.status(400).send(validateMovieResult.errorMessage);
    }

    // Create new movie.
    const movie = new Movie('Test', 3, 3);

    // Return new movie
    return res.send(movie);
});

router.put('/:id', async (req, res) => {

    //If invalid movie id parameter, return 400 Bad Request
    const validateIdResult = validateRequestId(req);
    if (!validateIdResult.isValid) {
        return res.status(400).send(validateIdResult.errorMessage);
    }

    //If invalid movie parameters, return 400 Bad Request
    const validateMovieResult = validateRequestMovie(req);
    if (!validateMovieResult.isValid) {
        return res.status(400).send(validateMovieResult.errorMessage);
    }

    // Get the genre of the movie by the id
    const genre = await Genre.findById(req.body.genreId);

    // Validate genre exists on the database, if not, return 400 Bad Request
    if (!genre) {
        return res.status(400).send(`Genre not found (id: ${req.body.genreId.trim()}) on the database.`);
    }

    // Update existing movie
    let movie;
    try {
        movie = await Movie.findByIdAndUpdate(req.params.id.trim(), {
            title: req.body.title,
            genre: {
                _id: genre._id,
                name: genre.name
            },
            numberInStock: req.body.numberInStock,
            dailyRentalRate: req.body.dailyRentalRate
        }, {
            new: true
        });
    } catch (err) {
        console.error(`Failed to update the movie (id: ${req.params.id.trim()})`, err);
    }

    // Validate movie saved on the database, if not, return 400 Bad Request
    if (!movie) {
        return res.status(400).send(`Failed to update the movie (id: ${req.params.id.trim()}) on the database.`);
    }

    // Return updated movie
    return res.send(movie);
}); */

/* // Delete movie and return it
router.delete('/:id', async (req, res) => {

    //If invalid movie id parameter, return 400 Bad Request
    const validateIdResult = validateRequestId(req);
    if (!validateIdResult.isValid) {
        return res.status(400).send(validateIdResult.errorMessage);
    }

    // Delete movie
    let movie;
    try {
        movie = await Movie.findByIdAndRemove(req.params.id.trim());
    } catch (err) {
        console.error(`Failed to delete the movie (id: ${req.params.id.trim()})`, err);
    }

    // Validate movie deleted from the database, if not, return 400 Bad Request
    if (!movie) {
        return res.status(400).send(`Failed to delete the movie (id: ${req.params.id.trim()}) from the database.`);
    }

    // Return deleted movie
    return res.send(movie);
});

// Validate that the request id is not empty and the request id parameter
const validateRequestId = (req) => {
    if (!req) {
        return new ValidateResult(false, 'No request object.');
    }

    // Get final validation result from model validator function
    return validateMovieId(req.params.id);
};

// Validate that the request body is not empty and the request body parameters
const validateRequestMovie = (req) => {
    if (!req) {
        return new ValidateResult(false, 'No request object.');
    }

    // Get final validation result from model validator function
    return validateMovie({
        title: req.body.title,
        genreId: req.body.genreId,
        numberInStock: req.body.numberInStock,
        dailyRentalRate: req.body.dailyRentalRate
    });
}; */