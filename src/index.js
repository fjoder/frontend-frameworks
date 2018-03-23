import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  React.createElement(
    'div', 
    {}, 
    React.createElement('h1', { className: 'flowers' }, 'Hello World!')),
  document.getElementById('root')
);
