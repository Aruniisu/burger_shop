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
              <span>Burger Shop</span>
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

          {/* Contact Section */}
          <motion.div 
            className="footer-contact"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>Contact Us</h3>
            <p><FaPhone /> +1 (555) 123‑4567</p>
            <p><FaMapMarkerAlt /> 123 Burger Lane, Food City</p>
            <p><FaEnvelope /> info@burgershop.com</p>
            <p><FaClock /> Mon‑Fri: 10am – 10pm</p>
          </motion.div>
        </div>
        <motion.p 
          className="footer-copy"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          © {currentYear} Burger Shop. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;