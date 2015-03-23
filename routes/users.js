var express = require('express');
var router = express.Router();
var user = require('../dbmodels/user').User;
/* GET users listing. */
router.get('/', function(req, res, next) {
    user.find({}, function(err, docs) {
        if (!err) {
            res.status(200).json({Users: docs});
        } else {
            res.status(500).json({message: err});
        }
    });
});

module.exports = router;
