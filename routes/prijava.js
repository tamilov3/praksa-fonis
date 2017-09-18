var express = require('express');
var router = express.Router();

var Prijava = require('../models/prijava');
var Praksa = require('../models/praksa');


router.get('/', function (req, res, next) {
    Prijava.find()
    .populate('praksa','naziv')
        .exec(function (err, prijavas) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: prijavas
            });
        });
});
router.post('/:praksaId', function (req, res, next) {
    Praksa.findById(req.params.praksaId, function (err, praksa) {
        if (err) {
            console.log('usao sam u error');
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        console.log(praksa)
        var prijava = new Prijava({
            ime: req.body.ime,
            prezime: req.body.prezime,
            mejl: req.body.mejl,
            linkCV: req.body.linkCV,
            linkedin: req.body.linkedin,
            portfolio: req.body.portfolio,
            telefon: req.body.telefon,
            poruka: req.body.poruka,
            praksa: praksa
        });
        prijava.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'error occured',
                    error: err
                });
            }
            praksa.prijavas.push(result);
            praksa.save();
            console.log("dodao sam u niz");
            console.log(praksa.prijavas);
            res.status(201).json({
                message: 'Sacuvana prijava',
                obj: result
            });
        });
    });
});


router.delete('/:id', function (req, res, next) {
    Prijava.findById(req.params.id, function (err, prijava) {
        if (err) {
            return res.status(500).json({
                title: 'error occured',
                error: err
            });
        }
        if (!prijava) {
            return res.status(500).json({
                title: 'no prijava found',
                error: { message: 'Prijava nije nadjena' }
            });
        }

        prijava.remove(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'error occured',
                    error: err
                });

            }
            res.status(201).json({
                message: 'Deleted prijava',
                obj: result
            });
        });
    });
});



module.exports = router;
