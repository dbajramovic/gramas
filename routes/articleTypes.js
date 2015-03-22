var express = require('express');
var router = express.Router();
var ArticleTypes = require('../dbmodels/articleType').ArticleType;

/* GET home page. */
router.get('/', function(req, res, next) {
    ArticleTypes.find({}, function(err, docs) {
        if (!err) {
            res.json(200, {ArticleTypes: docs});
        } else {
            res.json(500, {message: err});
        }
    });
});
module.exports = router;
