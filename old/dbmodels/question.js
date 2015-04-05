var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var questionSchema = new mongoose.Schema({
    User:[
        {type: Schema.Types.ObjectId, ref: 'User'}
    ]
    , Text : {type: String, required:true}
    , DateTime : { type: String, required: true }
},{versionKey : false});

var question = mongoose.model('Question', questionSchema);

module.exports = {
    Question: question
};