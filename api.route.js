const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const dbConnection = require('./db');

// Test API
router.route('/how-is-today').get((req, res, next) => {
	res.send('great');
});

//MySQL connection
/*var con = mysql.createConnection({
    host: "host",
    user: "user",
    password: "password",
    database: "database"
  });
*/

//Endpoints for front end
router.route('/add_workout').post((req, res) => {
	var workoutObject = req.body;
	/* Example workout structure
		var workout = {
			title: "title of workout",
			desc: "basic description of workout",
			url: "url link to video of workout"
		}	
	*/
	res.status(200);
	return;
});

router.route('/workouts').get((req, res) => {
	res.status(200).send('Workouts Page');
	return;
});

router.route('/workouts/trending').get((req, res) => {
	res.status(200).send('Trending Workouts');
	return;
});

// Fake data for stubs
const userProfile1 = {
	id: 123,
	firstname: 'first',
	lastname: 'last',
	email: 'email1@mail.com',
	profilePic: 'picFilename.png',
	following: [124],
	workouts: [987],
	favorites: [987, 988],
	workoutActivity: 'biometric data?'
};
const userProfile2 = {
	id: 124,
	firstname: 'first2',
	lastname: 'last2',
	email: 'email2@mail.com',
	profilePic: 'picFilename2.png',
	following: [123],
	workouts: [988],
	favorites: [987, 988],
	workoutActivity: 'biometric data?'
};
const userProfiles = [userProfile1, userProfile2];
const workout1 = {
	id: 987,
	userID: 123,
	title: "Power Lifting",
	description: "Achieve max gainz",
	numFavorites: 245,
	numViews: 576,
	rating: 4.5,
	hashtags: ['power lifting', 'max gainz'],
	videoLink: "https://youtube.com/example"
};
const workout2 = {
	id: 988,
	userID: 123,
	title: "Workout2",
	description: "Description2",
	numFavorites: 12,
	numViews: 33,
	rating: 4.2,
	hashtags: ['hashtag1', 'hashtag2'],
	videoLink: "https://youtube.com/example2"
};
const workouts = [workout1, workout2];

router.route('/register').post((req, res) => {
	res.sendStatus(201); // 201 = created
});
router.route('/get-user-profile-list').get((req, res) => {
	res.status(200).json(userProfiles);   // 200 = OK
});

router.route('/get-user-profile/:id').get((req, res) => {
	connection.query('SELECT * FROM user WHERE id = ' + req.params.id, function(err, result){
		if(err){
			res.sendStatus(404);
			throw "[mysql] ERROR - " + err;
		}
	
		console.log("[mysql] Successfully retrieved data for " + result.firstname + " " + result.lastname)

		res.status(200).json(result)
	})
});

router.route('/get-followed-users/:id').get((req, res) => {
	connection.query('SELECT followed_users FROM user WHERE id = ' + req.params.id, function(err, result){
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
				if(err){
					res.sendStatus(404);
					throw "[mysql] ERROR - " + err;
				}
				res.status(200).json(result)
			}
		)
	
	})
});

router.route('/update-followed-users/:id/:tofollow').get((req, res) => {
	connection.query('SELECT followed_users FROM user WHERE id = ' + req.params.id, function(err, result){
		if(err) throw "[mysql] ERROR - " + err;
	
		//TODO: Add a check for if the result contains values
		let temp = JSON.parse(result)
		temp.push(req.params.tofollow)
		temp = JSON.stringify(temp)
	
		connection.query('UPDATE users SET followed_users = ' + temp + ' WHERE id = ' + id, function(err, result){
			if(err){
				res.sendStatus(404);
				throw "[mysql] ERROR - " + err;
			}

			res.status(200)
			console.log("[mysql] Updated user " + req.params.id + "'s followed users!")
		})
	})
});

router.route('/get-followed-workouts/:id').get((req, res) => {
	connection.query('SELECT workout_plans FROM user WHERE id = ' + req.params.id, function(err, result){
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
				if(err){
					res.sendStatus(404);
					throw "[mysql] ERROR - " + err;
				}
				res.status(200).json(result)
			}
		)
	
	})
});

// obj should be stringified JSON
router.route('/update-biometric-data/:id/:obj').get((req, res) => {
	connection.query('SELECT biometric_data FROM user WHERE id = ' + id, function(err, result){
		if(err) throw "[mysql] ERROR - " + err;
	
	
		connection.query('UPDATE users SET biometric_data = ' + req.params.obj + ' WHERE id = ' + req.params.id, function(err, result){
			if(err){
				res.sendStatus(404);
				throw "[mysql] ERROR - " + err;
			}
			console.log("[mysql] Updated user " + req.params.id + "'s biometric data!")
			res.status(200)
		})
	})
});

router.route('/get-trending/:num').get((req, res) => {
	if (req.params.num < 1)
		res.sendStatus(400);    // 400 = bad request

	if (req.params.num >= workouts.length)
		res.status(200).json(workouts);   // 200 = OK
	else
		res.status(200).json(workouts.slice(0, req.params.num));   // 200 = OK
});

//+------------------------\----------------------------------
//|	    Get Favorites      |
//\------------------------/----------------------------------
//	Responds with array of newest workouts from followed users
//------------------------------------------------------------
router.route('/get-favorites/:userid').get((req, res) => {
	// if (req.params.id < 0)
	//     res.sendStatus(400);    // 400 = bad request

	if (req.params.num >= workouts.length)
		res.status(200).json(workouts);   // 200 = OK
	else
		res.status(200).json(workouts.slice(0, req.params.num));   // 200 = OK
});

//+------------------------\----------------------------------
//|	       Get Feed        |
//\------------------------/----------------------------------
//	Responds with array of 'max' newest workouts from followed users
//------------------------------------------------------------
router.route('/get-feed/:userid/:max').get((req, res) => {
	// STUB
	if (req.params.max >= workouts.length)
		res.status(200).json(workouts);   // 200 = OK
	else
		res.status(200).json(workouts.slice(0, req.params.num));   // 200 = OK
});

module.exports = router;