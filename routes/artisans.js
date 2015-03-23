var express = require('express');
var router = express.Router();
var artisan = require('../dbmodels/artisan').Artisan;

/* GET home page. */
router.get('/', function(req, res, next) {
    artisan.find({}, function(err, docs) {
        if (!err) {
            res.status(200).json({Artisans: docs});
        } else {
            res.status(500).json({message: err});
        }
    });
});
module.exports = router;
