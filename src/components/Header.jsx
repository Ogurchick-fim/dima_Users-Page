import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="logo">
      <Link to="/users"><h1>Logo</h1></Link>
    </div>
    <nav>
      <Link to="/users">Пользователи</Link>
    </nav>
  </header>
);

export default Header;