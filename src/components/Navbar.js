import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../styles/images/logo.svg';


export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <Link to='/'>
          <img src={logo} alt='drinks logo' className='logo' />
        </Link>
        <ul className='nav-links'>
          <li>
            <Link to='/'>home page</Link>
          </li>
          <li>
            <Link to='/about'>about</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
