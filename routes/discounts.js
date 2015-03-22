var express = require('express');
var router = express.Router();
var Discount = require('../dbmodels/discount').Discount;

/* GET home page. */
router.get('/', function(req, res, next) {
    Discount.find({}, function(err, docs) {
        if (!err) {
            res.json(200, {Discounts: docs});
        } else {
            res.json(500, {message: err});
        }
    });
});
module.exports = router;
