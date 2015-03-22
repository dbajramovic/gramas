var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var questionSchema = new Schema({
    User:[
        {type: Schema.Types.ObjectId, ref: 'User'}
    ]
    , Text : {type: String, required:true}
    , DateTime : { type: String, required: true }
});

var question = mongoose.model('Question', questionSchema);

module.exports = {
    Question: question
};