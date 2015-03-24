var express = require('express');
var router = express.Router();
var article = require('../dbmodels/article').Article;

/* GET articles. */
router.get('/', function(req, res, next) {
    article.find({}, function(err, docs) {
        if (!err) {
            res.status(200).json({Articles: docs});
        } else {
            res.status(500).json({message: err});
        }
    });
});

/* GET article by id. */
router.get('/:id', function(req, res, next) {
    article.findById(req.params.id, function(err, docs) {
        if (!err) {
            res.status(200).json({article: docs});
        } else {
            res.status(500).json({message: err});
        }
    });
});

/* POST /article */
router.post('/', function(req, res, next) {
    article.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* PUT /article/:id */
router.put('/:id', function(req, res, next) {
    article.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE /article/:id */
router.delete('/:id', function(req, res, next) {
    article.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
