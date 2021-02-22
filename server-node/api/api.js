const axios = require('axios');
const environment = process.env.NODE_ENV || 'development';
const config = require(`../config/config.${environment}.json`);

// Get all photos from third party API.
const getPhotosAPI = async (count) => {
    let response, photos = null;
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
    }

    return photos;
}

// Get all photos from external json file.
const getPhotosFile = (count) => {

    const allPhotos = require('../datafile/photos.json');

    let photos = null;
    if (allPhotos && allPhotos.length > 0)
        if (count) {
            photos = allPhotos.slice(0, count);
        } else {
            photos = allPhotos;
        }

    return photos;
};

module.exports.getPhotosAPI = getPhotosAPI;
module.exports.getPhotosFile = getPhotosFile;