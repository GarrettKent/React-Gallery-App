import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav className="main-nav">
        <ul>
          <li><NavLink to='/Basketball'>Basketball</NavLink></li>
          <li><NavLink to='/Baseball'>Baseball</NavLink></li>
          <li><NavLink to='/Football'>Football</NavLink></li>
        </ul>
      </nav>
    );
  }
}

export default Nav;