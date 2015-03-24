var express = require('express');
var router = express.Router();
var discount = require('../dbmodels/discount').Discount;

/* GET discounts. */
router.get('/', function(req, res, next) {
    discount.find({}, function(err, docs) {
        if (!err) {
            res.status(200).json({Discounts: docs});
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

/* POST /discount */
router.post('/', function(req, res, next) {
    discount.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* PUT /discount/:id */
router.put('/:id', function(req, res, next) {
    discount.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE /discount/:id */
router.delete('/:id', function(req, res, next) {
    discount.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
