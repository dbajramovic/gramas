var express = require('express');
var router = express.Router();
var requests = require('../dbmodels/request').Request;

/* GET all requests */
router.get('/', function(req, res, next) {
    requests.find({}, function(err, docs) {
        if (!err) {
            res.status(200).json({requests: docs});
        } else {
            res.status(500).json({message: err});
        }
    });
});

/* GET request by id. */
router.get('/:id', function(req, res, next) {
    Request.findById(req.params.id, function(err, docs) {
        if (!err) {
            res.status(200).json({request: docs});
        } else {
            res.status(500).json({message: err});
        }
    });
});

/* PUT /request */
router.put('/', function(req, res, next) {
    Request.create(req.body, function (err, post) {
        //if (err) return next(err);
        //res.json(post);
        if (!err) {
            res.status(200).json();
        } else {
            res.status(500).json({message: err});
        }
    });
});

/* POST /request/:id */
router.post('/:id', function(req, res, next) {
    Request.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        //if (err) return next(err);
        //res.json(post);
        if (!err) {
            res.status(200).json();
        } else {
            res.status(500).json({message: err});
        }
    });
});

/* DELETE /requests/:id */
router.delete('/:id', function(req, res, next) {
    Request.findByIdAndRemove(req.params.id, req.body, function (err, post) {
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
