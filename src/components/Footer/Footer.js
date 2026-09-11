import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaHamburger } from 'react-icons/fa';
import './Footer.scss';

const Footer = () => {
  // Dynamically display the current year in the copyright notice
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* About Section */}
          <motion.div
            className="footer-about"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="footer-logo">
              <FaHamburger className="burger-icon" />
              <span>Burger Shop</span>
            </div>
            <p className="footer-description">
              Serving the juiciest, most delicious burgers. 
              We use only the freshest ingredients to create memorable 
              burger experiences for our customers.
            </p>
            <div className="social-links">
              <motion.a href="#" whileHover={{ y: -5 }} aria-label="Facebook">
                <FaFacebook />
              </motion.a>
              <motion.a href="#" whileHover={{ y: -5 }} aria-label="Instagram">
                <FaInstagram />
              </motion.a>
              <motion.a href="#" whileHover={{ y: -5 }} aria-label="Twitter">
                <FaTwitter />
              </motion.a>
              <motion.a href="#" whileHover={{ y: -5 }} aria-label="YouTube">
                <FaYoutube />
              </motion.a>
            </div>
          </motion.div>
        </div>
        {/* Footer bottom with dynamic year */}
        <div className="footer-bottom">
          <p>© {currentYear} Burger Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
