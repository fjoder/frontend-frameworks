import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <p>Uhoh! You're in a place you shouldn't be... tsk! tsk!</p>
    <p>404! - <Link to="/" href="/">Go Home</Link></p>
  </div>
);

export default NotFound;
