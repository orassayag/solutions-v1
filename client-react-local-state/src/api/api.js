// This file creates an Axios instance that serves all the CRUD operations
// in all the tables in the Firebase database that does not include the
// user-authentication operations that have different paths. Search operations,
// email storing or getting data all used within this Axios instance.

import axios from 'axios';
import settings from '../settings/settings';

// Create the API route instance by Axios.
const api = axios.create({
    baseURL: settings.api_base_url
});

export default api;