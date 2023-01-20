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


const Main = require('../views/Home');

router.get('/', (req, res) => {
  res.renderComponent(Main, { title: 'Quizeee' });
});

module.exports = router;