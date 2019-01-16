// require modules.
const express = require('express');
const mongoose = require('mongoose');
const bodyParse = require('body-parser');
const routes = require('../routes/api');


// setup express app.
const app = express();
const hostname = '127.0.0.1';
const port =  process.env.PORT || 8080;


// connect to MongoDb.
mongoose.connect('mongodb://localhost/BooksDB');
mongoose.Promise = global.Promise;


app.use(bodyParse.json());

// initialize routes.
app.use('/books',routes);

// listen for requests
app.listen(port, function () {
	console.log(`Server running at http://${hostname}:${port}/`);
});
