/* eslint-disable no-shadow */
const mysql = require('mysql2');

const dbConnection = mysql.createConnection({
  user: 'root',
  password: 'password'
});

dbConnection.connect(err => {
  if (err) {
    throw err;
  }
});

module.exports = dbConnection;
