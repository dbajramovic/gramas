var express = require('express');
var router = express.Router();
var questionResponses = require('../dbmodels/questionResponse').QuestionResponse;

/* GET all questionResponses. */
router.get('/', function(req, res, next) {
    questionResponses.find({}, function(err, docs) {
        if (!err) {
            res.status(200).json({questionResponses: docs});
        } else {
            res.status(500).json({message: err});
        }
    });
});

/* GET questionResponses by id. */
router.get('/:id', function(req, res, next) {
    questionResponses.findById(req.params.id, function(err, docs) {
        if (!err) {
            res.status(200).json({questionResponse: docs});
        } else {
            res.status(500).json({message: err});
        }
    });
});

/* PUT /questionResponses */
router.put('/', function(req, res, next) {
    questionResponses.create(req.body, function (err, post) {
        //if (err) return next(err);
        //res.json(post);
        if (!err) {
            res.status(200).json();
        } else {
            res.status(500).json({message: err});
        }
    });
});

/* POST /questionResponses/:id */
router.post('/:id', function(req, res, next) {
    questionResponses.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        //if (err) return next(err);
        //res.json(post);
        if (!err) {
            res.status(200).json();
        } else {
            res.status(500).json({message: err});
        }
    });
});

/* DELETE /questionResponses/:id */
router.delete('/:id', function(req, res, next) {
    questionResponses.findByIdAndRemove(req.params.id, req.body, function (err, post) {
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
