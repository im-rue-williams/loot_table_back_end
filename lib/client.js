/* eslint-disable no-console */
require('dotenv').config();
const { Client } = require('pg');

// const DATABASE_URL = process.env.DATABASE_URL;
// 	connectionString: DATABASE_URL,

const conParams = {
	host: process.env.HOST, 
	user: process.env.USER, 
	password: process.env.PASSWORD, 
	database: process.env.DATABASE_NAME, 
	port: process.env.PORT || 5433, 
	ssl: false
};

const client = new Client(conParams);

//here, and only here, is where the client.connect() goes. move it and we shall perish.
client.connect(err => {
	if(err) {
		console.error('connection error: ', err.stack);
	} else {
		client.on('connect', () => console.log('Now connected to:', client.database));
	}
});
module.exports = client;
