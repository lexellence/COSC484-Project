const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const dbConnection = require('./db');

// Test API
router.route('/how-is-today').get((req, res, next) => {
	res.send('great');
});

// Fake data for stubs
const userProfiles = [
	userProfile1 = {
		id: 123,
		firstname: 'first',
		lastname: 'last',
		username: 'testuser1',
		email: 'email1@mail.com',
		password: 'password',
		profile_picture: 'picFilename.png',
		bio: 'I am new to this!',
		following: 124,
		followers: 200,
		posts_id: 987,
		fav_posts_id: [987, 988],
	},
	userProfile2 = {
		id: 124,
		firstname: 'first2',
		lastname: 'last2',
		username: 'testuser2',
		email: 'email2@mail.com',
		password: 'password',
		profile_picture: 'picFilename2.png',
		bio: 'Working out is lyf',
		following: 123,
		followers: 120,
		posts_id: 988,
		fav_posts_id: [987, 988],
	}
]

const posts = [
	post1 = {
		id: 987,
		user_id: 123,
		title: "Power Lifting",
		body: "Achieve max gainz",
		total_favorites: 245,
		total_views: 576,
		hashtags: ['power lifting', 'max gainz'],
		video_link: "https://youtube.com/example"
	},
	post2 = {
		id: 988,
		user_id: 123,
		title: "Workout2",
		description: "Description2",
		total_favorites: 12,
		total_views: 33,
		hashtags: ['hashtag1', 'hashtag2'],
		video_link: "https://youtube.com/example2"
	}
]

router.route('/register/:firstname/:lastname/:email/:password').post((req, res) => {
	connection.query('INSERT INTO users (firstname, lastname, email, password) '
	+ 'VALUES ' + connection.escape(req.params.firstname) + ', ' + connection.escape(req.params.lastname) + ', ' 
	+ connection.escape(req.params.email) + connection.escape(req.params.password), 
	function(err, result){
		if(err){
			res.sendStatus(500);
			throw "[mysql] ERROR - " + err;
		}
	
		console.log("[mysql] Successfully added user!")
		res.status(201)
	})
});

router.route('/delete-account/:id').post((req, res) => {
	connection.query("DELETE FROM users WHERE id = " + req.params.id, function (err, result) {
		if (err){ 
		res.sendStatus(400);
		throw "[mysql] ERROR - " + err;
		}else res.sendStatus(201);// 201 = created
	  });
});

router.route('/get-user-profile-list').get((req, res) => {
	connection.query('SELECT * FROM users LIMIT 25', function(err, result){
		if(err){}
		
		console.log("[mysql] Successfully retrieved data for user profile list!")
		res.status(200).json(result);
	})
});

router.route('/get-user-profile/:id').get((req, res) => {
	connection.query('SELECT * FROM users WHERE id = ' + req.params.id, function(err, result){
		if(err){
			res.sendStatus(500);
			throw "[mysql] ERROR - " + err;
		}
	
		console.log("[mysql] Successfully retrieved data for " + req.params.id)

		res.status(200).json(result)
	})
});

router.route('/get-followed-users/:id').get((req, res) => {
	connection.query('SELECT followed_users FROM users WHERE id = ' + req.params.id, function(err, result){
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
					res.sendStatus(500);
					throw "[mysql] ERROR - " + err;
				}
				res.status(200).json(result)
			}
		)
	
	})
});

router.route('/update-followed-users/:id/:tofollow').post((req, res) => {
	connection.query('SELECT followed_users FROM users WHERE id = ' + req.params.id, function(err, result){
		if(err) throw "[mysql] ERROR - " + err;
	
		//TODO: Add a check for if the result contains values
		let temp = JSON.parse(result)
		temp.push(req.params.tofollow)
		temp = JSON.stringify(temp)
	
		connection.query('UPDATE users SET followed_users = ' + temp + ' WHERE id = ' + req.params.id, function(err, result){
			if(err){
				res.sendStatus(500);
				throw "[mysql] ERROR - " + err;
			}

			res.status(200)
			console.log("[mysql] Updated user " + req.params.id + "'s followed users!")
		})
	})
});

// obj should be stringified JSON
// *** NO LONGER USING BIOMETRIC DATA ***
router.route('/update-biometric-data/:id/:obj').post((req, res) => {
	connection.query('SELECT biometric_data FROM user WHERE id = ' + req.params.id, function(err, result){
		if(err) throw "[mysql] ERROR - " + err;

		connection.query('UPDATE user SET biometric_data = ' + req.params.obj + ' WHERE id = ' + req.params.id, 
		function(err, result){
			if(err){
				res.sendStatus(500);
				throw "[mysql] ERROR - " + err;
			}
			console.log("[mysql] Updated user " + req.params.id + "'s biometric data!")
			res.status(200)
		})
	})
});

router.route('/get-trending/:num').get((req, res) => {
	connection.query('SELECT * FROM posts LIMIT 25 ORDER BY total_views ASC', function(err, result){
		if(err){
			res.sendStatus(500);
			throw "[mysql] ERROR - " + err;
		}
	
		console.log("[mysql] Successfully retrieved data for workouts list!")
		res.status(200).json(result);
	})
});

router.route('/get-favorites/:id').get((req, res) => {
	connection.query('SELECT fav_posts_id FROM users WHERE id = ' + req.params.id, function(err, result){
		if(err) throw "[mysql] ERROR - " + err;
	
		//TODO: Add a check for if the result contains values
		let temp = JSON.parse(result)
		let insertValues = []
		temp.map(function(val) { insertValues.push('(' + connection.escape(val) + ')'); });
	
		// Create a temp table to query against via INNER JOIN
		connection.query('BEGIN;' +
			+ 'CREATE temp_table (id INT NOT NULL PRIMARY KEY);'
			+ 'INSERT INTO temp_table(id) VALUES ' + insertValues.join(', ') + ';'
			+ 'SELECT * FROM posts u INNER JOIN temp_table t ON t.id = u.id;'
			+ 'COMMIT;', 
			function(err, result){
				if(err){
					res.sendStatus(500);
					throw "[mysql] ERROR - " + err;
				}
				res.status(200).json(result)
			}
		)
	})
});

router.route('/add-favorite/:id/:id').post((req, res) => {
	connection.query("SELECT fav_posts_id FROM users WHERE id = " + req.params.id, function (err, result) {
		if (err) throw "[mysql] ERROR - " + err;
	  
		let temp = JSON.parse(result);
		temp.push(req.params.workoutid);
		temp = JSON.stringify(temp);
	  
		connection.query(
		  "UPDATE users SET fav_posts_id = " + temp + "WHERE id = " + id,function (err, result) {
			if(err){
				res.sendStatus(404);
				throw "[mysql] ERROR - " + err;
			}
			console.log("[mysql] Added " + req.params.workoutid + " to favorites!")
			res.status(200)
		})
	  });
});

// router.route('/add_post').post((req, res) => {
// 	var workoutObject = req.body;
// 	/* Example workout structure
// 		var workout = {
// 			title: "title of workout",
// 			desc: "basic description of workout",
// 			url: "url link to video of workout"
// 		}	
// 	*/
// 	res.status(200);
// 	return;
// });

// router.route('/posts').get((req, res) => {
// 	res.status(200).send('Feed');
// 	return;
// });

// router.route('/posts/trending').get((req, res) => {
// 	res.status(200).send('Trending Workouts');
// 	return;
// });

router.route('/get-feed/:user_id/:max').get((req, res) => {

	connection.query('SELECT followed_users FROM users WHERE id = ' + req.params.id, function(err, result){
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
					res.sendStatus(500);
					throw "[mysql] ERROR - " + err;
				}

				let followed = JSON.parse(result)
				insertValues = []
				followed.map(function(val) { insertValues.push('(' + connection.escape(val) + ')'); });

				connection.query('BEGIN;' +
					+ 'CREATE temp_table (id INT NOT NULL PRIMARY KEY);'
					+ 'INSERT INTO temp_table(id) VALUES ' + insertValues.join(', ') + ';'
					+ 'SELECT * FROM posts u INNER JOIN temp_table t ON t.id = u.id LIMIT ' + req.params.max + ';'
					+ 'COMMIT;',
					function(err, result){
						if(err){
							res.sendStatus(500);
							throw "[mysql] ERROR - " + err;
						}
						res.status(200).json(result)
					}
				)
			}
		)
	})
});

module.exports = router;