import React from 'react'
import { Routes, Route } from "react-router-dom";
import logo from './assets/logo.jpg'
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
function App() {
  return (
    <>
      <div className="bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* <Route path="*" element={<NotFound />} /> Handles 404 */}
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App
