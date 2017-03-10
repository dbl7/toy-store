const router = require('express').Router();

const Toys = require('../models/toys');

router.get('/all', (req, res) => {
    Toys.all((err, toys) => {
        res.json(toys);
    });
});

module.exports = router;