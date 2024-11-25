/* 
Name: Shailendra Kumar Karki
Student id: 8895277
Email: skarki5277@conestogac.on.ca
 */import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import GuidePage from './pages/GuidePage.jsx';
import DetailPage from './components/DetailPage.jsx';
import './assets/style.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recycling" element={<GuidePage />} />
          <Route path="/details/:itemName" element={<DetailPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
