var express = require('express');
var router = express.Router();
var discount = require('../dbmodels/discount').Discount;

/* GET home page. */
router.get('/', function(req, res, next) {
    discount.find({}, function(err, docs) {
        if (!err) {
            res.status(200).json({Discounts: docs});
        } else {
            res.status(500).json({message: err});
        }
    });
});
module.exports = router;
