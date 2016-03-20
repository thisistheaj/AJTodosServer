var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ModelSchema = new Schema({
    userName: String,
    password: String,
    data: [
        {
            item: String,
            completed: Boolean
        }
    ]
},{ minimize: false });

var Model = mongoose.model('Model', ModelSchema);
module.exports = Model;