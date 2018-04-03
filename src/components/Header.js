import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ title }) => (
  <header>
    <h1>{title}</h1>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink to="/" href="/" className="nav-link" activeClassName="active" exact={true}>Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/search" href="/search" className="nav-link" activeClassName="active">Search GitHub</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/mine" href="/mine" className="nav-link" activeClassName="active">My Repos</NavLink>
      </li>
    </ul>
  </header>
);

export default Header;
