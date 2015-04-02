var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var adminSchema = new mongoose.Schema({
    //needs foreign key on user - will also be primary key
    //User:[
    _id:[
        {type: Schema.Types.ObjectId, ref: 'User'}
    ]
});

var admin = mongoose.model('Admin', adminSchema);

module.exports = {
    Admin: admin
};