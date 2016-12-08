const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./server/routes');

app.use(cors());
routes(app);

app.listen(3000);

module.exports = app