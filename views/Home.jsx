const React = require('react');
const Layout = require('./Layout');

function Home({ title, thems }) {
  return (
    <Layout title={title}>
      <link rel="stylesheet" href="/css/home.css" />
      <div className="content">
        <div className="choise hide">Выберите тему для игры</div>
        <div className="theme hide">
          <a className="themeOne" href="/quest/1"><button action="/quest/1" className="button1 quest/1" type="button">{thems[0].task}</button></a>
          <a className="themeOne" href="/quest/2">
            {' '}
            <button className="button2 quest/2" type="button">{thems[1].task}</button>
          </a>
          <a className="themeOne" href="/quest/3">
            {' '}
            <button className="button3 quest/3" type="button">{thems[2].task}</button>
          </a>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Home;
