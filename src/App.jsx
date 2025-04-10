import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import UsersListPage from './pages/UsersListPage';
import UserDetailPage from './pages/UserDetailPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/users" element={<UsersListPage />} />
      <Route path="/users/:id" element={<UserDetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Router>
);

export default App; 