/**
 * Created by Kenan on 22.3.2015.
 */
    //Updated by Elvis 24.03
var express = require('express');
var router = express.Router();
var admin = require('../dbmodels/admin').Admin;

/* GET all admins. */
router.get('/', function(req, res, next) {
    admin.find({}, function(err, docs) {
        if (!err) {
            res.status(200).json({admins: docs});
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

/* PUT /admin */
router.put('/', function(req, res, next) {
    admin.create(req.body, function (err, post) {
        //if (err) return next(err);
        //res.json(post);
        if (!err) {
            res.status(200).json();
        } else {
            res.status(500).json({message: err});
        }
    });
});

/* POST /admin */
router.post('/:id', function(req, res, next) {
    admin.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        //if (err) return next(err);
        //res.json(post);
        if (!err) {
            res.status(200).json();
        } else {
            res.status(500).json({message: err});
        }
    });
});

/* DELETE /admin/:id */
router.delete('/:id', function(req, res, next) {
    admin.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        //if (err) return next(err);
        //res.json(post);
        if (!err) {
            res.status(200).json();
        } else {
            res.status(500).json({message: err});
        }
    });
});


module.exports = router;
