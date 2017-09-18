var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    naziv: {type: String, required: true}
});

module.exports = mongoose.model('Kategorija', schema);