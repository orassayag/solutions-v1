// This file merges all containers to one file to be imported on the site.
// It's imported on the App container, there the routing is configured for each container.

import App from './App/App';
import NotFound from './NotFound/NotFound';
import Home from './Home/Home';
import Authentication from './Authentication/Authentication';
import PhotoPageDetails from './PhotoPageDetails/PhotoPageDetails';

export { App, NotFound, Home, Authentication, PhotoPageDetails };