const axios = require('axios');
const fs = require('fs');
const environment = process.env.NODE_ENV || 'development';
const config = require(`../config/config.${environment}.json`);
let photos = require('../data/photos');

// Get all photos from third party API.
const getPhotosAPI = async (count) => {
    let response = null;

    if (photos && photos.length > 0) {
        return photos;
    }

    // Get the photos from the server.
    try {
        response = await axios.get(config.URL);
    } catch (err) {
        throw Error('Failed to get photos');
    }

    // Check if the data exists.
    if (response && response.data) {

        if (count) {
            photos = response.data.slice(0, count);
        } else {
            photos = response.data;
        }

        // Clear cache data after 10 seconds.
        setTimeout(() => {
            photos = null;
        }, 10000);
    }

    return photos;
}

// Get all photos from external json file.
const getPhotosFile = (count) => {

    if (photos && photos.length > 0) {
        return photos;
    }

    const allPhotos = require('../datafile/photos.json');

    if (allPhotos && allPhotos.length > 0)
        if (count) {
            photos = allPhotos.slice(0, count);
        } else {
            photos = allPhotos;
        }

    // Clear cache data after 10 seconds.
    setTimeout(() => {
        photos = null;
    }, 10000);

    return photos;
};

module.exports.getPhotosAPI = getPhotosAPI;
module.exports.getPhotosFile = getPhotosFile;