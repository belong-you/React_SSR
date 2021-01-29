import React from 'react';
import ReactDom from 'react-dom/server';
import App from './App';
import { getLink, getScript } from './getFile';

export default (req, res) => {
    const context = {};
    const compHTML = ReactDom.renderToString(<App path={req.path} context={context} />);
    let html = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <link rel="icon" href="/faicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        ${getLink()}
        <title>React App</title>
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">${compHTML}</div>
        ${getScript()}
      </body>
    </html>
    `;
    if (context.code) res.status(context.code);
    res.send(html);
}