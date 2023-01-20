const React = require('react');
const Layout = require('./Layout');

function Hello({ title, thems }) {
    return (
        <Layout title={title}>
            <link rel="stylesheet" href="/css/home.css" />
            <div className='test'>
            <div className="contentHello">
                <div className="divHello">Привет, зашел поиграть? </div>
                <a href='/auth/reg'><button className="buttonHello" type="button">Пройди регистрацию (без смс)</button></a>
            </div></div>
        </Layout>
    );
}

module.exports = Hello;