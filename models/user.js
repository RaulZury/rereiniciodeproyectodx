var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema =  Schema({
  id:Number,
  marca:String,
  modelo:String,
  año:Number
});

module.exports = mongoose.model('User', UserSchema);
