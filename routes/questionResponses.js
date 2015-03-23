var express = require('express');
var router = express.Router();
var questionResponses = require('../dbmodels/questionResponse').QuestionResponse;

/* GET home page. */
router.get('/', function(req, res, next) {
    questionResponses.find({}, function(err, docs) {
        if (!err) {
            res.status(200).json({QuestionResponses: docs});
        } else {
            res.status(500).json({message: err});
        }
    });
});
module.exports = router;
