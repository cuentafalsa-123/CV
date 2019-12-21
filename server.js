require('dotenv').config();

const URI = process.env.MONGODB_URI || 'mongodb://localhost/databasetest';

const express = require('express');
const app = express();
require('./database');

const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser')
const path = require('path');
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());

const indexRouter = require('./src/Server/routers/indexRouter.js');
app.use('/', indexRouter);

app.get('/ping', (req, res) => {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`corriendo server en ${PORT}, puta`)
});