// Make sure it's production when you commit your changes, or else live page's API calls won't work.
// To test locally, run 'node server.js' (or 'nodemon server.js' for auto-updating the server process) 
// on your local machine and open /frontend/index.html in your browser.
// (if we were using React to build our frontend this could be handled automatically) 
// This changes apiBaseURL below.

// const environment = 'production';
const environment = 'development';

// Where to access the backend, locally or on our hosting site?
let apiBaseURL = '';
if (environment === 'development')
    apiBaseURL = 'http://localhost:3000/api';
else
    apiBaseURL = 'https://exerfit.herokuapp.com/api';

// Used in server.js when we are running server locally for testing

export const API_BASE_URL = apiBaseURL, ;
export const API_HOW_IS_TODAY = '/how-is-today', ;

export const API_CREATE_USER = '/create-user', ;        // (userObj)
export const API_GET_USER_LIST = '/get-user-list', ;
export const API_GET_USER = '/get-user', ;             // + '/:id'
export const API_UPDATE_USER = '/update-user', ;       // + '/:id' (userObj)
export const API_DELETE_USER = '/delete-user';        // + '/:id' 

/*export {
    DEFAULT_PORT,
    API_BASE_URL,
    API_HOW_IS_TODAY,
    API_CREATE_USER,
    API_GET_USER_LIST,
    API_GET_USER,
    API_UPDATE_USER,
    API_DELETE_USER
};*/

