var express = require('express');
var router = express.Router();
var requestResponses = require('../dbmodels/requestResponse').RequestResponse;

/* GET all requestResponses. */
router.get('/', function(req, res, next) {
    requestResponses.find({}, function(err, docs) {
        if (!err) {
            res.status(200).json({requestResponses: docs});
        } else {
            res.status(500).json({message: err});
        }
    });
});

/* GET requestResponse by id. */
router.get('/:id', function(req, res, next) {
    requestResponses.findById(req.params.id, function(err, docs) {
        if (!err) {
            res.status(200).json({requestResponse: docs});
        } else {
            res.status(500).json({message: err});
        }
    });
});

/* PUT /requestResponses */
router.put('/', function(req, res, next) {
    requestResponses.create(req.body, function (err, post) {
        //if (err) return next(err);
        //res.json(post);
        if (!err) {
            res.status(200).json();
        } else {
            res.status(500).json({message: err});
        }
    });
});

/* POST /requestResponses/:id */
router.post('/:id', function(req, res, next) {
    requestResponses.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        //if (err) return next(err);
        //res.json(post);
        if (!err) {
            res.status(200).json();
        } else {
            res.status(500).json({message: err});
        }
    });
});

/* DELETE /requestResponses/:id */
router.delete('/:id', function(req, res, next) {
    requestResponses.findByIdAndRemove(req.params.id, req.body, function (err, post) {
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
