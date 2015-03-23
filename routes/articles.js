var express = require('express');
var router = express.Router();
var article = require('../dbmodels/article').Article;

/* GET home page. */
router.get('/', function(req, res, next) {
    article.find({}, function(err, docs) {
        if (!err) {
            res.status(200).json({Articles: docs});
        } else {
            res.status(500).json({message: err});
        }
    });
});
module.exports = router;
