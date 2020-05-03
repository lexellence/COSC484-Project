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
	let foundProfile = userProfiles.find((profile, i, array) => {
		return profile.id === req.params.id;
	});
	if (foundProfile)
		res.status(200).json(foundProfile);   // 200 = OK
	else
		res.sendStatus(404);   // 404 = not found
});
// router.route('/update-user/:id').put((req, res) => {
//     res.sendStatus(200);
// });
// router.route('/delete-user/:id').delete((req, res) => {
//     res.sendStatus(200);
// });

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