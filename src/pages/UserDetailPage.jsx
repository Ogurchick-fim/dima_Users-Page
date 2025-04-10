import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../store/async/usersAsync';
import { useParams, Link } from 'react-router-dom';

const UserDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedUser, loading, error } = useSelector(state => state.users);

  useEffect(() => {
    dispatch(fetchUser(id));
  }, [dispatch, id]);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;
  if (!selectedUser) return <p>Пользователь не найден</p>;

  return (
    <div>
      <h2>{selectedUser.name}</h2>
      <img src={selectedUser.avatar} alt={`${selectedUser.name} avatar`} />
      <p>Email: {selectedUser.email}</p>
      <p>Адрес: {selectedUser.address}</p>
      <p>Телефон: {selectedUser.phone}</p>
      <p>Геолокация: {selectedUser.geo}</p>
      <p>Логин: {selectedUser.username}</p>
      <p>Пароль: ********</p>
      <Link to="/users">
        <button>Назад к списку пользователей</button>
      </Link>
    </div>
  );
};

export default UserDetailPage;