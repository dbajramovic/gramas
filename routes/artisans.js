var express = require('express');
var router = express.Router();
var Artisan = require('../dbmodels/artisan').Artisan;

/* GET home page. */
router.get('/', function(req, res, next) {
    Artisan.find({}, function(err, docs) {
        if (!err) {
            res.json(200, {Artisans: docs});
        } else {
            res.json(500, {message: err});
        }
    });
});
module.exports = router;
