var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var superadminSchema = new mongoose.Schema({
    Username : { type: String, required: true, trim: true,
        index: { unique: true } }
    , Password : { type: String, required: true }
},{versionKey : false});

var superadmin = mongoose.model('Superadmin', superadminSchema);

module.exports = {
    Superadmin: superadmin
};