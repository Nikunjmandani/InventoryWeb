// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var quandsSchema = new Schema({
  //items_id: { type: String, required: true},
  items: { type: String, required: true },
  itemsNos: { type: Number, required: true },
  dateCreated:{ type: Date, default: Date.now },
  dateUpdated: Date,

});

// the schema is useless so far
// we need to create a model using it
var QANDS = mongoose.model('quands', quandsSchema);

// make this available to our users in our Node applications
module.exports = QANDS;