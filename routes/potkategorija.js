var express = require('express');
var router = express.Router();

var Potkategorija = require('../models/potkategorija');

router.get('/', function (req, res, next) {
    Potkategorija.find()
        .exec(function (err, potkategorijas) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: potkategorijas
            });
        });
});

module.exports = router;