/* eslint-disable vars-on-top */
const express = require('express');

const app = express();
const path = require('path');
const db = require('../database/index.js');

const port = 3002;

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/hi', (req, res) => {
  res.end('string');
});

app.listen(port, () => console.log(`listening on port ${port}!`));
