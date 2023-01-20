const router = require('express').Router();
const Log = require('../views/Log');
const Reg = require('../views/Reg');
const { User } = require('../db/models');

router.get('/log', (req, res) => {
  res.renderComponent(Log, { title: 'Quizeee' });
});

router.get('/reg', (req, res) => {
  res.renderComponent(Reg);
});

router.post('/reg', async (req, res) => {
  try {
    const { name, password } = req.body;
    if (name && password) {
      const user = await User.findOne({ where: { name } });
      if (!user) {
        const newUser = await User.create({ name, password });
        // console.log(newUser);
        res.app.locals.name = name;
        res.json({ message: 'ok' });
      } else {
        res.json({ message: 'Такой пользователь уже есть!' });
      }
    }
  } catch ({ message }) {
    res.json({ message });
  }
});
module.exports = router;
