var express = require('express');
var router = express.Router();
var articleTypes = require('../dbmodels/articleType').ArticleType;

/* GET all articleTypes. */
router.get('/', function(req, res, next) {
    articleTypes.find({}, function(err, docs) {
        if (!err) {
            res.status(200).json({articleTypes: docs});
        } else {
            res.status(500).json({message: err});
        }
    });
});

/* GET articleTypes by id. */
router.get('/:id', function(req, res, next) {
    articleTypes.findById(req.params.id, function(err, docs) {
        if (!err) {
            res.status(200).json({articleType: docs});
        } else {
            res.status(500).json({message: err});
        }
    });
});

/* PUT /articleTypes */
router.put('/', function(req, res, next) {
    articleTypes.create(req.body, function (err, post) {
        //if (err) return next(err);
        //res.json(post);
        if (!err) {
            res.status(200).json();
        } else {
            res.status(500).json({message: err});
        }
    });
});

/* POST /articleTypes/:id */
router.post('/:id', function(req, res, next) {
    articleTypes.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        //if (err) return next(err);
        //res.json(post);
        if (!err) {
            res.status(200).json();
        } else {
            res.status(500).json({message: err});
        }
    });
});

/* DELETE /articleTypes/:id */
router.delete('/:id', function(req, res, next) {
    articleTypes.findByIdAndRemove(req.params.id, req.body, function (err, post) {
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
