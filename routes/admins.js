/**
 * Created by Kenan on 22.3.2015.
 */
var express = require('express');
var router = express.Router();
var Admin = require('../dbmodels/admin').Admin;
/* GET users listing. */
router.get('/', function(req, res, next) {
    Admin.find({}, function(err, docs) {
        if (!err) {
            res.json(200, {Admins: docs});
        } else {
            res.json(500, {message: err});
        }
    });
});

module.exports = router;
