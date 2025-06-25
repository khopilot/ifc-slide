import React from 'react';
import { motion } from 'framer-motion';
import './LunchSlide.css';

const LunchSlide = ({ slide }) => {
  const menuItems = [
    {
      type: 'Entrée',
      icon: '🐟',
      name: 'Tartare de poisson à l\'asiatique',
      description: 'Pain craquant et tuile de parmesan',
      color: '#60a5fa'
    },
    {
      type: 'Plat',
      icon: '🍗',
      name: 'Blanquette de volaille',
      description: 'Penne rigate',
      color: '#fbbf24'
    },
    {
      type: 'Dessert',
      icon: '🍫',
      name: 'Fondant frais au chocolat',
      description: 'Crème anglaise au poivre rouge FRAIS',
      color: '#f87171'
    }
  ];

  return (
    <div className="lunch-slide">
      <motion.div 
        className="lunch-content"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="lunch-header">
          <motion.h1 
            className="lunch-title"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {slide.title}
          </motion.h1>
          <motion.div 
            className="lunch-icon"
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            {slide.icon}
          </motion.div>
        </div>

        <motion.div 
          className="lunch-details"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="time-info">
            <span className="time-icon">🕐</span>
            <span className="time-text">{slide.time}</span>
          </div>
          <div className="duration-info">
            <span className="duration-icon">⏱️</span>
            <span className="duration-text">{slide.duration}</span>
          </div>
        </motion.div>

        <motion.h2 
          className="menu-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Menu du Jour
        </motion.h2>

        <div className="menu-items">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              className="menu-item"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              style={{ '--item-color': item.color }}
            >
              <div className="item-icon">{item.icon}</div>
              <div className="item-content">
                <div className="item-type">{item.type}</div>
                <h3 className="item-name">{item.name}</h3>
                <p className="item-description">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="lunch-message"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <p>{slide.message}</p>
        </motion.div>

        <motion.div 
          className="decorative-elements"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="decoration-1">🥂</div>
          <div className="decoration-2">🍽️</div>
          <div className="decoration-3">✨</div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LunchSlide;