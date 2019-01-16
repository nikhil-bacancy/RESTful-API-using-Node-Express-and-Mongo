// require modules.
const express = require('express');
const Book = require('../models/books');
const router = express.Router();


// ----------------Requests Handlers--------------------//

// get a list of books from the db.
router.get('/list',function(req,res) {
	res.send({ type: 'GET' });
});


// add a new book to the db.
router.post('/book',function(req,res) {
	//console.log(req.body);
	Book.create(req.body).then(function (book) {
			res.send(book);
	});

});


// update a book in the db.
router.put('/book/:id',function(req,res) {
	res.send({ type: 'PUT' });
});


// delete a book from db.
router.delete('/book/:id',function(req,res) {
	res.send({ type: 'DELETE' });
});


//export the API request handlers.
module.exports = router;
