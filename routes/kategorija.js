var express = require('express');
var router = express.Router();

var Kategorija = require('../models/kategorija');

router.get('/', function (req, res, next) {
    Kategorija.find()
        .exec(function (err, kategorijas) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: kategorijas
            });
        });
});

module.exports = router;