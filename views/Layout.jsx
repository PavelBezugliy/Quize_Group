const React = require('react');
const Header = require('./Header');

// eslint-disable-next-line react/prop-types
function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <title>{title}</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href=""/>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
module.exports = Layout;
