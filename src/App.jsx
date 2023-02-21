import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Welcome from './Pages/Welcome';
import Login from './Pages/Login';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
  )
}
export default App;
