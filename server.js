const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');
//const path = require('path');
const apiRoute = require('./api.route');

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234qwer',
    database: 'cosc484'
})
connection.connect((err) => {
    if (err) throw err
    console.log("[mysql] Connected successfully")
})

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

// PORT
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port);
});

// SQL

connection.query('CREATE TABLE IF NOT EXISTS user(id INT SIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,'
                                    + 'name VARCHAR(50) NOT NULL,'
                                    + 'password TEXT NOT NULL,'
                                    + 'profile_picture TEXT,'
                                    + 'followed_users JSON, '
                                    + 'average_rating JSON,'
                                    + 'favorites JSON, '
                                    + 'biometric_data JSON)',
                                    function(err, result){
                                        if(err) throw err
                                        console.log("[mysql] User table query successful")
                                    })

connection.query('CREATE TABLE IF NOT EXISTS workouts(id INT SIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,'
                                    + 'title VARCHAR(50) NOT NULL,'
                                    + 'description TEXT NOT NULL,'
                                    + 'total_favorites INT SIGNED,'
                                    + 'total_views BIGINT SIGNED, '
                                    + 'workplans JSON,'
                                    + 'favorites JSON)',
                                    function(err, result){
                                        if(err) throw err
                                        console.log("[mysql] Workout table query successful")
                                    })