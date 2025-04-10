import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <h1>404</h1>
    <p>Страница не найдена</p>
    <Link to="/users">
      <button>Вернуться на главную</button>
    </Link>
  </div>
);

export default NotFoundPage;