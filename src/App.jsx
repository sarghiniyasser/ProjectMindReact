import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import './App.css';
import Register from './Pages/Register';
import Login from './Pages/Login';
<<<<<<< HEAD
import WelcomePage from './Pages/WelcomePage';
=======
import Home from './Pages/Home';
>>>>>>> origin/login

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/mainpage" element={<MainPage />} />
<<<<<<< HEAD
      <Route path="/welcomepage" element={<WelcomePage />} />
=======
      <Route path="/home" element={<Home />} />
>>>>>>> origin/login
      
    </Routes>
  </BrowserRouter>
  )
}
export default App;
