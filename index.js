const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./server/routes');
require('dotenv').config({silent: true});
const PORT = process.env.PORT || 3000

app.use(cors());
routes(app);

app.listen(PORT);
console.log('Listening on PORT ' + PORT + '.');

module.exports = app