// require modules.
const express = require('express');
const mongoose = require('mongoose');
const bodyParse = require('body-parser');
const cors = require('cors');
const path = require('path');


const routes = require('./routes/routes');



// setup express app.
const app = express();
const hostname = '127.0.0.1';
const url =  "mongodb://admin:admin13@ds161894.mlab.com:61894/db_bookstore"
const port =  process.env.PORT || 8080;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// connect to MongoDb.
mongoose.connect( url || 'mongodb://localhost/BooksDB' );
mongoose.Promise = global.Promise;



app.use("/styles",express.static(__dirname + "/views/css"));
app.use("/js",express.static(__dirname + "/views/js"));


// app.use(bodyParse.json());

app.use(cors())

app.use(bodyParse.urlencoded({
	extended : true
}));


// initialize routes.
app.use('/books',routes);

app.use('/', function(req, res) {
	return res.render("index", {})
})


//error handling middleware.
app.use(function (err,req,res,next) {
	res.status(422).send({error : err.errors.name.message});
})

// listen for requests
app.listen(port, function () {
	console.log(`Server running at http://${hostname}:${port}/`);
});
