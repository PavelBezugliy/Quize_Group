const React = require('react');

function Quest({ question, answer }) {
  return (
    <div className="content">
      <div className="answerDiv">{answer}</div>
      <div className="answerDivTwo">Внимание, вопрос!</div>
      <div className="quest">{question.question}</div>
      <div className="theme">
        <form className="question" data-id={question.id}>
          <input className="inputAnsver" name="answer" placeholder="введите ответ..." />
          <button className="buttonverify" type="submit"> Проверить</button>
        </form>
      </div>
    </div >
  );
}

module.exports = Quest;

