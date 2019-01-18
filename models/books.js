// require modules.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// create a book Schema & model.
const BookSchema = new Schema({
	name : {
		type:String,
		//required:[true,'Book Name Is Required']
	},
	price : {
		type:Number,
		//required:[true,'Book Price Is Required']
	},
	qty : {
		type:Number,
	},
	isavailable : {
		type : Boolean,
		default : false
	}
});


// create a Book model
const Book = mongoose.model('Book_Cols',BookSchema);


// export the model
module.exports = Book;

