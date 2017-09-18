var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var Praksa = require("../models/praksa");

router.get('/', function(req,res,next){
    Praksa.find()
        .exec(function(err,praksas){
            if(err){
                return res.status(500).json({
                    title: 'error occured',
                    error: err
                });
            }
            res.status(200).json({
                message:'Success',
                obj: praksas
            });
        });

});

router.post('/', function(req,res,next){
    var praksa = new Praksa({
        naziv: req.body.naziv,
        kompanija: req.body.kompanija,
        opis:req.body.opis,
        pozicija: req.body.pozicija,
        kategorija: req.body.kategorija,
        tagovi: req.body.tagovi
    });
    praksa.save(function(err,result){
        if (err) {
            return res.status(500).json({
                title: 'error occured',
                error: err
            });

        }
        res.status(201).json({
            message: 'Sacuvana praksa',
            obj: result
        });
    });
});

router.patch('/:id', function(req,res,next){
    Praksa.findById(req.params.id, function(err,praksa){
        if (err) {
            return res.status(500).json({
                title: 'error occured',
                error: err
            });
        }
        if(!praksa){
            return res.status(500).json({
                title: 'no praksa found',
                error: {message:'Praksa nije nadjena'}
            });
        }
        praksa.naziv = req.body.naziv;
        praksa.kompanija = req.body.kompanija;
        praksa.kategorija = req.body.kategorija;
        praksa.pozicija = req.body.pozicija;
        praksa.opis = req.body.opis;
        praksa.save(function(err,result){
            if (err) {
                return res.status(500).json({
                    title: 'error occured',
                    error: err
                });
    
            }
            res.status(201).json({
                message: 'Updated praksa',
                obj: result
            });
        });
    });
});

router.delete('/:id', function(req,res,next){
    Praksa.findById(req.params.id, function(err,praksa){
        if (err) {
            return res.status(500).json({
                title: 'error occured',
                error: err
            });
        }
        if(!praksa){
            return res.status(500).json({
                title: 'no praksa found',
                error: {message:'Praksa nije nadjena'}
            });
        }
        
        praksa.remove(function(err,result){
            if (err) {
                return res.status(500).json({
                    title: 'error occured',
                    error: err
                });
    
            }
            res.status(201).json({
                message: 'Deleted praksa',
                obj: result
            });
        });
    });
});

module.exports = router;
