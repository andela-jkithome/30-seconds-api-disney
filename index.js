const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const bluebird = require('bluebird');
const mongoose = require('mongoose');
const morgan = require('morgan');
const routes = require('./server/routes');
require('dotenv').config({silent: true});
mongoose.Promise = bluebird;
const PORT = process.env.PORT || 3000


mongoose.connect(process.env.MONGODB_URL);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(morgan('dev'));
routes(app);

app.listen(PORT);
console.log('Listening on PORT ' + PORT + '.');

module.exports = app