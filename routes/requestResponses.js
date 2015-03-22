var express = require('express');
var router = express.Router();
var RequestResponses = require('../dbmodels/requestResponse').RequestResponse;

/* GET home page. */
router.get('/', function(req, res, next) {
    RequestResponses.find({}, function(err, docs) {
        if (!err) {
            res.json(200, {RequestResponses: docs});
        } else {
            res.json(500, {message: err});
        }
    });
});
module.exports = router;
