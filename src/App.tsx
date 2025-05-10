import './index.css';

import { Route, Routes } from 'react-router-dom';

import Archive from './pages/archive.tsx';
import Current from './pages/current/index.tsx';
import Settings from './pages/settings.tsx';
import Login from './pages/login.tsx';
import Register from './pages/register.tsx';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Archive />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/current" element={<Current />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};
