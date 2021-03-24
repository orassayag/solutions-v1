const { ValidateResult } = require('../helpers/validations');

class Photo {
    constructor(photo) {
        this.albumId = photo.albumId;
        this.id = photo.id;
        this.title = photo.title;
        this.url = photo.url;
        this.thumbnailUrl = photo.thumbnailUrl;
    }

    printPhoto() {
        console.log(`The Photo is: ${this.title}`);
    }
}

// Validate the photo parameters.
const validatePhoto = (photo) => {

    if (!photo) {
        return new ValidateResult(false, 'Photo object is required.');
    }

    // Validate albumId.
    if (!photo.albumId) {
        return new ValidateResult(false, 'Parameter albumId is required.');
    }

    const albumId = Number(photo.albumId);
    if (!albumId) {
        return new ValidateResult(false, 'Invalid parameter albumId (Not a number).');
    }

    // Validate Id.
    if (!photo.id) {
        return new ValidateResult(false, 'Parameter Id is required.');
    }

    const id = Number(photo.id);
    if (!id) {
        return new ValidateResult(false, 'Invalid parameter Id (Not a number).');
    }

    // Validate title.
    if (!photo.title) {
        return new ValidateResult(false, 'Parameter title is required.');
    }

    if (photo.title.length < 5 || photo.title.length > 255) {
        return new ValidateResult(false, 'Invalid parameter title (Must be at least 5 and maximum 255 characters length).');
    }

    // Validate URL.
    if (!photo.url) {
        return new ValidateResult(false, 'Parameter url is required.');
    }

    // Validate thumbnailUrl.
    if (!photo.thumbnailUrl) {
        return new ValidateResult(false, 'Parameter thumbnailUrl is required.');
    }

    return new ValidateResult(true, null);
};

// This function parses all photos.
const parsePhotos = (photos) => {

    // Validate photos exist.
    if (!photos) {
        throw Error('No photos array passed.');
    }

    // Validate is that photos are an array.
    if (!Array.isArray(photos)) {
        throw Error('Object passed is not an array.');
    }

    // Validate array not empty.
    if (photos.length <= 0) {
        throw Error('Empty photos array.');
    }

    const photosArray = photos.filter(p => {
        const validateResult = validatePhoto(p);
        if (!validateResult.isValid) {
            return false;
        }
        return true;
    }).map(t => {
        return new Photo({
            albumId: t.albumId,
            id: t.id,
            title: t.title,
            url: t.url,
            thumbnailUrl: t.thumbnailUrl
        })
    });

    return photosArray;
};

module.exports.Photo = Photo;
module.exports.parsePhotos = parsePhotos;