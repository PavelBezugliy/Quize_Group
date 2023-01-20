const router = require('express').Router();

const Quest = require('../views/Quest');

router.get('/quest', (req, res) => {
  res.renderComponent(Quest, { title: 'Quizeee' });
});

module.exports = router;