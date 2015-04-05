var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var ArticleSchema = new mongoose.Schema({

    ArticleType:[
        {type: Schema.Types.ObjectId, ref: 'articleType'}
    ]
    , Name : {type: String, required:true}
    , Amount : {type: Number, required:true}
    , Dimensions : {type: String, required: false }
    , ArticleCode : {type: Number, required:true, unique:true}
    , Color : {type: String, required:false}
    , Description : {type: String, required:false}
    , Picture : {type: String, required:false}
    , Active : {type: Boolean, required: true}
},{versionKey : false});

var article = mongoose.model('Article', ArticleSchema);

module.exports = {
    Article: article
};