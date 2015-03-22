var express = require('express');
var router = express.Router();
var User = require('../dbmodels/user').User;
/* GET users listing. */
router.get('/', function(req, res, next) {
    User.find({}, function(err, docs) {
        if (!err) {
            res.json(200, {users: docs});
        } else {
            res.json(500, {message: err});
        }
    });
});

module.exports = router;
