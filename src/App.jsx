import React from 'react'
import { useState } from 'react'
import logo from './assets/logo.jpg'
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Hero from './components/Hero';
function App() {
const [isToggle, setIsToggle] = useState(false)
  return (
    <>
      <div className={isToggle ? "bg-black h-screen" : "bg-white"}>
      <Navbar />
      <HomePage />
      </div>
    </>
  );
}

export default App
