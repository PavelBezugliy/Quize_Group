const router = require('express').Router();

const Home = require('../views/Home');
const { Task } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const thems = await Task.findAll();
    res.renderComponent(Home, { title: 'Quizeee', thems }, { doctype: true });
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
