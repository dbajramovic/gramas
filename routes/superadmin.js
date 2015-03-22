var express = require('express');
var router = express.Router();
var Superadmin = require('../dbmodels/superadmin').Superadmin;
/* GET home page. */
router.get('/', function(req, res, next) {
    Superadmin.find({}, function(err, docs) {
        if (!err) {
            res.json(200, {Superadmin: docs});
        } else {
            res.json(500, {message: err});
        }
    });
    });
module.exports = router;
