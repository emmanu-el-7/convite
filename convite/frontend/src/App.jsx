import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/Home';
import HappyPage from './components/Happy';
import DateTime from './components/Selections/DateTime';
import DateTypeSelection from './components/Selections/DateType';
import Animacao from './components/Selections/RateExcitement';
import PostMessage from './components/PostMessage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/happy-page" element={<HappyPage />} />
      <Route path="/selecionar-data" element={<DateTime />} />
      <Route path="/select-date-type" element={<DateTypeSelection />} />
      <Route path="/animacao" element={<Animacao />} />
      <Route path="/post-message" element={<PostMessage />} />
      
    </Routes>
  );
}

export default App;