var express = require('express');
var router = express.Router();
var superadmin = require('../dbmodels/superadmin').Superadmin;

/* GET home page. */
router.get('/', function(req, res, next) {
    superadmin.find({}, function(err, docs) {
        if (!err) {
            res.status(200).json({superadmin: docs});
        } else {
            res.status(500).json({message: err});
        }
    });
});
module.exports = router;
