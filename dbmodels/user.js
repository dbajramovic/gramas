var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var userSchema = new Schema({
    Username : { type: String, required: true, trim: true,
        index: { unique: true } }
    , Email : {type: String, required:true, unique:true}
    , Password : { type: String, required: true }
});

var user = mongoose.model('User', userSchema);

module.exports = {
    User: user
};