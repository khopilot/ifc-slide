import React from 'react';
import { motion } from 'framer-motion';
import './TitleSlide.css';

const TitleSlide = ({ slide }) => {
  // Animations variants pour une meilleure organisation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const titleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        duration: 0.8
      }
    }
  };

  const decorativeElements = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2, ease: "easeInOut" },
        opacity: { duration: 0.5 }
      }
    }
  };

  return (
    <div className="title-slide">
      {/* Background decorative elements */}
      <div className="background-decoration">
        <motion.svg
          className="decorative-shape decorative-shape-1"
          viewBox="0 0 200 200"
          initial="hidden"
          animate="visible"
        >
          <motion.circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            variants={decorativeElements}
          />
        </motion.svg>
        <motion.svg
          className="decorative-shape decorative-shape-2"
          viewBox="0 0 200 200"
          initial="hidden"
          animate="visible"
        >
          <motion.rect
            x="50"
            y="50"
            width="100"
            height="100"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            transform="rotate(45 100 100)"
            variants={decorativeElements}
          />
        </motion.svg>
      </div>

      <motion.div
        className="title-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {slide.logo && (
          <motion.div className="logo-wrapper" variants={itemVariants}>
            <img src={slide.logo} alt="Logo" className="slide-logo" />
          </motion.div>
        )}

        <motion.h1
          className="main-title"
          variants={titleVariants}
        >
          {slide.title.split(' ').map((word, index) => (
            <motion.span
              key={index}
              className="title-word"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index + 0.5 }}
            >
              {word}{' '}
            </motion.span>
          ))}
        </motion.h1>
        
        {slide.subtitle && (
          <motion.div className="subtitle-wrapper" variants={itemVariants}>
            <div className="subtitle-line" />
            <h2 className="subtitle">{slide.subtitle}</h2>
            <div className="subtitle-line" />
          </motion.div>
        )}
        
        {slide.presenter && (
          <motion.div
            className="presenter-info"
            variants={itemVariants}
          >
            <div className="presenter-card">
              <p className="presenter-name">{slide.presenter}</p>
              {slide.organization && (
                <p className="organization">{slide.organization}</p>
              )}
            </div>
          </motion.div>
        )}
        
        {slide.date && (
          <motion.div
            className="date-wrapper"
            variants={itemVariants}
          >
            <span className="date-icon">📅</span>
            <p className="date">{slide.date}</p>
          </motion.div>
        )}

        {/* Animated bottom decoration */}
        <motion.div
          className="bottom-decoration"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
        />
      </motion.div>

      {/* Particle effects */}
      <div className="particles">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: [0, (i - 2) * 100],
              y: [0, -200]
            }}
            transition={{
              duration: 3,
              delay: i * 0.3 + 1,
              repeat: Infinity,
              repeatDelay: 2
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TitleSlide;