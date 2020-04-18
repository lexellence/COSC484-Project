// Make sure it's production when you commit your changes, or else live page's API calls won't work.
// To test locally, run 'node server.js' (or 'nodemon server.js' for auto-updating the server process) 
// on your local machine and open /frontend/index.html in your browser.
// (if we were using React to build our frontend this could be handled automatically) 
// This changes apiBaseURL below.

const environment = 'production';
// const environment = 'development';

const defaultPort = 3000;
// Where to access the backend, locally or on our hosting site?
let apiBaseURL = '';
if (environment === 'development')
    apiBaseURL = 'http://localhost:' + defaultPort + '/api';
else
    apiBaseURL = 'https://exerfit.herokuapp.com/api';

module.exports = Object.freeze({
    // Used in server.js when we are running server locally for testing
    DEFAULT_PORT: defaultPort,

    // IMPORTANT: Routes are hard-coded into back-end. Changes here must also be changed there.
    ROUTE_HOME: '/',
    ROUTE_VIEW_USERS: '/view-users',
    ROUTE_CREATE_USER: '/create-user',
    ROUTE_EDIT_USER: '/edit-user',  // '/:id'
    ROUTE_PLAY: '/play',

    API_BASE_URL: apiBaseURL,
    API_HOW_IS_TODAY: '/how-is-today',

    API_CREATE_USER: '/create-user',        // (userObj)
    API_GET_USER_LIST: '/get-user-list',
    API_GET_USER: '/get-user',             // + '/:id'
    API_UPDATE_USER: '/update-user',       // + '/:id' (userObj)
    API_DELETE_USER: '/delete-user'        // + '/:id' 
});

