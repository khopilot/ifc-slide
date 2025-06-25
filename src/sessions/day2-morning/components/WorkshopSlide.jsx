import React from 'react';
import { motion } from 'framer-motion';
import './WorkshopSlide.css';

const WorkshopSlide = ({ slide }) => {
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
    <div className={`workshop-slide ${slide.type}`}>
      <motion.div
        className="workshop-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="workshop-header" variants={itemVariants}>
          <h1 className="workshop-title">{slide.title}</h1>
          <p className="workshop-subtitle">{slide.subtitle}</p>
        </motion.div>

        {slide.type === 'practical-workshop' && slide.content && (
          <motion.div className="workshop-body" variants={itemVariants}>
            <div className="workshop-objective">
              <h3>🎯 Objectif</h3>
              <p>{slide.content.objective}</p>
              <div className="time-allocation">⏱️ {slide.content.timeAllocation}</div>
            </div>

            <div className="workshop-grid">
              <div className="groups-section">
                <h3>👥 Groupes de Travail</h3>
                <div className="groups-container">
                  {slide.content.groups.map((group, index) => (
                    <motion.div
                      key={index}
                      className="group-card"
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                    >
                      <h4 className="group-service">{group.service}</h4>
                      <p className="group-challenge">{group.challenge}</p>
                      <div className="group-tools">
                        <strong>Outils :</strong>
                        <div className="tools-list">
                          {group.tools.map((tool, toolIndex) => (
                            <span key={toolIndex} className="tool-tag">{tool}</span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="steps-section">
                <h3>📋 Étapes de l'Atelier</h3>
                <div className="steps-list">
                  {slide.content.steps.map((step, index) => (
                    <motion.div
                      key={index}
                      className="step-item"
                      variants={itemVariants}
                    >
                      <div className="step-number">{index + 1}</div>
                      <span>{step}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {slide.type === 'group-presentations' && slide.content && (
          <motion.div className="presentations-body" variants={itemVariants}>
            <div className="presentation-format">
              <h3>📊 Format</h3>
              <p>{slide.content.format}</p>
            </div>

            <div className="evaluation-grid">
              <div className="evaluation-section">
                <h3>⭐ Critères d'Évaluation</h3>
                <ul className="evaluation-list">
                  {slide.content.evaluation.map((criterion, index) => (
                    <li key={index}>{criterion}</li>
                  ))}
                </ul>
              </div>

              <div className="prizes-section">
                <h3>🏆 Reconnaissance</h3>
                <p>{slide.content.prizes}</p>
              </div>
            </div>
          </motion.div>
        )}

        {slide.type === 'conclusion' && slide.content && (
          <motion.div className="conclusion-body" variants={itemVariants}>
            <div className="conclusion-grid">
              <div className="achievements-section">
                <h3>✅ Réalisations</h3>
                <ul>
                  {slide.content.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>

              <div className="next-steps-section">
                <h3>🚀 Prochaines Étapes</h3>
                <ul>
                  {slide.content.nextSteps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ul>
              </div>

              <div className="resources-section">
                <h3>📚 Ressources</h3>
                <ul>
                  {slide.content.resources.map((resource, index) => (
                    <li key={index}>{resource}</li>
                  ))}
                </ul>
              </div>
            </div>
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

export default WorkshopSlide; 