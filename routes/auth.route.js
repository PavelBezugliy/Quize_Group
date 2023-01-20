const router = require('express').Router();
const Log = require('../views/Log');
const Reg = require('../views/Reg');

router.get('/log', (req, res) => {
    res.renderComponent(Log, { title: 'Quizeee' });
});

router.get('/reg', (req, res) => {
    res.renderComponent(Reg, { title: 'Quizeee' });
});

module.exports = router;