const React = require('react');
const Layout = require('./Layout')

function Reg({ title }) {
  return (
    <Layout title={title}>
      <link rel="stylesheet" href="/css/reg.css" />
      <div class="divReg">
        <div className='choise'>Пожалуйста, пройдите регистрацию =></div>
        <div className='theme'>
          <input className="inputName" placeholder='введите ваше имя' />
          <input className="inputPass" placeholder='введите пароль' />
          <a className='buttonReg' href=''> <button className='button5' type='button'>Зарегистрироваться</button></a></div>
      </div>
    </Layout>
  )
}

module.exports = Reg;