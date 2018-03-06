express = require('express');

var routes = express.Router();
var bodyParser = require('body-parser');
var multer = require('multer');


// insert the items
routes.post('/insertTheQands', function (req, res) {
	console.log("in insertTheQands ");
	//console.log('s:'+quands);
	var QANDS = require('../models/qandsadd');
	var newQANDS = QANDS({
		items: req.body.items,
		itemsNos: req.body.itemsNos
	});
	newQANDS.save(function (err, quandss) {
		if (err) {
			res.status(500).send('{"quands":{}}');
			throw err;
		}
		console.log("items added succesfully")
		res.status(200).send({ "quands": quandss });
	});
});

//get the items
routes.post('/getTheQands', function (req, res) {
	console.log("in getTheQands ");
	//console.log('s:'+quands);
	var QANDS = require('../models/qandsadd');

	QANDS.find({}, function (err, quandss) {
		if (err) {
			res.status(500).send('{"quands":{}}');
			throw err;
		}
		console.log("items Get succesfully")
		res.status(200).send({ "quands": quandss });
	});
});

//delete the items
routes.post('/deleteTheQands', function (req, res) {
	console.log("in deleteTheQands ");
	var question= req.body.question;
	//console.log('s:'+quands);
	var QANDS = require('../models/qandsadd');

	QANDS.findOneAndRemove({"question":question}, function (err, quandss) {
		if (err) {
			res.status(500).send('{"quands":{}}');
			throw err;
		}
		console.log("items deleted succesfully")
		res.status(200).send({ "quands": quandss });
	});
});

module.exports = routes;