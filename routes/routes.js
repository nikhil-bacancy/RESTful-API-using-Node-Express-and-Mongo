// require modules.
const express = require('express');
const controller = require('../controllers/controller');
const router = express.Router();


// ----------------Requests Handlers--------------------//

// get a list of books from the db.
router.get('/list',controller.getBooks);


// add a new book to the db.
router.post('/book',controller.addNewBook);


// update a book in the db.
router.put('/book/:name',controller.updateBook);


// delete a book from db.
router.delete('/book/:name',controller.removeBook);


//export the API request handlers.
module.exports = router;
