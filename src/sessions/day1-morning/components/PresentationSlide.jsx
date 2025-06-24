import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './PresentationSlide.css';

const PresentationSlide = ({ slide }) => {
  const [activeObjective, setActiveObjective] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const titleVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  };

  const contentVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 80
      }
    }
  };

  const objectiveVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  };

  return (
    <div className="presentation-slide">
      {/* Animated background pattern */}
      <div className="presentation-background">
        <svg className="background-svg" width="100%" height="100%">
          {[...Array(5)].map((_, i) => (
            <motion.circle
              key={i}
              cx={`${20 + i * 20}%`}
              cy={`${30 + (i % 3) * 20}%`}
              r="150"
              fill="none"
              stroke="var(--ifc-blue)"
              strokeWidth="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: 0.1,
                rotate: 360
              }}
              transition={{
                pathLength: { duration: 2, delay: i * 0.2 },
                opacity: { duration: 1, delay: i * 0.2 },
                rotate: { duration: 20 + i * 5, repeat: Infinity, ease: "linear" }
              }}
            />
          ))}
        </svg>
      </div>

      <motion.div 
        className="presentation-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header section */}
        <div className="presentation-header">
          <motion.h2
            className="presentation-title"
            variants={titleVariants}
          >
            {slide.title}
          </motion.h2>
          
          {slide.subtitle && (
            <motion.h3
              className="presentation-subtitle"
              variants={titleVariants}
            >
              {slide.subtitle}
            </motion.h3>
          )}
        </div>

        {/* Main content */}
        {slide.content && (
          <motion.div
            className="content-wrapper"
            variants={contentVariants}
          >
            {typeof slide.content === 'string' ? (
              <div className="content-card">
                <motion.p 
                  className="content-text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {slide.content}
                </motion.p>
              </div>
            ) : (
              <div className="content-complex">
                {slide.content.title && (
                  <h3 className="content-title">{slide.content.title}</h3>
                )}
                {slide.content.text && Array.isArray(slide.content.text) && (
                  <div className="content-paragraphs">
                    {slide.content.text.map((paragraph, index) => (
                      <motion.p
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                      >
                        {paragraph}
                      </motion.p>
                    ))}
                  </div>
                )}
              </div>
            )}
          </motion.div>
        )}

        {/* Objectives section with enhanced design */}
        {slide.objectives && (
          <motion.div
            className="objectives-container"
            variants={contentVariants}
          >
            <div className="objectives-header">
              <h4 className="objectives-title">
                <span className="objectives-icon">🎯</span>
                Objectifs d'apprentissage
              </h4>
            </div>
            
            <div className="objectives-grid">
              {slide.objectives.map((objective, index) => (
                <motion.div
                  key={index}
                  className={`objective-card ${activeObjective === index ? 'active' : ''}`}
                  variants={objectiveVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onMouseEnter={() => setActiveObjective(index)}
                  onMouseLeave={() => setActiveObjective(null)}
                >
                  <div className="objective-number">
                    <span>{index + 1}</span>
                  </div>
                  <div className="objective-content">
                    <p>{objective}</p>
                  </div>
                  <motion.div
                    className="objective-highlight"
                    initial={{ width: 0 }}
                    animate={{ width: activeObjective === index ? '100%' : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Bullet points with modern design */}
        {slide.bulletPoints && (
          <motion.div
            className="bullet-points-container"
            variants={contentVariants}
          >
            <ul className="bullet-points">
              {slide.bulletPoints.map((point, index) => (
                <motion.li
                  key={index}
                  className="bullet-point"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <span className="bullet-icon">▸</span>
                  <span className="bullet-text">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Sections with cards layout */}
        {slide.content?.sections && Array.isArray(slide.content.sections) && (
          <div className="content-sections">
            {slide.content.sections.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                className="section-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + sectionIndex * 0.2 }}
                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0, 92, 169, 0.2)" }}
              >
                {section.title && (
                  <h4 className="section-title">{section.title}</h4>
                )}
                {section.points && (
                  <ul className="section-points">
                    {section.points.map((point, pointIndex) => (
                      <motion.li
                        key={pointIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + sectionIndex * 0.2 + pointIndex * 0.05 }}
                      >
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        )}

        {/* Decorative elements */}
        <div className="presentation-decorations">
          <motion.div
            className="decoration-corner top-left"
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          />
          <motion.div
            className="decoration-corner bottom-right"
            initial={{ scale: 0, rotate: 45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default PresentationSlide;