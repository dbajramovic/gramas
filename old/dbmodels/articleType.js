var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var articleTypeSchema = new mongoose.Schema({
    Type : {type: String, required:true, unique:true}
},{versionKey : false});

var articleType = mongoose.model('ArticleType', articleTypeSchema);

module.exports = {
    ArticleType: articleType
};