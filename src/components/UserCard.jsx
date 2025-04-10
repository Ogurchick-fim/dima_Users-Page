import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({ user }) => (
  <div className="user-card">
    <img src={user.avatar} alt={`${user.name} avatar`} />
    <h3>{user.name}</h3>
    <p>Email: {user.email}</p>
    <p>Address: {user.address}</p>
    <Link to={`/users/${user.id}`}>
      <button>Подробнее</button>
    </Link>
  </div>
);

export default UserCard;