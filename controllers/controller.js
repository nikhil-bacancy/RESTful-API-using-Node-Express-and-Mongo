const Book = require('../models/books');


exports.getBooks = function(req,res,next) {
	//console.log(req.query.price)
	Book.find({price :{ $gte : req.query.bookprice}}).then(function (result) {
			//console.log(result);
			res.send(result);
	}).catch(next);
};


exports.addNewBook = function(req,res,next) {

	 //console.log(req.body);
		Book.create(req.body).then(function (book) {
				res.send(book);
		}).catch(next);

};


exports.updateBook = function(req,res,next) {

	Book.findOneAndUpdate(
		{ name : req.params.name },
		{ $inc: { price : req.body.price } },
		{ upsert: true , new : true, rawResult : true }
	).then(function (result) {
			res.send(result.value);
	}).catch(next);

	// Book.updateOne(
	// 	{ name : req.params.name },
 //    { $inc: { price : req.body.price } },
 //    { upsert: true }
	// ).then(function (result) {
	// 		res.send(result);
	// }).catch(next);
};


exports.removeBook = function(req,res,next) {
		//console.log(req.params);
	Book.deleteOne({"name" : req.params.name}).then(function (result) {
		res.send(result);
	}).catch(next);

};
