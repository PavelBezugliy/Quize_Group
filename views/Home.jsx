const React = require('react');
const Layout = require('./Layout')

function Home({ title }) {
  return (
    <Layout title={title}>
      <link rel="stylesheet" href="/css/home.css" />
      <div class="content">
        <div className='choise'>Выберите тему для игры</div>
        <div className='theme'>
          <a className='themeOne' href='/quest'><button className='button1' type='button' >Тема 1</button></a>
          <a className='themeOne' href='/quest'> <button className='button2' type='button'>Тема 2</button></a>
          <a className='themeOne' href='/quest'> <button className='button3' type='button'>Тема 3</button></a></div>
      </div>
    </Layout>
  )
}

module.exports = Home;
