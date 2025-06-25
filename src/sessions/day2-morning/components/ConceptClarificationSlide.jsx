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

  const conceptVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
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

        {slide.content && (
          <motion.div className="concept-body" variants={itemVariants}>
            {/* Objective section */}
            {slide.content.objective && (
              <motion.div className="objective-section" variants={itemVariants}>
                <h3>🎯 Objectif</h3>
                <p>{slide.content.objective}</p>
              </motion.div>
            )}

            {/* Concepts grid */}
            {slide.content.concepts && (
              <motion.div className="concepts-section" variants={itemVariants}>
                <h3>📚 Concepts Clés</h3>
                <div className="concepts-grid">
                  {slide.content.concepts.map((concept, index) => (
                    <motion.div
                      key={index}
                      className="concept-card"
                      variants={conceptVariants}
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="concept-term">
                        <h4>{concept.term}</h4>
                        <span className="concept-metaphor">({concept.metaphor})</span>
                      </div>
                      <div className="concept-definition">
                        <p>{concept.definition}</p>
                      </div>
                      <div className="concept-example">
                        <strong>Exemple :</strong> {concept.example}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Summary section */}
            {slide.content.summary && (
              <motion.div className="summary-section" variants={itemVariants}>
                <h3>📝 Résumé</h3>
                <p className="summary-text">{slide.content.summary}</p>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Time indicator */}
        {slide.time && (
          <motion.div className="time-indicator" variants={itemVariants}>
            <span>{slide.time}</span>
          </motion.div>
        )}
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