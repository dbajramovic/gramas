var express = require('express');
var router = express.Router();
var requestOfArticles = require('../dbmodels/requestOfArticle').RequestOfArticle;

/* GET home page. */
router.get('/', function(req, res, next) {
    requestOfArticles.find({}, function(err, docs) {
        if (!err) {
            res.status(200).json({RequestOfArticles: docs});
        } else {
            res.status(500).json({message: err});
        }
    });
});

/* GET request by id. */
router.get('/:id', function(req, res, next) {
    requestOfArticles.findById(req.params.id, function(err, docs) {
        if (!err) {
            res.status(200).json({requestOfArticles: docs});
        } else {
            res.status(500).json({message: err});
        }
    });
});

/* POST /requestOfArticles */
router.post('/', function(req, res, next) {
    requestOfArticles.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* PUT /requestOfArticles/:id */
router.put('/:id', function(req, res, next) {
    requestOfArticles.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE /requestOfArticles/:id */
router.delete('/:id', function(req, res, next) {
    requestOfArticles.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


module.exports = router;
