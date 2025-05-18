import React from 'react'
import { Routes, Route } from "react-router-dom";
import logo from './assets/logo.jpg'
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import DurumiSite1 from './pages/Projects/DurumiSite1';
import DurumiSite2 from './pages/Projects/DurumiSite2';
import Projects from './pages/Projects/index'
import AdminEditor from './pages/AdminEditor'
import SinglePost from './pages/SinglePost'
function App() {
  return (
    <>
      <div className=" bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/durumisite1" element={<DurumiSite1 />} />
          <Route path="/durumisite2" element={<DurumiSite2 />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/admin/editor" element={<AdminEditor />} />
          <Route path="/blog/:slug" element={<SinglePost />} />
          {/* <Route path="*" element={<NotFound />} /> Handles 404 */}
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App
