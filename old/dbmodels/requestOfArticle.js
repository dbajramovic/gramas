var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var requestOfArticleSchema = new mongoose.Schema({

    Request:[
        {type: Schema.Types.ObjectId, ref: 'request'}
    ]
    , Article:[
        {type: Schema.Types.ObjectId, ref: 'article'}
    ]
});

var requestOfArticle = mongoose.model('RequestOfArticle', requestOfArticleSchema);

module.exports = {
    RequestOfArticle: requestOfArticle
};
