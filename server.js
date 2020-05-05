const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const session = require('express-session');

const db = require('./db');
const apiRoute = require('./api.route');

// var url = require('url');
// const redis = require('redis');
// const redisURL = url.parse(process.env.REDISCLOUD_URL);
// const client = redis.createClient(redisURL.port, redisURL.hostname, { no_ready_check: true });
// client.auth(redisURL.auth.split(":")[1]);

// Express
const app = express();

// Helmet protects from attacks
app.use(helmet());

// Body-parser sets req.body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

// Enable sessions
app.use(session({
	secret: 'exerfit_secret_code_f7gh7g8fdhg',
	resave: false,
	saveUninitialized: false
}));

// Heroku deployment
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('frontend/exer/build'));
	app.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, 'frontend', 'exer', 'build', 'index.html')); // relative path
	});
}

// Login: send { username: string, password: string }
// 		Status 500 on db error
//		Status 401 if no user with username and password combo
//		Status 200 means token is saved in user's session and protected api requests will now be authorized (handled server-side)
app.post('/login', (req, res) => {
	const username = req.body.username;
	const password = req.body.password;
	if (!username || !password) {
		res.sendStatus(400);
		return;
	}

	db.query('SELECT id FROM users WHERE username = ? AND password = ?', [username, password],
		(error, results, fields) => {
			if (error) {
				res.status(500).send(error.message);
				console.log(error.message);
				return;
			}

			if (results.length < 1) {
				res.sendStatus(401);
				return;
			}

			// Generate token
			let token = crypto.randomBytes(16).toString('hex');

			// Save token in user's session
			req.session.token = token;

			// Save token in db
			const uid = results[0].id;
			db.query('UPDATE users SET session_token = ? WHERE id = ', [uid],
				(error, results, fields) => {
					if (error) {
						res.status(500).send(error.message);
						console.log(error.message);
						return;
					}
					res.sendStatus(200);
				});
		});
});

// Set req.uid if user's session has a token
app.use((req, res, next) => {
	const token = req.session.token;

	if (token) {
		db.query('SELECT id FROM users WHERE session_token = ?', [token],
			(error, results, fields) => {
				if (results.length > 0)
					req.uid = results[0].id;
				next();
			});
	}
	else
		next();
});

// Logout: clear token from user session and db 
// 		Status 500 on db error
//		Status 200 means token is cleared from user's session and db (or there is no logged in user detected)
app.post('/logout', (req, res) => {
	const uid = req.uid;

	// Erase session token from user's session
	req.session.token = undefined;

	if (!uid) {
		res.sendStatus(200);
		return;
	}

	// Erase session token from db
	db.query('UPDATE users SET session_token = NULL WHERE id = ', [uid],
		(error, results, fields) => {
			if (error) {
				res.status(500).send(error.message);
				console.log(error.message);
				return;
			}
			res.sendStatus(200);
		});
});

// API
app.use('/api', apiRoute);

// PORT
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
	console.log('Connected to port ' + port);
});

