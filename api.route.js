const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const db = require('./db');

// Middleware that rejects request with a 401 if they aren't logged in
function requireAuth(req, res, next) {
	if (!req.uid) {
		res.sendStatus(401);
		return;
	}
	next();
}

// myUsername: responds with { username: } object, or 
//		status 401 if not authenticated
router.route('/myUsername'), requireAuth, (req, res) => {
	const uid = req.uid;
	db.query('SELECT username FROM users WHERE id = ?', [uid],
		(error, results, fields) => {
			if (results.length > 0)
				res.status(401).json({ username: results[0].username });
			next();
		});
};

// register: responds with status 
//		403 if username taken, 
//		500 on server error, or 
//		201 on successful user creation
router.route('/register/:firstname/:lastname/:username/:email/:password').post((req, res) => {
	// Is the username taken?
	let usernameQuery = db.query('SELECT username FROM users WHERE username = ?', [req.params.username],
		(error, results, fields) => {
			if (error) {
				res.sendStatus(500);
				return;
			}

			// If username taken, respond with error
			if (results.length > 0) {
				res.status(403).send('Username is already taken');
				return;
			}

			// Otherwise create new user
			db.query('INSERT INTO users (firstname, lastname, username, email, password) '
				+ 'VALUES (' + db.escape(req.params.firstname) + ', ' + db.escape(req.params.lastname) + ', '
				+ db.escape(req.params.username) + ', ' + db.escape(req.params.email) + ', ' + db.escape(req.params.password) + ')',
				function (err, result) {
					if (err) {
						res.sendStatus(500);
						throw "[mysql] ERROR - " + err;
					}

					console.log("[mysql] Successfully added user!");
					res.sendStatus(201);
				});
		});
});

router.route('/delete-my-account').post(requireAuth, (req, res) => {
	const uid = req.uid;
	db.query("DELETE FROM users WHERE id = " + uid, function (err, result) {
		if (err) {
			res.sendStatus(400);
			throw "[mysql] ERROR - " + err;
		}
		else res.sendStatus(201);// 201 = created
	});
});

const PROFILE_FIELDS = 'firstname, lastname, username, profile_picture, bio';
// Get [{ PROFILE_FIELDS }, ...]
router.route('/get-profile-list').get((req, res) => {
	db.query('SELECT ' + PROFILE_FIELDS + ' FROM users LIMIT 25', function (err, result) {
		if (err) { }

		console.log("[mysql] Successfully retrieved data for user profile list!");
		res.status(200).json(result);
	});
});

// Get { PROFILE_FIELDS } from :username
router.route('/get-profile/:username').get(requireAuth, (req, res) => {
	const username = req.params.username;
	db.query('SELECT ' + PROFILE_FIELDS + ' FROM users WHERE username = ' + username, function (err, result) {
		if (err) {
			res.sendStatus(500);
			throw "[mysql] ERROR - " + err;
		}

		console.log("[mysql] Successfully retrieved data for " + username);

		res.status(200).json(result);
	});
});
// Get { PROFILE_FIELDS } for logged in user
router.route('/get-my-profile').get(requireAuth, (req, res) => {
	const uid = req.uid;
	db.query('SELECT ' + PROFILE_FIELDS + ' FROM users WHERE id = ' + uid, function (err, result) {
		if (err) {
			res.sendStatus(500);
			throw "[mysql] ERROR - " + err;
		}

		console.log("[mysql] Successfully retrieved data for " + uid);

		res.status(200).json(result);
	});
});

router.route('/get-followed-users/:username').get(requireAuth, (req, res) => {
	const username = req.params.username;
	db.query('SELECT followed_users FROM users WHERE username = ' + username, function (err, result) {
		if (err) throw "[mysql] ERROR - " + err;

		//TODO: Add a check for if the result contains values
		let temp = JSON.parse(result);
		let insertValues = [];
		temp.map(function (val) { insertValues.push('(' + db.escape(val) + ')'); });

		// Create a temp table to query against via INNER JOIN
		db.query('BEGIN;' +
			+ 'CREATE temp_table (id INT NOT NULL PRIMARY KEY);'
			+ 'INSERT INTO temp_table(id) VALUES (' + insertValues.join(', ') + ');'
			+ 'SELECT * FROM users u INNER JOIN temp_table t ON t.id = u.id;'
			+ 'COMMIT;',
			function (err, result) {
				if (err) {
					res.sendStatus(500);
					throw "[mysql] ERROR - " + err;
				}
				res.status(200).json(result);
			}
		);

	});
});

router.route('/update-followed-users/:username/:tofollow').post((req, res) => {
	const username = req.params.username;
	db.query('SELECT followed_users FROM users WHERE username = ' + username, function (err, result) {
		if (err) throw "[mysql] ERROR - " + err;

		//TODO: Add a check for if the result contains values
		let temp = JSON.parse(result);
		temp.push(req.params.tofollow);
		temp = JSON.stringify(temp);

		db.query('UPDATE users SET followed_users = ' + temp + ' WHERE username = ' + username, function (err, result) {
			if (err) {
				res.sendStatus(500);
				throw "[mysql] ERROR - " + err;
			}

			res.status(200);
			console.log("[mysql] Updated user " + username + "'s followed users!");
		});
	});
});

// Get :num top trending workouts
router.route('/get-trending/:num').get((req, res) => {
	db.query('SELECT * FROM posts LIMIT 25 ORDER BY total_views ASC', function (err, result) {
		if (err) {
			res.sendStatus(500);
			throw "[mysql] ERROR - " + err;
		}

		console.log("[mysql] Successfully retrieved data for workouts list!");
		res.status(200).json(result);
	});
});

router.route('/get-favorites/:id').get((req, res) => {
	db.query('SELECT fav_posts_id FROM users WHERE id = ' + req.params.id, function (err, result) {
		if (err) throw "[mysql] ERROR - " + err;

		//TODO: Add a check for if the result contains values
		let temp = JSON.parse(result);
		let insertValues = [];
		temp.map(function (val) { insertValues.push('(' + db.escape(val) + ')'); });

		// Create a temp table to query against via INNER JOIN
		db.query('BEGIN;' +
			+ 'CREATE temp_table (id INT NOT NULL PRIMARY KEY);'
			+ 'INSERT INTO temp_table(id) VALUES (' + insertValues.join(', ') + ');'
			+ 'SELECT * FROM posts u INNER JOIN temp_table t ON t.id = u.id;'
			+ 'COMMIT;',
			function (err, result) {
				if (err) {
					res.sendStatus(500);
					throw "[mysql] ERROR - " + err;
				}
				res.status(200).json(result);
			}
		);
	});
});

router.route('/add-favorite/:id/:fav_post_id').post((req, res) => {
	db.query("SELECT fav_posts_id FROM users WHERE id = " + req.params.id, function (err, result) {
		if (err) throw "[mysql] ERROR - " + err;

		let temp = JSON.parse(result);
		temp.push(req.params.fav_post_id);
		temp = JSON.stringify(temp);

		db.query(
			"UPDATE users SET fav_posts_id = " + temp + "WHERE id = " + req.params.fav_post_id, function (err, result) {
				if (err) {
					res.sendStatus(404);
					throw "[mysql] ERROR - " + err;
				}
				console.log("[mysql] Added " + req.params.fav_post_id + " to favorites!");
				res.status(200);
			});
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

	db.query('SELECT followed_users FROM users WHERE id = ' + req.params.id, function (err, result) {
		if (err) throw "[mysql] ERROR - " + err;

		//TODO: Add a check for if the result contains values
		let temp = JSON.parse(result);
		let insertValues = [];
		temp.map(function (val) { insertValues.push('(' + db.escape(val) + ')'); });

		// Create a temp table to query against via INNER JOIN
		db.query('BEGIN;' +
			+ 'CREATE temp_table (id INT NOT NULL PRIMARY KEY);'
			+ 'INSERT INTO temp_table(id) VALUES (' + insertValues.join(', ') + ');'
			+ 'SELECT * FROM users u INNER JOIN temp_table t ON t.id = u.id;'
			+ 'COMMIT;',
			function (err, result) {
				if (err) {
					res.sendStatus(500);
					throw "[mysql] ERROR - " + err;
				}

				let followed = JSON.parse(result);
				insertValues = [];
				followed.map(function (val) { insertValues.push('(' + db.escape(val) + ')'); });

				db.query('BEGIN;' +
					+ 'CREATE temp_table (id INT NOT NULL PRIMARY KEY);'
					+ 'INSERT INTO temp_table(id) VALUES (' + insertValues.join(', ') + ');'
					+ 'SELECT * FROM posts u INNER JOIN temp_table t ON t.id = u.id LIMIT ' + req.params.max + ';'
					+ 'COMMIT;',
					function (err, result) {
						if (err) {
							res.sendStatus(500);
							throw "[mysql] ERROR - " + err;
						}
						res.status(200).json(result);
					}
				);
			}
		);
	});
});

module.exports = router;