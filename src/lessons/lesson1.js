import React from 'react';
import ReactDOM from 'react-dom';

const headers = React.createElement(
  'tr',
  { },
  React.createElement('th', {}, 'First Name'),
  React.createElement('th', {}, 'Last Name')
);
const janet = React.createElement(
  'tr',
  { },
  React.createElement('td', {}, 'Janet'),
  React.createElement('td', {}, 'James')
);
const john = React.createElement(
  'tr',
  { },
  React.createElement('td', {}, 'John'),
  React.createElement('td', {}, 'Jameson')
);

ReactDOM.render(
  React.createElement(
    'table', 
    {}, 
    headers,
    janet,
    john),
  document.getElementById('root')
);
