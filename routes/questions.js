var express = require('express');
var router = express.Router();
var Questions = require('../dbmodels/question').Question;

/* GET home page. */
router.get('/', function(req, res, next) {
    Questions.find({}, function(err, docs) {
        if (!err) {
            res.json(200, {Questions: docs});
        } else {
            res.json(500, {message: err});
        }
    });
});
module.exports = router;
