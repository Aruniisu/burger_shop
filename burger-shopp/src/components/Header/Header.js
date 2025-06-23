import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHamburger, FaShoppingCart, FaTimes, FaBars } from 'react-icons/fa';
import './Header.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', link: '/' },
    { name: 'Menu', link: '/menu' },
    { name: 'About', link: '/about' },
    { name: 'Testimonials', link: '/testimonials' },
    { name: 'Contact', link: '/contact' },
  ];

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <motion.div 
            className="logo"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaHamburger className="burger-icon" />
            <span>Burger Shop</span>
          </motion.div>

          <div className={`nav-links ${isOpen ? 'active' : ''}`}>
            {navLinks.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, color: '#ff6b6b' }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          <motion.div 
            className="cart"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
          >
            <FaShoppingCart />
            <span className="cart-count">0</span>
          </motion.div>

          <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;