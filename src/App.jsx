import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import './App.css';
import Register from './Pages/Register';
import Login from './Pages/Login';
import WelcomePage from './Pages/WelcomePage';
import Test from './Pages/Test';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/mainpage" element={<MainPage />} />
      <Route path="/welcomepage" element={<WelcomePage />} />
      <Route path="/test" element={<Test />} />
      
    </Routes>
  </BrowserRouter>
  )
}
export default App;
