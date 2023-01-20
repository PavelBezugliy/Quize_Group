const React = require('react');
const Layout = require('./Layout');

module.exports = function Quest({ title, theme }) {
  return (
    <Layout title={title}>
      <link rel="stylesheet" href="/css/quest.css" />
      <div className="content">
        <div className="quest">Сюда подгрузить вопрос</div>
        <div className="theme">
          <input className="inputAnsver" placeholder="введите ответ..." />
          <button className="buttonverify" type="button"> Проверить</button>

        </div>
      </div>
    </Layout>
  );
};
