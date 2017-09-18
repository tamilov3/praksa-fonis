var mongoose = require('mongoose');
var Schema = mongoose.Schema; //kreiranje bluprinta za model

var schema = new Schema({
    // da li ovde imati admina kao referencu?
    
    naziv: {type: String, required:true},
    kompanija: {type: String, required:true}, // ovde kasnije implementirati konkretnu kompaniju kao objekat
    opis: {type: String, required:true},
    pozicija: {type: String, required:true},
    kategorija: {type: String, required:true},
    tagovi:[{type: String}],
    potkategorija: {type: String},
    linkDoPrijave:{type:String},
    placeno: {type: Boolean},
    trajanje: {type: String},
    prijavas: [{type: Schema.Types.ObjectId, ref: 'Prijava'}]
    

 });

/*  schema.post('remove', function(message) {
     User.findById(message.user, function(err,user){
        user.message.pull(message);
        user.save();
     })
 }) */

 module.exports = mongoose.model('Praksa', schema);