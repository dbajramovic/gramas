var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var questionResponseSchema = new mongoose.Schema({

    Question:[
        {type: Schema.Types.ObjectId, ref: 'question'}
    ]
    , Text : {type: String, required:true}
    , DateTime : { type: String, required: true }
    , ResponseIncrement : { type: Number, required: true }
},{versionKey : false});

var questionResponse = mongoose.model('QuestionResponse', questionResponseSchema);

module.exports = {
    QuestionResponse: questionResponse
};