var express = require('express');
var router = express.Router();
var Requests = require('../dbmodels/request').Request;

/* GET home page. */
router.get('/', function(req, res, next) {
    Requests.find({}, function(err, docs) {
        if (!err) {
            res.json(200, {Requests: docs});
        } else {
            res.json(500, {message: err});
        }
    });
});
module.exports = router;
