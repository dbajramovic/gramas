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

/* GET user by id. */
router.get('/:id', function(req, res, next) {
    user.findById(req.params.id, function(err, docs) {
        if (!err) {
            res.status(200).json({Users: docs});
        } else {
            res.status(500).json({message: err});
        }
    });
});

/* POST /users */
router.post('/', function(req, res, next) {
    user.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* PUT /users/:id */
router.put('/:id', function(req, res, next) {
    user.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE /users/:id */
router.delete('/:id', function(req, res, next) {
    User.findByIdAndRemove(req.params.id, req.body, function (err, post) {e
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
