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
	+ 'password TEXT NOT NULL,'
	+ 'profile_picture TEXT,'
	+ 'followed_users JSON, '
	+ 'work_plans JSON,'
	+ 'favorites JSON, '
	+ 'biometric_data JSON)',
	function (err, result) {
		if (err) throw err;
		console.log("[mysql] Users table query successful");
	});

connection.query('CREATE TABLE IF NOT EXISTS workouts(id INT SIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,'
	+ 'title VARCHAR(50) NOT NULL,'
	+ 'description TEXT NOT NULL,'
	+ 'total_favorites INT SIGNED,'
	+ 'total_views BIGINT SIGNED, '
	+ 'average_rating JSON)',
	function (err, result) {
		if (err) throw "[mysql] ERROR - " + err;
		console.log("[mysql] Posts table query successful");
	});


// Get a users account
var id = 1;
connection.query('SELECT * FROM user WHERE id = ' + id, function(err, result){
	if(err) throw "[mysql] ERROR - " + err;

	console.log("[mysql] Successfully retrieved data for " + result.firstname + " " + result.lastname)
	//TODO: Return this data through a route
})

// Get a user's followed users
connection.query('SELECT followed_users FROM user WHERE id = ' + id, function(err, result){
	if(err) throw "[mysql] ERROR - " + err;

	//TODO: Add a check for if the result contains values
	let temp = JSON.parse(result)
	let insertValues = []
	temp.map(function(val) { insertValues.push('(' + connection.escape(val) + ')'); });

	// Create a temp table to query against via INNER JOIN
	connection.query('BEGIN;' +
		+ 'CREATE temp_table (id INT NOT NULL PRIMARY KEY);'
		+ 'INSERT INTO temp_table(id) VALUES ' + insertValues.join(', ') + ';'
		+ 'SELECT * FROM users u INNER JOIN temp_table t ON t.id = u.id;'
		+ 'COMMIT;', 
		function(err, result){
			if(err) throw "[mysql] ERROR - " + err;

			//TODO: Return this data through a route
		}
	)

})

// Update a user's followed users
var someValue = 20
connection.query('SELECT followed_users FROM user WHERE id = ' + id, function(err, result){
	if(err) throw "[mysql] ERROR - " + err;

	//TODO: Add a check for if the result contains values
	let temp = JSON.parse(result)
	temp.push(someValue)
	temp = JSON.stringify(temp)

	connection.query('UPDATE users SET followed_users = ' + temp + ' WHERE id = ' + id, function(err, result){
		if(err) throw "[mysql] ERROR - " + err;

		console.log("[mysql] Updated user " + id + "'s followed users!")
	})
})

// Get a user's followed workouts
connection.query('SELECT workout_plans FROM user WHERE id = ' + id, function(err, result){
	if(err) throw "[mysql] ERROR - " + err;

	//TODO: Add a check for if the result contains values
	let temp = JSON.parse(result)
	let insertValues = []
	temp.map(function(val) { insertValues.push('(' + connection.escape(val) + ')'); });

	// Create a temp table to query against via INNER JOIN
	connection.query('BEGIN;' +
		+ 'CREATE temp_table (id INT NOT NULL PRIMARY KEY);'
		+ 'INSERT INTO temp_table(id) VALUES ' + insertValues.join(', ') + ';'
		+ 'SELECT * FROM workouts u INNER JOIN temp_table t ON t.id = u.id;'
		+ 'COMMIT;', 
		function(err, result){
			if(err) throw "[mysql] ERROR - " + err;

			//TODO: Return this data through a route
		}
	)

})

// Update a user's biometric data
connection.query('SELECT biometric_data FROM user WHERE id = ' + id, function(err, result){
	if(err) throw "[mysql] ERROR - " + err;

	//TODO: Add a check for if the result contains values
	var t = {"key": "SOME OBJECT FROM FRONT END"}
	
	t = JSON.stringify(t)

	connection.query('UPDATE users SET biometric_data = ' + t + ' WHERE id = ' + id, function(err, result){
		if(err) throw "[mysql] ERROR - " + err;

		console.log("[mysql] Updated user " + id + "'s followed users!")
	})
})

module.exports = connection;
