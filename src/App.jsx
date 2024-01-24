import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Header from './components/Header'
import Footer from './components/Footer'
import Detail from './pages/Detail/Detail'
import NotFound from './pages/404/404'


//ICI LE ROUTER ET L'APPEL A HOME.JSX & HEADER.JSX 

function App() {
  return (
    <Router>
      <Header />
      <Routes>

        {/* Route pour la page d'accueil */}
        <Route path="/accueil" element={<Home />} />

        <Route path="/" element={<Home />} />

        {/* Route pour la page a propos */}
        <Route path="/a-propos" element={<About />} />

        {/* card */}
        <Route path="/detail/:id" element={<Detail />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

