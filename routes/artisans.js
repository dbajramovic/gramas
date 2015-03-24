var express = require('express');
var router = express.Router();
var artisan = require('../dbmodels/artisan').Artisan;

/* GET artisans. */
router.get('/', function(req, res, next) {
    artisan.find({}, function(err, docs) {
        if (!err) {
            res.status(200).json({Artisans: docs});
        } else {
            res.status(500).json({message: err});
        }
    });
});

/* GET artisan by id. */
router.get('/:id', function(req, res, next) {
    artisan.findById(req.params.id, function(err, docs) {
        if (!err) {
            res.status(200).json({artisan: docs});
        } else {
            res.status(500).json({message: err});
        }
    });
});

/* POST /artisan */
router.post('/', function(req, res, next) {
    artisan.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* PUT /artisan/:id */
router.put('/:id', function(req, res, next) {
    artisan.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE /artisan/:id */
router.delete('/:id', function(req, res, next) {
    artisan.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
