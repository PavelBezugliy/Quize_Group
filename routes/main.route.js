const router = require('express').Router();

const Main = require('../views/Home');

router.get('/', (req, res) => {
  res.renderComponent(Main, { title: 'Quiiiiiiize' });
});

module.exports = router;
