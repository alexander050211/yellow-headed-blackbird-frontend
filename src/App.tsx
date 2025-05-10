import './index.css';

import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Archive from './pages/archive.tsx';
import Current from './pages/current/index.tsx';
import Settings from './pages/settings.tsx';

export const App = () => {
  useEffect(() => {
    localStorage.setItem("step", "1");
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Archive />} />
      <Route path="/current" element={<Current />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};
