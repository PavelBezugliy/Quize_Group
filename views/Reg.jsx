const React = require('react');
const Layout = require('./Layout')

module.exports = function Reg({ title }) {
  return (
    <Layout title={title}>
      <h2 className='testone'>Reg</h2>
      <form action="/auth/reg" method="post" id="reg_form">
      <link rel="stylesheet" href="/css/reg.css" />
      <div class="divReg">
        <div className='choise'>Пожалуйста, пройдите регистрацию =></div>
        <div className='theme'>
          <input 
          name = "name"
          type="text"
          className="inputName" 
          placeholder='введите ваше имя'
          required 
          />
          <input 
          name = "password"
          type ="password"
          className="inputPass" 
          placeholder='введите пароль' 
          required 
          />
          <a className='buttonReg' href=''> </a></div>
          <button className='button5' type='submit'>Зарегистрироваться</button>
      </div>
      </form>
    </Layout>
  );
};

