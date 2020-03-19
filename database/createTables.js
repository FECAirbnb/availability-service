// eslint-disable-next-line no-console
const { mockName } = require('./mockData');
const { mockPrice } = require('./mockData');
const { mockService } = require('./mockData');
const { mockCleaning } = require('./mockData');
const dbConnection = require('./index.js');

dbConnection.query('CREATE DATABASE IF NOT EXISTS availability;', err => {
  if (err) throw err;
});

dbConnection.query('USE availability;', err => {
  if (err) throw err;
});

dbConnection.query(
  'CREATE TABLE IF NOT EXISTS Location (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name varchar(45), price INT, cleaning_fee INT, service_fee INT)',
  err => {
    if (err) throw err;
  }
);

dbConnection.query(
  'CREATE TABLE IF NOT EXISTS Dates (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, date DATE)',
  err => {
    if (err) throw err;
  }
);

mockName.forEach((loc, index) => {
  dbConnection.query(
    `INSERT INTO Location (name, price, cleaning_fee, service_fee) VALUES ('${loc}', ${mockPrice[index]}, ${mockService[index]}, ${mockCleaning[index]})`
  );
});

dbConnection.query(`DROP PROCEDURE IF EXISTS fill_calendar;`, err => {
  if (err) throw err;
});

dbConnection.query(
  `CREATE PROCEDURE fill_calendar(start_date DATE, end_date DATE) BEGIN DECLARE crt_date DATE; SET crt_date=start_date; WHILE crt_date < end_date DO INSERT INTO Dates (date) VALUES (crt_date); SET crt_date = ADDDATE(crt_date, INTERVAL 1 DAY); END WHILE; END`,
  err => {
    if (err) throw err;
  }
);

dbConnection.query(`CALL fill_calendar('2020-03-01', '2020-5-31');`, err => {
  if (err) throw err;
});

dbConnection.query(
  `CREATE TABLE IF NOT EXISTS Location_Dates (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  Location_id INT REFERENCES Location(id),
  Dates_id INT REFERENCES Dates(id)
)`,
  err => {
    if (err) throw err;
  }
);

dbConnection.query(
  `INSERT INTO Location_Dates (Location_id, Dates_id) VALUES  (1,1), (2,1), (3,1), (4,1), (5,1), (6,1) `
);

module.exports = dbConnection;
