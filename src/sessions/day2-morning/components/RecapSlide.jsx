import React from 'react';
import { motion } from 'framer-motion';
import './RecapSlide.css';

const RecapSlide = ({ slide }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const getColorClasses = (color) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-800 border-blue-200',
      purple: 'bg-purple-100 text-purple-800 border-purple-200',
      green: 'bg-green-100 text-green-800 border-green-200'
    };
    return colorMap[color] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const getIconBackground = (color) => {
    const colorMap = {
      blue: 'bg-blue-500',
      purple: 'bg-purple-500',
      green: 'bg-green-500'
    };
    return colorMap[color] || 'bg-gray-500';
  };

  return (
    <div className="recap-slide">
      <motion.div
        className="recap-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="recap-header"
          variants={itemVariants}
        >
          <h1 className="recap-main-title">{slide.title}</h1>
          <p className="recap-subtitle">{slide.subtitle}</p>
        </motion.div>

        <motion.div 
          className="categories-grid"
          variants={itemVariants}
        >
          {slide.content.categories.map((category, index) => (
            <motion.div
              key={index}
              className={`category-card ${getColorClasses(category.color)}`}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.2 }
              }}
            >
              <div className="category-header">
                <div className={`category-icon-wrapper ${getIconBackground(category.color)}`}>
                  <span className="category-icon">{category.icon}</span>
                </div>
                <h3 className="category-title">{category.title}</h3>
              </div>

              <div className="tools-list">
                {category.tools.map((tool, toolIndex) => (
                  <motion.div
                    key={toolIndex}
                    className="tool-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      transition: { 
                        delay: 0.3 + (index * 0.1) + (toolIndex * 0.1),
                        duration: 0.4
                      }
                    }}
                  >
                    <div className="tool-checkmark">✓</div>
                    <div className="tool-content">
                      <span className="tool-name">{tool.name}</span>
                      <span className="tool-purpose">{tool.purpose}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="recap-conclusion"
          variants={itemVariants}
        >
          <div className="conclusion-content">
            <div className="conclusion-icon">🎯</div>
            <p className="conclusion-text">{slide.content.conclusion}</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Duration indicator */}
      {slide.duration && (
        <div className="duration-indicator">
          <span>{slide.duration}</span>
        </div>
      )}

      {/* Background decoration */}
      <div className="recap-background">
        <div className="floating-element element-1">💬</div>
        <div className="floating-element element-2">🎨</div>
        <div className="floating-element element-3">🛠️</div>
        <div className="floating-element element-4">🚀</div>
      </div>
    </div>
  );
};

export default RecapSlide; 