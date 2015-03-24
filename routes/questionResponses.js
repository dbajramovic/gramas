var express = require('express');
var router = express.Router();
var questionResponses = require('../dbmodels/questionResponse').QuestionResponse;

/* GET questionResponses. */
router.get('/', function(req, res, next) {
    questionResponses.find({}, function(err, docs) {
        if (!err) {
            res.status(200).json({QuestionResponses: docs});
        } else {
            res.status(500).json({message: err});
        }
    });
});

/* GET questionResponses by id. */
router.get('/:id', function(req, res, next) {
    questionResponses.findById(req.params.id, function(err, docs) {
        if (!err) {
            res.status(200).json({questionResponses: docs});
        } else {
            res.status(500).json({message: err});
        }
    });
});

/* POST /questionResponses */
router.post('/', function(req, res, next) {
    questionResponses.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* PUT /questionResponses/:id */
router.put('/:id', function(req, res, next) {
    questionResponses.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE /questionResponses/:id */
router.delete('/:id', function(req, res, next) {
    questionResponses.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
