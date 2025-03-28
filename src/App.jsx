import React from 'react'
import { useState } from 'react'
import logo from './assets/logo.jpg'
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <div className='bg-black'>
      <Navbar />
      <HomePage />
      <Footer />
      </div>
    </>
  );
}

export default App
