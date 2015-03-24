/**
 * Created by Kenan on 22.3.2015.
 */
var express = require('express');
var router = express.Router();
var admin = require('../dbmodels/admin').Admin;
/* GET admins. */
router.get('/', function(req, res, next) {
    admin.find({}, function(err, docs) {
        if (!err) {
            res.status(200).json({Admins: docs});
        } else {
            res.status(500).json({message: err});
        }
    });
});

/* GET admin by id. */
router.get('/:id', function(req, res, next) {
    admin.findById(req.params.id, function(err, docs) {
        if (!err) {
            res.status(200).json({admin: docs});
        } else {
            res.status(500).json({message: err});
        }
    });
});

/* POST /admin */
router.post('/', function(req, res, next) {
    admin.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* PUT /admin/:id */
router.put('/:id', function(req, res, next) {
    admin.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE /admin/:id */
router.delete('/:id', function(req, res, next) {
    admin.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


module.exports = router;
