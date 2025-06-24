import React from 'react';
import { motion } from 'framer-motion';
import './ToolCategorySlide.css';

const ToolCategorySlide = ({ slide }) => {
  const { title, description, tools, icon } = slide.category;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <div className="tool-category-slide-v2">
      <motion.div 
        className="category-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div className="category-header-v2" variants={itemVariants}>
          <div className="category-icon-v2">{icon}</div>
          <h2 className="category-title-v2">{title}</h2>
          <p className="category-desc-v2">{description}</p>
        </motion.div>

        {/* Tools Grid - Compact */}
        <motion.div className="tools-grid-v2" variants={itemVariants}>
          {tools.slice(0, 6).map((tool, index) => (
            <motion.div
              key={index}
              className="tool-card-v2"
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <div className="tool-header-v2">
                <h4 className="tool-name-v2">{tool.name}</h4>
                <span className="tool-company-v2">{tool.company}</span>
              </div>
              <p className="tool-desc-v2">{tool.shortDescription}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer stats */}
        <motion.div className="category-footer-v2" variants={itemVariants}>
          <div className="stat-v2">
            <span className="stat-num">{tools.length}</span>
            <span className="stat-label">Outils</span>
          </div>
          <div className="stat-v2">
            <span className="stat-num">100%</span>
            <span className="stat-label">Gratuits</span>
          </div>
          <div className="stat-v2">
            <span className="stat-num">24/7</span>
            <span className="stat-label">Disponibles</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ToolCategorySlide;