// Import .env file into process.env (mysql connection string, or other local variables that will not be committed to version control)
require('dotenv').config();

const mysql = require('mysql');
const connection = mysql.createConnection(process.env.JAWSDB_URL);

connection.connect((err) => {
	if (err)
		throw err;
	console.log("[mysql] Connected successfully");
});

// Make sure SQL tables exist
connection.query('CREATE TABLE IF NOT EXISTS user(id INT SIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,'
	+ 'firstname VARCHAR(50) NOT NULL,'
	+ 'lastname VARCHAR(50) NOT NULL,'
	+ 'password VARCHAR(50) NOT NULL,'
	+ 'profile_picture TEXT,'
	+ 'followed_users JSON, '
	+ 'work_plans JSON,'
	+ 'favorites JSON, '
	+ 'biometric_data JSON)',
	function (err, result) {
		if (err) throw err;
		console.log("[mysql] User table query successful");
	});
connection.query('CREATE TABLE IF NOT EXISTS workouts(id INT SIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,'
	+ 'title VARCHAR(50) NOT NULL,'
	+ 'description TEXT NOT NULL,'
	+ 'total_favorites INT SIGNED,'
	+ 'total_views BIGINT SIGNED, '
	+ 'average_rating JSON)',
	function (err, result) {
		if (err) throw err;
		console.log("[mysql] Workout table query successful");
	});

module.exports = connection;