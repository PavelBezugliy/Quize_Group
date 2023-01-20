const router = require('express').Router();

const { re } = require('@babel/core/lib/vendor/import-meta-resolve');
const { logger } = require('sequelize/lib/utils/logger');
const Quest = require('../views/Quest');
const { Task } = require('../db/models');
const { Question } = require('../db/models');

router.get('/:id', async (req, res) => {
  try {
    console.log(req.params.id);
    const questions = await Task.findOne({
      whrere: { id: req.params.id },
      include: { model: Question, key: 'task_id' },
    });
    res.renderComponent(Quest, { question: questions.Questions[0] }, { doctype: false });
  } catch (e) {
    console.log(e);
  }
});

router.post('/1/:id', async (req, res) => {
  try {
    let answer = 'Не правильно!';
    const questions = await Task.findOne({
      whrere: { id: 1 },
      include: { model: Question, key: 'task_id' },
    });
    if (questions.Questions[Number(req.params.id) - 1].answer === req.body.answer) {
      answer = 'Правильно!';
    } else {
      answer = `Не правильно! правильнвй ответ ${questions.Questions[Number(req.params.id) - 1].answer}`;
    }
    console.log(answer);
    res.renderComponent(Quest, { question: questions.Questions[Number(req.params.id) + 1], answer }, { doctype: false });
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
