var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Praksa = require('./praksa');

var schema = new Schema({
    ime:{type: String, required: true},
    prezime:{type: String, required: true},
    mejl:{type: String, required: true},
    telefon:{type: String},
    linkedin:{type: String},
    portfolio:{type: String},
    linkCV:{type: String, required: true},
    poruka:{type: String},
    praksa: {type: Schema.Types.ObjectId, ref: 'Praksa'}
});

/* schema.post('remove', function (message) {
    User.findById(message.user, function (err, user) {
        user.messages.pull(message);
        user.save();
    });
}); */

module.exports = mongoose.model('Prijava', schema);