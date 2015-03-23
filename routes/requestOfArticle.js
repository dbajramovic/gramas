var express = require('express');
var router = express.Router();
var requestOfArticles = require('../dbmodels/requestOfArticle').RequestOfArticle;

/* GET home page. */
router.get('/', function(req, res, next) {
    requestOfArticles.find({}, function(err, docs) {
        if (!err) {
            res.status(200).json({RequestOfArticles: docs});
        } else {
            res.status(500).json({message: err});
        }
    });
});
module.exports = router;
