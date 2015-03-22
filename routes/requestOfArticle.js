var express = require('express');
var router = express.Router();
var requestOfArticles = require('../dbmodels/requestOfArticle').RequestOfArticle;

/* GET home page. */
router.get('/', function(req, res, next) {
    requestOfArticles.find({}, function(err, docs) {
        if (!err) {
            res.json(200, {RequestOfArticles: docs});
        } else {
            res.json(500, {message: err});
        }
    });
});
module.exports = router;
