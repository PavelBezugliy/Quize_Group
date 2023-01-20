const React = require('react');
const Layout = require('./Layout');

module.exports = function Log({ title }) {
  return (
    <Layout title={title}>
      <h2>Login</h2>
      <link rel="stylesheet" href="/css/log.css" />
      <div className="divLog">
        <div className="">Введите ваши данные</div>
        <div className="">
          <input className="inputName" placeholder="введите ваше имя" />
          <input className="inputPass" placeholder="введите пароль" />
          <a className="buttonLog" href="">
            {' '}
            <button className="button4" type="button">Зайти</button>
          </a>

        </div>
      </div>
    </Layout>
  );
};
