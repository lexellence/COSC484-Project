// Import .env file into process.env (mysql connection string, or other local variables that will not be committed to version control)
require('dotenv').config();

const mysql = require('mysql');
const connection = mysql.createConnection(process.env.JAWSDB_URL);

connection.connect((err) => {
	if (err)
		throw err;
	console.log("[mysql] Connected successfully");
	connection.end();
	console.log("[mysql] Disconnected");
});

module.exports = connection;
