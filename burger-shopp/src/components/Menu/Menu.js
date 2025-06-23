import React from 'react';
import { motion } from 'framer-motion';
import './Menu.scss';

const menuItems = [
  {
    id: 1,
    name: 'Classic Bliss',
    description: 'Our signature burger with juicy beef patty, cheese, lettuce, tomato, and special sauce',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 2,
    name: 'Cheesy Delight',
    description: 'Double cheese with caramelized onions, pickles, and mustard on a toasted bun',
    price: 10.99,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    name: 'Veggie Wonder',
    description: 'Plant-based patty with avocado, sprouts, and vegan mayo for our vegetarian friends',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1550317138-10000687a72b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    name: 'Spicy Fire',
    description: 'For heat lovers! Jalapeños, spicy mayo, and pepper jack cheese on a fiery patty',
    price: 11.99,
    image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 5,
    name: 'BBQ Bacon',
    description: 'Smoky BBQ sauce, crispy bacon, cheddar cheese, and onion rings',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    name: 'Mushroom Swiss',
    description: 'Sautéed mushrooms, Swiss cheese, and garlic aioli on a brioche bun',
    price: 11.49,
    image: 'https://images.unsplash.com/photo-1547584370-2cc98b8b8dc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

const Menu = () => {
  return (
    <section className="menu" id="menu">
      <div className="container">
        <h2 className="section-title">Our Delicious Menu</h2>
        <p className="section-subtitle">Handcrafted with love and the freshest ingredients</p>
        
        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <motion.div 
              key={item.id}
              className={`menu-item ${item.popular ? 'popular' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {item.popular && <span className="popular-badge">Popular</span>}
              <div className="menu-item-img">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="menu-item-content">
                <div className="menu-item-header">
                  <h3>{item.name}</h3>
                  <span className="price">${item.price.toFixed(2)}</span>
                </div>
                <p>{item.description}</p>
                <motion.button 
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Add to Cart
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;