var express = require('express');
var router = express.Router();
var requestResponses = require('../dbmodels/requestResponse').RequestResponse;

/* GET requestResponses. */
router.get('/', function(req, res, next) {
    requestResponses.find({}, function(err, docs) {
        if (!err) {
            res.status(200).json({RequestResponses: docs});
        } else {
            res.status(500).json({message: err});
        }
    });
});

/* GET request by id. */
router.get('/:id', function(req, res, next) {
    requestResponses.findById(req.params.id, function(err, docs) {
        if (!err) {
            res.status(200).json({Request: docs});
        } else {
            res.status(500).json({message: err});
        }
    });
});

/* POST /requestResponses */
router.post('/', function(req, res, next) {
    requestResponses.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* PUT /requestResponses/:id */
router.put('/:id', function(req, res, next) {
    requestResponses.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE /requestResponses/:id */
router.delete('/:id', function(req, res, next) {
    requestResponses.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
