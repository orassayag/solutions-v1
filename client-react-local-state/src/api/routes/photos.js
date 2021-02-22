import api from '../api';

// Handle the call to the API to preform get all the photos.
export const getAllPhotos = (count) => {
    return new Promise((resolve, reject) => {
        try {
            api.get(`photos?count=${count}`).then((response) => {
                resolve(response.data);

            }).catch((error) => {
                console.log(error);
                reject(error);
            });

        } catch (error) {
            reject(error);
        }
    });
};

// Handle the call to the API to preform get single photo by id.
export const getPhotoById = (photoId) => {
    return new Promise((resolve, reject) => {
        try {
            api.get(`photos/${photoId}`).then((response) => {
                resolve(response.data);

            }).catch((error) => {
                console.log(error);
                reject(error);
            });

        } catch (error) {
            reject(error);
        }
    });
};