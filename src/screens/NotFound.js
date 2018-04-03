import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="d-flex flex-column justify-content-center align-items-center" style={{marginTop: '35vh', fontSize: '1.5em'}}>
    <div className="bg-light border border-secondary text-center rounded p-4">
      <p>Uhoh! You're in a place you shouldn't be... tsk! tsk!</p>
      <p>404! - <Link to="/" href="/">Go Home</Link></p>
    </div>
  </div>
);

export default NotFound;
