var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ModelSchema = new Schema({
    prop1: String,
    prop2: Number,
},{ minimize: false });

var Model = mongoose.model('Model', ModelSchema);
module.exports = Model;