var express = require('express');
var router = express.Router();
var article = require('../dbmodels/article').Article;

/* GET all articles. */
router.get('/', function(req, res, next) {
    article.find({}, function(err, docs) {
        if (!err) {
            res.status(200).json({articles: docs});
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

/* PUT /article */
router.put('/', function(req, res, next) {
    article.create(req.body, function (err, post) {
        //if (err) return next(err);
        //res.json(post);
        if (!err) {
            res.status(200).json();
        } else {
            res.status(500).json({message: err});
        }
    });
});

/* POST /article/:id */
router.post('/:id', function(req, res, next) {
    article.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        //if (err) return next(err);
        //res.json(post);
        if (!err) {
            res.status(200).json();
        } else {
            res.status(500).json({message: err});
        }
    });
});

/* DELETE /article/:id */
router.delete('/:id', function(req, res, next) {
    article.findByIdAndRemove(req.params.id, req.body, function (err, post) {
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
