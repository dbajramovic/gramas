var express = require('express');
var router = express.Router();
var articleTypes = require('../dbmodels/articleType').ArticleType;

/* GET home page. */
router.get('/', function(req, res, next) {
    articleTypes.find({}, function(err, docs) {
        if (!err) {
            res.status(200).json({ArticleTypes: docs});
        } else {
            res.status(500).json({message: err});
        }
    });
});
module.exports = router;
