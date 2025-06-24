import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './AfternoonBreakSlide.css';

const AfternoonBreakSlide = ({ slide }) => {
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
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="afternoon-break-slide">
      {/* Subtle animated background */}
      <div className="break-bg-pattern">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="bg-circle"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.03, 0.06, 0.03]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              width: `${300 + i * 100}px`,
              height: `${300 + i * 100}px`
            }}
          />
        ))}
      </div>

      <motion.div
        className="break-content-wrapper"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Icon */}
        <motion.div className="break-icon-container" variants={itemVariants}>
          <div className="break-icon-circle">
            <span className="break-icon">☕</span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1 className="break-main-title" variants={itemVariants}>
          Pause Café
        </motion.h1>

        {/* Time info */}
        <motion.div className="break-time-info" variants={itemVariants}>
          <div className="time-block">
            <span className="time-label">Horaires</span>
            <span className="time-value">15h30 - 15h45</span>
          </div>
          <div className="time-block current">
            <span className="time-label">Heure actuelle</span>
            <span className="time-value">
              {currentTime.toLocaleTimeString('fr-FR', { 
                hour: '2-digit', 
                minute: '2-digit'
              })}
            </span>
          </div>
          <div className="time-block">
            <span className="time-label">Durée</span>
            <span className="time-value">15 minutes</span>
          </div>
        </motion.div>

        {/* Message */}
        <motion.p className="break-message-text" variants={itemVariants}>
          Temps d'expérimenter avec les outils présentés !
        </motion.p>

        {/* Activities */}
        <motion.div className="break-activities-grid" variants={itemVariants}>
          <div className="activity-card">
            <span className="activity-emoji">☕</span>
            <span className="activity-label">Café</span>
          </div>
          <div className="activity-card">
            <span className="activity-emoji">🚶</span>
            <span className="activity-label">Marche</span>
          </div>
          <div className="activity-card">
            <span className="activity-emoji">💬</span>
            <span className="activity-label">Discussion</span>
          </div>
          <div className="activity-card">
            <span className="activity-emoji">🧘</span>
            <span className="activity-label">Détente</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AfternoonBreakSlide;