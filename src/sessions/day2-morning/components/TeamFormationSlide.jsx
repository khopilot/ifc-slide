import React from 'react';
import { motion } from 'framer-motion';
import './TeamFormationSlide.css';

const TeamFormationSlide = ({ slide }) => {
  const instructions = [
    {
      number: '1',
      icon: '👥',
      title: 'Formez des équipes de 2 personnes',
      description: 'Idéalement avec un collègue d\'un autre département pour croiser les perspectives'
    },
    {
      number: '2',
      icon: '🎯',
      title: 'Identifiez ensemble un projet concret',
      description: 'Un processus actuel qui pourrait être optimisé grâce à l\'IA dans votre travail quotidien'
    },
    {
      number: '3',
      icon: '💡',
      title: 'Définissez votre objectif',
      description: 'Quel résultat voulez-vous obtenir ? Gain de temps ? Qualité ? Automatisation ?'
    },
    {
      number: '4',
      icon: '🔄',
      title: 'Préparez-vous à créer votre workflow',
      description: 'Vous allez concevoir ensemble une solution IA sur mesure pour votre projet'
    }
  ];

  const projectExamples = [
    'Automatiser la création de rapports mensuels',
    'Optimiser la gestion des inscriptions aux cours',
    'Améliorer la communication multilingue',
    'Créer du contenu pédagogique personnalisé',
    'Gérer efficacement les demandes de support',
    'Planifier et promouvoir des événements'
  ];

  return (
    <div className="team-formation-slide">
      <div className="slide-background">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>

      <motion.div 
        className="slide-content"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="slide-header"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="slide-title">{slide.title}</h1>
          <p className="slide-subtitle">{slide.subtitle}</p>
        </motion.div>

        <motion.div 
          className="formation-instructions"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="section-title">Instructions pour la formation des équipes</h2>
          
          <div className="instructions-grid">
            {instructions.map((instruction, index) => (
              <motion.div
                key={index}
                className="instruction-card"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="instruction-number">{instruction.number}</div>
                <div className="instruction-icon">{instruction.icon}</div>
                <div className="instruction-content">
                  <h3>{instruction.title}</h3>
                  <p>{instruction.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="project-examples"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <h3 className="examples-title">💭 Exemples de projets à optimiser</h3>
          <div className="examples-list">
            {projectExamples.map((example, index) => (
              <motion.div
                key={index}
                className="example-item"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.05 }}
                whileHover={{ x: 10 }}
              >
                <span className="example-bullet">▸</span>
                {example}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="time-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <span className="time-icon">⏱️</span>
          <span className="time-text">{slide.duration}</span>
        </motion.div>

        <motion.div 
          className="call-to-action"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.5, type: "spring" }}
        >
          <p className="cta-text">🚀 C'est parti ! Formez vos équipes et choisissez votre projet</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TeamFormationSlide;