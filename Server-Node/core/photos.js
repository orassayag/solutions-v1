const { getPhotosAPI, getPhotosFile } = require('../api/api');
const { CacheService } = require('../helpers/CacheService');

const ttl = 60 * 60 * 1; // cache for 1 Hour
const cache = new CacheService(ttl); // Create a new cache service instance

const coreGetPhotosAPI = (count) => {
    return cache.get('photos', getPhotosAPI.bind(count))
    .then((result) => {
      return result;
    }).catch(err => {
        throw Error(err);
    });
};

const coreGetPhotosFile = (count) => {
    return cache.get('photos', getPhotosFile.bind(count))
    .then((result) => {
      return result;
    }).catch(err => {
        throw Error(err);
    });
};

module.exports = {
    coreGetPhotosAPI: coreGetPhotosAPI,
    coreGetPhotosFile: coreGetPhotosFile
};