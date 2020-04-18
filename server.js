const constants = require('./frontend/Constants');
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');
//const path = require('path');
const apiRoute = require('./api.route');

// Express
const app = express();

// Helmet protects from attacks
app.use(helmet());

// Body-parser sets req.body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

// API
app.use('/api', apiRoute);

// Main page
app.use(express.static('frontend'));
/*app.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World</h1>');
});*/

// PORT
const port = process.env.PORT || constants.DEFAULT_PORT;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port);
});

