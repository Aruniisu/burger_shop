import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import './Testimonials.scss';

const testimonials = [
  {
    id: 1,
    
    role: 'Food Blogger',
    comment: 'The best burgers in town! The Classic Bliss is my absolute favorite. Juicy, flavorful, and always cooked to perfection.',
    rating: 5,
  },
  {
    id: 2,

    role: 'Regular Customer',
    comment: 'I come here every Friday with my family. The kids love the cheesy burgers, and I\'m addicted to the Spicy Fire!',
    rating: 4,
  },
  {
    id: 3,
    
    role: 'Vegetarian',
    comment: 'As a vegetarian, I appreciate having such a delicious option. The Veggie Wonder is packed with flavor and texture!',
    rating: 5,
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>
        <p className="section-subtitle">Don't just take our word for it</p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              className="testimonial-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="quote-icon">
                <FaQuoteLeft />
              </div>
              <p className="testimonial-text">{testimonial.comment}</p>
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < testimonial.rating ? 'filled' : 'empty'} />
                ))}
              </div>
              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.name} />
                <div>
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;