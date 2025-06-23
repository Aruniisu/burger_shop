import React from 'react';
import { motion } from 'framer-motion';
import './About.scss';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Burger Shop" />
          </motion.div>
          
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Story</h2>
            <p>
              Founded in 2010, Burger Shop started as a small food truck with a big dream - to serve the most delicious, 
              juicy burgers in town. Our passion for quality ingredients and perfect flavors quickly made us a local favorite.
            </p>
            <p>
              Today, we're proud to be a community staple, still using the same secret family recipes and locally-sourced 
              ingredients that made us famous. Every burger is made with love and attention to detail.
            </p>
            <p>
              We believe in sustainability, supporting local farmers, and creating a welcoming space where everyone feels 
              at home. Come taste the difference that passion makes!
            </p>
            <motion.button 
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;