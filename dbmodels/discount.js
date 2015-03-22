var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var discountSchema = new Schema({
    Picture : {type: String, required:true}
    , Title : {type: String, required:true }
    , Description : {type: String, required:true}
    , FromDate : { type: String, required: true }
    , ToDate : { type: String, required: true }
    , SendFeed : {type: Boolean, required:true}
    , SetOnTitlePage : {type: Boolean, required:true} //set this discount on the title page
});

var discount = mongoose.model('Discount', discountSchema);

module.exports = {
    Discount: discount
};