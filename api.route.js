const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const db = require('./db');

// myUsername: responds with { username: } object, or status 401 if not authenticated
router.route('/myUsername'), (req, res) => {
	const uid = req.uid;
	if (!uid) {
		res.sendStatus(401);
		return;
	}
	db.query('SELECT username FROM users WHERE id = ?', [uid],
		(error, results, fields) => {
			if (results.length > 0)
				res.status(200).json({ username: results[0].username });
			next();
		});
};

router.route('/register/:firstname/:lastname/:username/:email/:password').post((req, res) => {
	db.query('INSERT INTO users (firstname, lastname, username, email, password) '
		+ 'VALUES ' + db.escape(req.params.firstname) + ', ' + db.escape(req.params.lastname) + ', '
		+ db.escape(req.params.username) + ', ' + db.escape(req.params.email) + ', ' + db.escape(req.params.password),
		function (err, result) {
			if (err) {
				res.sendStatus(500);
				throw "[mysql] ERROR - " + err;
			}

			console.log("[mysql] Successfully added user!");
			res.sendStatus(201);
		});
});

router.route('/delete-account/:id').post((req, res) => {
	db.query("DELETE FROM users WHERE id = " + req.params.id, function (err, result) {
		if (err) {
			res.sendStatus(400);
			throw "[mysql] ERROR - " + err;
		} else res.sendStatus(201);// 201 = created
	});
});

router.route('/get-user-profile-list').get((req, res) => {
	db.query('SELECT * FROM users LIMIT 25', function (err, result) {
		if (err) { }

		console.log("[mysql] Successfully retrieved data for user profile list!");
		res.status(200).json(result);
	});
});

router.route('/get-profile').get((req, res) => {
	const uid = req.uid;
	if (!uid) {
		res.sendStatus(401);
		return;
	}
	const profileFields = 'firstname, lastname, username, email, profile_picture, bio';
	db.query('SELECT ' + profileFields + ' FROM users WHERE id = ' + uid, function (err, result) {
		if (err) {
			res.sendStatus(500);
			throw "[mysql] ERROR - " + err;
		}

		console.log("[mysql] Successfully retrieved data for " + uid);

		res.status(200).json(result);
	});
});

router.route('/get-followed-users/:id').get((req, res) => {
	db.query('SELECT followed_users FROM users WHERE id = ' + req.params.id, function (err, result) {
		if (err) throw "[mysql] ERROR - " + err;

		//TODO: Add a check for if the result contains values
		let temp = JSON.parse(result);
		let insertValues = [];
		temp.map(function (val) { insertValues.push('(' + db.escape(val) + ')'); });

		// Create a temp table to query against via INNER JOIN
		db.query('BEGIN;' +
			+ 'CREATE temp_table (id INT NOT NULL PRIMARY KEY);'
			+ 'INSERT INTO temp_table(id) VALUES ' + insertValues.join(', ') + ';'
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

router.route('/update-followed-users/:id/:tofollow').post((req, res) => {
	db.query('SELECT followed_users FROM users WHERE id = ' + req.params.id, function (err, result) {
		if (err) throw "[mysql] ERROR - " + err;

		//TODO: Add a check for if the result contains values
		let temp = JSON.parse(result);
		temp.push(req.params.tofollow);
		temp = JSON.stringify(temp);

		db.query('UPDATE users SET followed_users = ' + temp + ' WHERE id = ' + req.params.id, function (err, result) {
			if (err) {
				res.sendStatus(500);
				throw "[mysql] ERROR - " + err;
			}

			res.status(200);
			console.log("[mysql] Updated user " + req.params.id + "'s followed users!");
		});
	});
});

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
			+ 'INSERT INTO temp_table(id) VALUES ' + insertValues.join(', ') + ';'
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

router.route('/add-favorite/:id/:id').post((req, res) => {
	db.query("SELECT fav_posts_id FROM users WHERE id = " + req.params.id, function (err, result) {
		if (err) throw "[mysql] ERROR - " + err;

		let temp = JSON.parse(result);
		temp.push(req.params.workoutid);
		temp = JSON.stringify(temp);

		db.query(
			"UPDATE users SET fav_posts_id = " + temp + "WHERE id = " + id, function (err, result) {
				if (err) {
					res.sendStatus(404);
					throw "[mysql] ERROR - " + err;
				}
				console.log("[mysql] Added " + req.params.workoutid + " to favorites!");
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
			+ 'INSERT INTO temp_table(id) VALUES ' + insertValues.join(', ') + ';'
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
					+ 'INSERT INTO temp_table(id) VALUES ' + insertValues.join(', ') + ';'
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