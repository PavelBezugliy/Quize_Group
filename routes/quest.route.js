const router = require('express').Router();

const Quest = require('../views/Quest');

router.get('/:id', (req, res) => {
  res.renderComponent(Quest, { title: 'Quizeee' }, { doctype: false });
});

module.exports = router;
