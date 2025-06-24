import React from 'react';
import { motion } from 'framer-motion';
import './AfternoonTitleSlide.css';

const AfternoonTitleSlide = ({ slide }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  const subtitleVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      x: -30
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const infoVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const toolIconVariants = {
    animate: {
      rotate: [0, 360],
      scale: [1, 1.1, 1],
      transition: {
        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
        scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
      }
    }
  };

  return (
    <div className="afternoon-title-slide">
      {/* Animated background pattern */}
      <div className="afternoon-background-pattern">
        <div className="tool-grid">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="tool-icon-bg"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0.05, 0.15, 0.05],
                scale: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 4,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {['🎨', '🤖', '💡', '🚀', '✨', '🔧'][i % 6]}
            </motion.div>
          ))}
        </div>
        
        {/* Floating particles */}
        <div className="floating-particles">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              animate={{
                y: [-20, -100],
                x: [0, (i % 2 === 0 ? 20 : -20)],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeOut"
              }}
              style={{
                left: `${10 + i * 12}%`,
                bottom: '-20px'
              }}
            />
          ))}
        </div>
      </div>

      <motion.div 
        className="afternoon-title-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main title with animated icon */}
        <motion.div className="title-wrapper" variants={titleVariants}>
          <motion.div 
            className="title-icon"
            variants={toolIconVariants}
            animate="animate"
          >
            🛠️
          </motion.div>
          <h1 className="afternoon-main-title">
            {slide?.title || 'Outils IA Pratiques'}
          </h1>
        </motion.div>
        
        {/* Animated subtitle */}
        <motion.h2 
          className="afternoon-subtitle"
          variants={subtitleVariants}
        >
          {slide?.subtitle || "Mode d'emploi des Technologies IA pour l'Institut Français"}
        </motion.h2>

        {/* Session divider */}
        <motion.div 
          className="session-divider"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 1 }}
        />
        
        {/* Presenter info with staggered animation */}
        <motion.div 
          className="afternoon-presenter-info"
          variants={infoVariants}
        >
          <motion.p 
            className="session-info"
            whileHover={{ scale: 1.05 }}
          >
            <span className="info-icon">🕐</span>
            Session Après-midi • 14h00 - 17h00
          </motion.p>
          
          <motion.p 
            className="presenter-name"
            whileHover={{ scale: 1.05 }}
          >
            <span className="info-icon">👨‍🏫</span>
            {slide?.presenter || 'Formation IA IFC'}
          </motion.p>
          
          <motion.p 
            className="organization"
            whileHover={{ scale: 1.05 }}
          >
            <span className="info-icon">🏛️</span>
            {slide?.organization || 'Institut Français du Cambodge'}
          </motion.p>
          
          <motion.p 
            className="date"
            whileHover={{ scale: 1.05 }}
          >
            <span className="info-icon">📅</span>
            {slide?.date || 'Juin 2025'}
          </motion.p>
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="cta-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.p 
            className="cta-text"
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Découvrez les outils qui transformeront votre travail quotidien
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Interactive decorative elements */}
      <div className="afternoon-decorations">
        <motion.div
          className="decoration-gear"
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="decoration-ai-chip"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  );
};

export default AfternoonTitleSlide;