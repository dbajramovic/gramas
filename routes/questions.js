var express = require('express');
var router = express.Router();
var questions = require('../dbmodels/question').Question;

/* GET home page. */
router.get('/', function(req, res, next) {
    questions.find({}, function(err, docs) {
        if (!err) {
            res.status(200).json({Question: docs});
        } else {
            res.status(500).json({message: err});
        }
    });
});
module.exports = router;
