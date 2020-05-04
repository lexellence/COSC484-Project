// Import .env file into process.env (mysql connection string, or other local variables that will not be committed to version control)
require('dotenv').config();

const mysql = require('mysql');
const connection = mysql.createConnection(process.env.JAWSDB_URL);

connection.connect((err) => {
	if (err) {
		console.log("DB error", err);
		throw err;
	}
	console.log("[mysql] Connected successfully");
});

// Ensure SQL tables exist, create them if not
connection.query('CREATE TABLE IF NOT EXISTS `user` (`id` int(11) NOT NULL AUTO_INCREMENT, '
	+ '`firstname` varchar(50) COLLATE utf8_unicode_ci NOT NULL,'
	+ '`lastname` varchar(50) COLLATE utf8_unicode_ci NOT NULL,'
	+ '`username` varchar(45) COLLATE utf8_unicode_ci NOT NULL,'
	+ '`email` varchar(45) COLLATE utf8_unicode_ci NOT NULL,'
	+ '`password` varchar(50) COLLATE utf8_unicode_ci NOT NULL,'
	+ '`profile_picture` text COLLATE utf8_unicode_ci,'
	+ '`followed_users` json DEFAULT NULL,'
	+ '`posts_id` json DEFAULT NULL,'
	+ '`fav_posts_id` json DEFAULT NULL,'
	+ 'PRIMARY KEY (`id`)'
	+ ') ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;',
	function (err, result) {
		if (err) throw err;
		console.log("[mysql] User table query successful");
	});

connection.query('CREATE TABLE IF NOT EXISTS `posts` (`id` int(11) NOT NULL AUTO_INCREMENT,'
	+ '`user_id` int(11) NOT NULL,'
	+ '`title` varchar(50) COLLATE utf8_unicode_ci NOT NULL,'
	+ '`body` text COLLATE utf8_unicode_ci NOT NULL,'
	+ '`total_favorites` int(11) DEFAULT NULL,'
	+ '`comments` json DEFAULT NULL,'
	+ 'PRIMARY KEY (`id`)'
	+ ') ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;',
	function (err, result) {
		if (err) throw err;
		console.log("[mysql] Posts table query successful");
	});

module.exports = connection;
