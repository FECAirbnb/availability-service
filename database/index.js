/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-shadow */
const mysql = require('mysql');

const dbConnection = mysql.createConnection({
  host: 'database',
  user: 'root',
  password: 'password',
  port: '3306'
});

dbConnection.connect(err => {
  if (err) {
    throw err;
  } else {
    console.log('connected');
  }
});

module.exports = dbConnection;
