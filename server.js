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

// PORT
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
	console.log('Connected to port ' + port);
});

