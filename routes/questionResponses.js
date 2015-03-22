var express = require('express');
var router = express.Router();
var QuestionResponses = require('../dbmodels/questionResponse').QuestionResponse;

/* GET home page. */
router.get('/', function(req, res, next) {
    QuestionResponses.find({}, function(err, docs) {
        if (!err) {
            res.json(200, {QuestionResponses: docs});
        } else {
            res.json(500, {message: err});
        }
    });
});
module.exports = router;
