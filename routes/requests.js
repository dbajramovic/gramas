var express = require('express');
var router = express.Router();
var requests = require('../dbmodels/request').Request;

/* GET home page. */
router.get('/', function(req, res, next) {
    requests.find({}, function(err, docs) {
        if (!err) {
            res.status(200).json({Requests: docs});
        } else {
            res.status(500).json({message: err});
        }
    });
});
module.exports = router;
