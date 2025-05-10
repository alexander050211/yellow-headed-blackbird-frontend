import './index.css';

import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Archive from './pages/archive.tsx';
import Current from './pages/current/index.tsx';
import Login from './pages/login.tsx';
import Logout from './pages/logout.tsx';
import Register from './pages/register.tsx';
import Settings from './pages/settings.tsx';

export const App = () => {
  useEffect(() => {
    localStorage.setItem('step', '1');
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Archive />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/register" element={<Register />} />
      <Route path="/current" element={<Current />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};
