/* eslint-disable vars-on-top */
const express = require('express');

const app = express();
const path = require('path');
const db = require('../database/index.js');

const port = 3002;

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.urlencoded({ extended: true }));
db.query(`USE availability;`);

app.get('/hi', (req, res) => {
  db.query(
    `SELECT * FROM Location, Dates, Location_Dates WHERE Location_Dates.Location_id = Location.id AND Location_Dates.Dates_id = Dates.id`,
    (err, data) => {
      if (err) throw err;
      console.log(data);
      res.json(data);
    }
  );
});

app.listen(port, () => console.log(`listening on port ${port}!`));
