var express = require('express');
var router = express.Router();
var article = require('../dbmodels/article').Article;

/* GET home page. */
router.get('/', function(req, res, next) {
    article.find({}, function(err, docs) {
        if (!err) {
            res.json(200, {Articles: docs});
        } else {
            res.json(500, {message: err});
        }
    });
});
module.exports = router;
