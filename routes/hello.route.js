const router = require('express').Router();

const Home = require('../views/Hello');

router.get('/', async (req, res) => {

    res.renderComponent(Home, { title: 'Hello' }, { doctype: true });

});

module.exports = router;
