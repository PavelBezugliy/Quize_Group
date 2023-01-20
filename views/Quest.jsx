const React = require('react');

function Quest({ title, theme }) {
  return (
    <div className="content">
      <div className="quest">Сюда подгрузить вопрос</div>
      <div className="theme">
        <input className="inputAnsver" placeholder="введите ответ..." />
        <button className="buttonverify" type="button"> Проверить</button>
      </div>
    </div>
  );
}

module.exports = Quest;

