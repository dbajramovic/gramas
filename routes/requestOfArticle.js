var express = require('express');
var router = express.Router();
var requestOfArticles = require('../dbmodels/requestOfArticle').RequestOfArticle;

/* GET home page. */
router.get('/', function(req, res, next) {
    requestOfArticles.find({}, function(err, docs) {
        if (!err) {
            res.status(200).json({requestOfArticles: docs});
        } else {
            res.status(500).json({message: err});
        }
    });
});

/* GET request by id. */
router.get('/:id', function(req, res, next) {
    requestOfArticles.findById(req.params.id, function(err, docs) {
        if (!err) {
            res.status(200).json({requestOfArticle: docs});
        } else {
            res.status(500).json({message: err});
        }
    });
});

/* PUT /requestOfArticles */
router.put('/', function(req, res, next) {
    requestOfArticles.create(req.body, function (err, post) {
        //if (err) return next(err);
        //res.json(post);
        if (!err) {
            res.status(200).json();
        } else {
            res.status(500).json({message: err});
        }
    });
});

/* POST /requestOfArticles/:id */
router.post('/:id', function(req, res, next) {
    requestOfArticles.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        //if (err) return next(err);
        //res.json(post);
        if (!err) {
            res.status(200).json();
        } else {
            res.status(500).json({message: err});
        }
    });
});

/* DELETE /requestOfArticles/:id */
router.delete('/:id', function(req, res, next) {
    requestOfArticles.findByIdAndRemove(req.params.id, req.body, function (err, post) {
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
