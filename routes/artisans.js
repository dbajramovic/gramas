var express = require('express');
var router = express.Router();
var artisan = require('../dbmodels/artisan').Artisan;

/* GET all artisans. */
router.get('/', function(req, res, next) {
    artisan.find({}, function(err, docs) {
        if (!err) {
            res.status(200).json({artisans: docs});
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

/* PUT /artisans */
router.put('/', function(req, res, next) {
    artisan.create(req.body, function (err, post) {
        //if (err) return next(err);
        //res.json(post);
        if (!err) {
            res.status(200).json();
        } else {
            res.status(500).json({message: err});
        }
    });
});

/* POST /artisans/:id */
router.post('/:id', function(req, res, next) {
    artisan.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        //if (err) return next(err);
        //res.json(post);
        if (!err) {
            res.status(200).json();
        } else {
            res.status(500).json({message: err});
        }
    });
});

/* DELETE /artisans/:id */
router.delete('/:id', function(req, res, next) {
    artisan.findByIdAndRemove(req.params.id, req.body, function (err, post) {
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
