const React = require('react');
const Header = require('./Header');

// eslint-disable-next-line react/prop-types
module.exports = function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <title>{title}</title>
        <link rel="stylesheet" href="/css/layout.css" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossOrigin="anonymous"
        />
        <script defer src="/scripts/client.js" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Kelly+Slab&family=Lobster&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        <div className="bg" />
        <div className="bg bg2" />
        <div className="bg bg3" />
        {children}
      </body>
    </html>
  );
};
