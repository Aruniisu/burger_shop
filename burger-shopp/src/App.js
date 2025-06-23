import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Menu from './components/Menu/Menu';
import About from './components/About/About';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './assets/styles/main.scss';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header appears on all pages */}
        <Header />
        
        <main>
          <Routes>
            {/* Home Page (combines multiple sections) */}
            <Route path="/" element={
              <>
                <Hero />
                <Menu />
                <About />
                <Testimonials />
                <Contact />
              </>
            } />
            
            {/* Individual Pages (if you want separate routes) */}
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        {/* Footer appears on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;