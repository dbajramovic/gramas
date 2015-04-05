var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var artisanSchema = new mongoose.Schema({
    _id : [
        {type: Schema.Types.ObjectId, ref: 'User'}
    ]
    , Name : {type: String, required : true}
    , Surname : {type: String, required : true}
    , Description : {type: String, required : true} //anti bot, is required
    , Telephone : {type: Number, required : true}
    , TypeOfCraft : {type: String, required: true}
    , MaterialsInterestedIn : {type : String, required: false}
    , WorkExperience : {type: String, required:true}
    , Picture : {type: String, required : true}
    , Option_NewsFeed : {type: Boolean, required: true}
    , Option_Email : {type: Boolean , required: true}
    , DateOfLastLogin : {type: String, required: false}
    , BuyingPoints : {type: Number, required : true, defaultValue: 0}
    , Banned : {type: Boolean, required: true, defaultValue: false}
},{versionKey : false});

var artisan = mongoose.model('Artisan', artisanSchema);

module.exports = {
    Artisan: artisan
};