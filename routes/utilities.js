/**
 * Created by Elvis on 3/25/2015.
 */
var express = require('express');
var router = express.Router();

//svi modeli koji nam trebaju
//var user = require('../dbmodels/user').User;

/* GET all */
router.get('/', function(req, res, next) {
    //user.find({}, function(err, docs) {
    //    if (!err) {
    //        res.status(200).json({users: docs});
    //    } else {
    //        res.status(500).json({message: err});
    //    }
    //});
});

/* GET by id. */
router.get('/:id', function(req, res, next) {
    //user.findById(req.params.id, function(err, docs) {
    //    if (!err) {
    //        res.status(200).json({user: docs});
    //    } else {
    //        res.status(500).json({message: err});
    //    }
    //});
});

/* PUT */
router.put('/', function(req, res, next) {
    //user.create(req.body, function (err, post) {
    //    // if (err) return res.json(failureMessage);//next(err);
    //    //res.json(post);
    //    //res.json(successMessage);
    //    if (!err) {
    //        res.status(200).json();
    //    } else {
    //        res.status(500).json({message: err});
    //    }
    //});
});

/* POST  */
router.post('/:id', function(req, res, next) {
    //user.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    //    //if (err) return res.json(failureMessage);//next(err);
    //    //res.json(post);
    //    //res.json(successMessage);
    //    if (!err) {
    //        res.status(200).json();
    //    } else {
    //        res.status(500).json({message: err});
    //    }
    //});
});

/* DELETE  */
router.delete('/:id', function(req, res, next) {
    //user.findByIdAndRemove(req.params.id, req.body, function (err, post) {e
    //    //if (err) return next(err);
    //    //res.json(post);
    //    if (!err) {
    //        res.status(200).json();
    //    } else {
    //        res.status(500).json({message: err});
    //    }
    //});
});

module.exports = router;
