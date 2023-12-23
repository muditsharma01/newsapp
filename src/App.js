// 'App.js'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import News from './Components/News';
import Login from './Components/Login';
import Register from './Components/Register';
import FavouriteArticles from './Components/FavoriteArticles';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<News />} />
        <Route path="/favorite-articles" element={<FavouriteArticles />} />
      </Routes>
    </Router>
  );
}

export default App;
