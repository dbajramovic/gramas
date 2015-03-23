var express = require('express');
var router = express.Router();
var requestResponses = require('../dbmodels/requestResponse').RequestResponse;

/* GET home page. */
router.get('/', function(req, res, next) {
    requestResponses.find({}, function(err, docs) {
        if (!err) {
            res.status(200).json({RequestResponses: docs});
        } else {
            res.status(500).json({message: err});
        }
    });
});
module.exports = router;
