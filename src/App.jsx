import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import './App.css';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Home from './Pages/Home';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/mainpage" element={<MainPage />} />
      <Route path="/home" element={<Home />} />
      
    </Routes>
  </BrowserRouter>
  )
}
export default App;
