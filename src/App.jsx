import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import './App.css';
import Welcome from './Pages/Welcome';
import Login from './Pages/Login';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Welcome />} />
    </Routes>
  </BrowserRouter>
  )
}
export default App;
