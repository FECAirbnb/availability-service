const mysql = require('mysql2');
// const sequelize = require('sequelize');
// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
const dbConnection = mysql.createConnection({
  user: 'root',
  password: 'password',
  database: 'availability'
});

dbConnection.connect(err => {
  if (err) {
    throw err;
  }
  // eslint-disable-next-line no-shadow
  dbConnection.query(`CREATE DATABASE availability`, err => {
    if (err) {
      throw err;
    }
    // eslint-disable-next-line no-console
    console.log('connected');
  });
});

module.exports = dbConnection;
