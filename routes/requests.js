var express = require('express');
var router = express.Router();
var requests = require('../dbmodels/request').Request;

/* GET requests */
router.get('/', function(req, res, next) {
    requests.find({}, function(err, docs) {
        if (!err) {
            res.status(200).json({Requests: docs});
        } else {
            res.status(500).json({message: err});
        }
    });
});

/* GET request by id. */
router.get('/:id', function(req, res, next) {
    Request.findById(req.params.id, function(err, docs) {
        if (!err) {
            res.status(200).json({Request: docs});
        } else {
            res.status(500).json({message: err});
        }
    });
});

/* POST /users */
router.post('/', function(req, res, next) {
    Request.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* PUT /request/:id */
router.put('/:id', function(req, res, next) {
    Request.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE /requests/:id */
router.delete('/:id', function(req, res, next) {
    Request.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});
module.exports = router;
