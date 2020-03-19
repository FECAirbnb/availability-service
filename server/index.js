/* eslint-disable vars-on-top */
const express = require('express');

const app = express();
const path = require('path');
const db = require('../database/index.js');

const port = 3002;

app.use(express.static(path.join(__dirname, '../client/public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
db.query(`USE availability;`);

app.get('/api/reserve/:locationId', (req, res) => {
  const { locationId } = req.params;
  db.query(
    `SELECT * FROM Location, Dates, Location_Dates WHERE Location_Dates.Location_id = Location.id AND Location_Dates.Dates_id = Dates.id AND Location.id = ${locationId};`,
    (err, data) => {
      if (err) throw err;

      res.json(data);
    }
  );
});

app.get(`/api/reserve/dates/:check:out`, (req, res) => {
  const firstDates = req.params.out.split('T');
  const secondDate = firstDates[1].split(':');

  const startDate = firstDates[0];
  const endDate = secondDate[3];
  db.query(
    `SELECT * FROM Dates WHERE date BETWEEN '${startDate}' and '${endDate}'`,
    (err, data) => {
      if (err) throw err;

      res.send(data);
    }
  );
});

app.post('/api/reserve/book/:locationId', (req, res) => {
  const selectedDates = req.body.dates;
  const { locationId } = req.body;
  // const { locationId } = req.params;
  selectedDates.forEach(date => {
    db.query(
      `REPLACE INTO Location_Dates (Location_id, Dates_id) VALUES (${locationId}, ${date.id})`
    );
  });
  res.end();
});

app.listen(port);
