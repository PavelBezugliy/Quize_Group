const React = require('react');
const Layout = require('./Layout');

module.exports = function Log({ title }) {
  return (
    <Layout title={title}>
      <h2>Login</h2>
      <form action="/auth/log" method="post" id="log_form">
        <link rel="stylesheet" href="/css/log.css" />
        <div className="divLog">
          <div className="">Введите ваши данные</div>
          <div className="them">
            <input
              name="name"
              type="text"
              className="inputName"
              placeholder="введите ваше имя"
              required
            />
            <input
              name="password"
              type="password"
              className="inputPass"
              placeholder="введите пароль"
              required
            />
            <a className="buttonLog" href=""> </a>
          </div>
          <button className="button4" type="submit">Зайти</button>

        </div>
      </form>
      <span className="nameLogin"></span>
    </Layout>
  );
};
