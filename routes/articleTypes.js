var express = require('express');
var router = express.Router();
var articleTypes = require('../dbmodels/articleType').ArticleType;

/* GET articleTypes. */
router.get('/', function(req, res, next) {
    articleTypes.find({}, function(err, docs) {
        if (!err) {
            res.status(200).json({ArticleTypes: docs});
        } else {
            res.status(500).json({message: err});
        }
    });
});

/* GET articleTypes by id. */
router.get('/:id', function(req, res, next) {
    articleTypes.findById(req.params.id, function(err, docs) {
        if (!err) {
            res.status(200).json({questions: docs});
        } else {
            res.status(500).json({message: err});
        }
    });
});

/* POST /articleTypes */
router.post('/', function(req, res, next) {
    articleTypes.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* PUT /articleTypes/:id */
router.put('/:id', function(req, res, next) {
    articleTypes.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE /articleTypes/:id */
router.delete('/:id', function(req, res, next) {
    articleTypes.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
