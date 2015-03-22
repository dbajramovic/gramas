var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var articleTypeSchema = new Schema({
    Type : {type: String, required:true, unique:true}
});

var articleType = mongoose.model('ArticleType', articleTypeSchema);

module.exports = {
    ArticleType: articleType
};