const router = require('express').Router();

// const questions = [
//   {
//     title: 'vova',
//     quest: 'kto vova',
//     answer: 'lox',
//   }
// ]

// const questionsOne = [
//   {
//     title: 'pasha',
//     quest: 'kto pasha',
//     answer: 'top',
//   }
// ]

const Home = require('../views/Home');

router.get('/', (req, res) => {
  res.renderComponent(Home, { title: 'Quizeee' }, { doctype: true });
});

module.exports = router;
