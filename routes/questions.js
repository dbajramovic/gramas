var express = require('express');
var router = express.Router();
var questions = require('../dbmodels/question').Question;

/* GET questions. */
router.get('/', function(req, res, next) {
    questions.find({}, function(err, docs) {
        if (!err) {
            res.status(200).json({Question: docs});
        } else {
            res.status(500).json({message: err});
        }
    });
});

/* GET questions by id. */
router.get('/:id', function(req, res, next) {
    questions.findById(req.params.id, function(err, docs) {
        if (!err) {
            res.status(200).json({questions: docs});
        } else {
            res.status(500).json({message: err});
        }
    });
});

/* POST /questions */
router.post('/', function(req, res, next) {
    questions.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* PUT /questions/:id */
router.put('/:id', function(req, res, next) {
    questions.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE /questions/:id */
router.delete('/:id', function(req, res, next) {
    questions.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
