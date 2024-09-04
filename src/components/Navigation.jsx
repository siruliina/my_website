import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navigation.css';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about-me">About Me</Link>
        </li>
        <li>
          <Link to="/hobbies">Hobbies</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;