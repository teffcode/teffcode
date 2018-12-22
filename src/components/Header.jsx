import React, { Component } from 'react';
import { Link } from "react-router-dom";

import '../styles/Header.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__topbar">
          <a href="https://www.instagram.com/teffcode/"><i className="fab fa-instagram"></i></a>
          <a href="https://github.com/teffcode"><i className="fab fa-github"></i></a>
          <a href="https://medium.com/@teffcode"><i className="fab fa-medium"></i></a>
        </div>
        <div className="header__title">
          <Link to={'/'}><h1>&lt; <code>Teffcode</code> /&gt;</h1></Link>
        </div>
        <nav className="header__navigation">
          <ul>
            <Link to={'/talks'}><li>&lt; <code>talks</code> /&gt;</li></Link>
            <Link to={'/workshops'}><li>&lt; <code>workshops</code> /&gt;</li></Link>
            <Link to={'/medellincss'}><li>&lt; <code>medellin-css</code> /&gt;</li></Link>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;