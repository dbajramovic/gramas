/**
 * Created by Kenan on 22.3.2015.
 */
var express = require('express');
var router = express.Router();
var admin = require('../dbmodels/admin').Admin;
/* GET users listing. */
router.get('/', function(req, res, next) {
    admin.find({}, function(err, docs) {
        if (!err) {
            res.status(200).json({Admins: docs});
        } else {
            res.status(500).json({message: err});
        }
    });
});

module.exports = router;
