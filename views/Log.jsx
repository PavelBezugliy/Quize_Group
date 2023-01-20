const React = require('react');
const Layout = require('./Layout')

function Log({ title }) {
  return (
    <Layout title={title}>
      <link rel="stylesheet" href="/css/log.css" />
      <div class="divLog">
        <div className=''>Введите ваши данные</div>
        <div className=''>
          <input className="inputName" placeholder='введите ваше имя' />
          <input className="inputPass" placeholder='введите пароль' />
          <a className='buttonLog' href=''> <button className='button4' type='button'>Зайти</button></a></div>
      </div>
    </Layout>
  )
}

module.exports = Log;