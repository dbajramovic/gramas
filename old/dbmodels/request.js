var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var requestSchema = new mongoose.Schema({
    User:[
        {type: Schema.Types.ObjectId, ref: 'user'}
    ]
    , DateTime : { type: String, required: true }
},{versionKey : false});

var request = mongoose.model('Request', requestSchema);

module.exports = {
    Request: request
};