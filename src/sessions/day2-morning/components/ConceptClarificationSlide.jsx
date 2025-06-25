import React from 'react';
import { motion } from 'framer-motion';
import './ConceptClarificationSlide.css';

const ConceptClarificationSlide = ({ slide }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="concept-clarification-slide">
      <motion.div
        className="concept-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="concept-header" variants={itemVariants}>
          <h1 className="concept-title">{slide.title}</h1>
          {slide.subtitle && <p className="concept-subtitle">{slide.subtitle}</p>}
        </motion.div>

        <motion.div className="concept-body" variants={itemVariants}>
          {slide.content && (
            <div className="concept-main">
              {slide.content.definition && (
                <div className="definition-section">
                  <h3>🎯 Définition</h3>
                  <p>{slide.content.definition}</p>
                </div>
              )}

              {slide.content.key_points && (
                <div className="key-points-section">
                  <h3>📋 Points Clés</h3>
                  <ul className="key-points-list">
                    {slide.content.key_points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}

              {slide.content.examples && (
                <div className="examples-section">
                  <h3>💡 Exemples</h3>
                  <div className="examples-grid">
                    {slide.content.examples.map((example, index) => (
                      <div key={index} className="example-card">
                        <h4>{example.title}</h4>
                        <p>{example.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </motion.div>
      </motion.div>

      {/* Duration indicator */}
      {slide.duration && (
        <div className="duration-indicator">
          <span>{slide.duration}</span>
        </div>
      )}
    </div>
  );
};

export default ConceptClarificationSlide;