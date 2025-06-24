import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './TimelineSlide.css';

const TimelineSlide = ({ slide }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Animation variants
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

  const leftPanelVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 80
      }
    }
  };

  const rightPanelVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 80
      }
    }
  };

  const yearVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        duration: 0.8
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="timeline-slide">
      <motion.div
        className="timeline-background-pattern"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="timeline-pattern-line"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            style={{ top: `${i * 20}%` }}
          />
        ))}
      </motion.div>

      <motion.div
        className="timeline-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="timeline-left"
          variants={leftPanelVariants}
        >
          <motion.div className="year-container">
            <motion.h2 
              className="year"
              variants={yearVariants}
            >
              {slide.year}
            </motion.h2>
            <motion.div
              className="year-decoration"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
          </motion.div>

          <motion.div 
            className="timeline-image-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            variants={imageVariants}
          >
            <AnimatePresence>
              {!imageLoaded && (
                <motion.div
                  className="image-loader"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="loader-spinner" />
                </motion.div>
              )}
            </AnimatePresence>
            
            <motion.img
              src={slide.image}
              alt={slide.event}
              className="timeline-image"
              onLoad={() => setImageLoaded(true)}
              animate={{
                scale: isHovered ? 1.05 : 1,
                filter: isHovered ? "brightness(1.1)" : "brightness(1)"
              }}
              transition={{ duration: 0.3 }}
            />
            
            <motion.div
              className="image-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <span className="image-caption">{slide.imageCaption || slide.event}</span>
            </motion.div>
          </motion.div>

          {/* Timeline dots */}
          <motion.div className="timeline-dots">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="timeline-dot"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8 + i * 0.1 }}
              />
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          className="timeline-right"
          variants={rightPanelVariants}
        >
          <motion.div className="content-wrapper">
            <motion.h3
              className="event-title"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {slide.event}
            </motion.h3>
            
            <motion.p
              className="event-description"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {slide.description}
            </motion.p>
            
            {slide.significance && (
              <motion.div
                className="significance-container"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <div className="significance-icon">💡</div>
                <p className="significance">{slide.significance}</p>
              </motion.div>
            )}

            {slide.facts && (
              <motion.div
                className="facts-container"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <h4 className="facts-title">Faits marquants</h4>
                <ul className="facts-list">
                  {slide.facts.map((fact, index) => (
                    <motion.li
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 1.3 + index * 0.1 }}
                    >
                      {fact}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </motion.div>

          {/* Decorative timeline line */}
          <motion.div
            className="vertical-timeline"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          />
        </motion.div>
      </motion.div>

      {/* Floating elements */}
      <div className="floating-elements">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="floating-element"
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5
            }}
            style={{
              left: `${20 + i * 20}%`,
              top: `${10 + i * 15}%`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TimelineSlide;