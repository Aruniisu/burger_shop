import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaHamburger, FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope } from 'react-icons/fa';
import './Footer.scss';

const Footer = () => {
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
              <span>Burger Bliss</span>
            </div>
            <p className="footer-description">
              Serving the juiciest, most delicious burgers. 
              We use only the freshest ingredients to create memorable 
              burger experiences for our customers.
            </p>
            <div className="social-links">
              <motion.a 
                href="#" 
                whileHover={{ y: -5 }}
                aria-label="Facebook"
              >
                <FaFacebook />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ y: -5 }}
                aria-label="Instagram"
              >
                <FaInstagram />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ y: -5 }}
                aria-label="Twitter"
              >
                <FaTwitter />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ y: -5 }}
                aria-label="YouTube"
              >
                <FaYoutube />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="footer-links"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="footer-heading">Quick Links</h3>
            <ul>
              <motion.li whileHover={{ x: 5 }}>
                <a href="#">Home</a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a href="#">Menu</a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a href="#">About Us</a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a href="#">Testimonials</a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a href="#">Contact</a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a href="#">Privacy Policy</a>
              </motion.li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="footer-contact"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="footer-heading">Contact Us</h3>
            <ul className="contact-info">
              <li>
                <FaMapMarkerAlt className="contact-icon" />
                <span>123 Burger Street, Foodie City, FC 12345</span>
              </li>
              <li>
                <FaPhone className="contact-icon" />
                <span>(123) 456-7890</span>
              </li>
              <li>
                <FaEnvelope className="contact-icon" />
                <span>hello@burgershop.com</span>
              </li>
              <li>
                <FaClock className="contact-icon" />
                <div>
                  <p>Mon-Fri: 11am - 10pm</p>
                  <p>Sat-Sun: 10am - 11pm</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div 
            className="footer-newsletter"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="footer-heading">Newsletter</h3>
            <p>Subscribe to get updates on new menu items and special offers!</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Your Email" 
                required 
              />
              <motion.button 
                type="submit"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;