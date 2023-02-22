import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import './App.css';
import Register from './Pages/Register';
import Login from './Pages/Login';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
  )
}
export default App;
