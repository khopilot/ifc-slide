import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './BreakSlide.css';

const BreakSlide = ({ slide }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        duration: 0.8
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="break-slide">
      {/* Subtle background elements */}
      <div className="break-background">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="break-bg-circle"
            animate={{ 
              scale: [1, 1.05, 1], 
            }}
            transition={{
              duration: 6,
              delay: i * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              width: `${200 + i * 150}px`,
              height: `${200 + i * 150}px`,
              opacity: 0.05
            }}
          />
        ))}
      </div>

      <motion.div
        className="break-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Icon with subtle animation */}
        {slide.icon && (
          <motion.div className="break-icon-wrapper" variants={itemVariants}>
            <div className="break-icon-bg" />
            <motion.div
              className="break-icon"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="icon">{slide.icon}</span>
            </motion.div>
          </motion.div>
        )}

        <motion.h2
          className="break-title"
          variants={itemVariants}
        >
          {slide.title}
        </motion.h2>

        {/* Time display with live clock */}
        <motion.div
          className="break-time-container"
          variants={itemVariants}
        >
          {slide.time && (
            <div className="break-time-slot">
              <span className="time-label">Horaires</span>
              <span className="time-value">{slide.time}</span>
            </div>
          )}
          
          <div className="break-current-time">
            <span className="time-label">Heure actuelle</span>
            <span className="time-value">
              {currentTime.toLocaleTimeString('fr-FR', { 
                hour: '2-digit', 
                minute: '2-digit',
                second: '2-digit'
              })}
            </span>
          </div>

          {slide.duration && (
            <div className="break-duration-slot">
              <span className="time-label">Durée</span>
              <span className="time-value">{slide.duration}</span>
            </div>
          )}
        </motion.div>

        {/* Progress indicator */}
        <motion.div
          className="break-progress"
          variants={itemVariants}
        >
          <div className="progress-track">
            <motion.div
              className="progress-fill"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 60, ease: "linear" }}
            />
          </div>
        </motion.div>

        {/* Message */}
        {slide.message && (
          <motion.div
            className="break-message-wrapper"
            variants={itemVariants}
          >
            <p className="break-message">{slide.message}</p>
          </motion.div>
        )}

        {/* Menu section for lunch break */}
        {slide.menu && (
          <motion.div
            className="break-menu"
            variants={itemVariants}
          >
            <h3 className="menu-title">
              <span className="menu-icon">🍴</span>
              {slide.menu.title}
            </h3>
            <div className="menu-items">
              {slide.menu.items.map((item, index) => (
                <motion.div
                  key={index}
                  className="menu-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.8 + index * 0.15 }}
                  whileHover={{ x: 10 }}
                >
                  <span className="menu-course">
                    {index === 0 ? 'Entrée' : index === 1 ? 'Plat principal' : 'Dessert'}
                  </span>
                  <p className="menu-description">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Activities suggestions */}
        {!slide.menu && (
          <motion.div
            className="break-activities"
            variants={itemVariants}
          >
            <h3 className="activities-title">Suggestions pendant la pause</h3>
            <div className="activities-grid">
              <motion.div
                className="activity-card"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="activity-icon">☕</span>
                <span className="activity-text">Café & Thé</span>
              </motion.div>
              <motion.div
                className="activity-card"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="activity-icon">🚶</span>
                <span className="activity-text">Étirement</span>
              </motion.div>
              <motion.div
                className="activity-card"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="activity-icon">💬</span>
                <span className="activity-text">Networking</span>
              </motion.div>
              <motion.div
                className="activity-card"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="activity-icon">📱</span>
                <span className="activity-text">Check-in</span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Subtle decorative elements */}
      <div className="break-decorations">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="decoration-element"
            animate={{
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 4,
              delay: i * 1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              left: `${20 + i * 20}%`,
              top: `${15 + (i % 2) * 60}%`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BreakSlide;