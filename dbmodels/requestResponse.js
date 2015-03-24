var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var requestResponseSchema = new mongoose.Schema({

    Request:[
        {type: Schema.Types.ObjectId, ref: 'request'}
    ]
    , Text : {type: String, required:true}
    , DateTime : { type: String, required: true }
    , ResponseIncrement : { type: Number, required: true }
});

var requestResponse = mongoose.model('RequestResponse', requestResponseSchema);

module.exports = {
    RequestResponse: requestResponse
};