var express = require('express');
var router = express.Router();
var discount = require('../dbmodels/discount').Discount;

/* GET all discounts. */
router.get('/', function(req, res, next) {
    discount.find({}, function(err, docs) {
        if (!err) {
            res.status(200).json({discounts: docs});
        } else {
            res.status(500).json({message: err});
        }
    });
});

/* GET discounts by id. */
router.get('/:id', function(req, res, next) {
    discount.findById(req.params.id, function(err, docs) {
        if (!err) {
            res.status(200).json({discount: docs});
        } else {
            res.status(500).json({message: err});
        }
    });
});

/* PUT /discount */
router.put('/', function(req, res, next) {
    discount.create(req.body, function (err, post) {
        //if (err) return next(err);
        //res.json(post);
        if (!err) {
            res.status(200).json();
        } else {
            res.status(500).json({message: err});
        }
    });
});

/* POST /discount/:id */
router.post('/:id', function(req, res, next) {
    discount.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        //if (err) return next(err);
        //res.json(post);
        if (!err) {
            res.status(200).json();
        } else {
            res.status(500).json({message: err});
        }
    });
});

/* DELETE /discount/:id */
router.delete('/:id', function(req, res, next) {
    discount.findByIdAndRemove(req.params.id, req.body, function (err, post) {
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
