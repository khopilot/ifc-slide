import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ConceptClarificationSlide.css';

const ConceptClarificationSlide = ({ slide }) => {
  const [activeTab, setActiveTab] = useState('outil');

  const concepts = [
    {
      id: 'outil',
      title: 'Outil IA',
      icon: '🛠️',
      color: '#3b82f6',
      definition: 'Application unique répondant à un besoin précis (chat, image, traduction).',
      example: 'ChatGPT rédige un e-mail ; DALL·E crée un visuel.',
      metaphor: 'Tournevis'
    },
    {
      id: 'prompt',
      title: 'Prompt',
      icon: '💭',
      color: '#8b5cf6',
      definition: 'Texte d\'instruction qu\'on envoie à l\'IA. Plus il est clair, meilleure est la réponse.',
      example: '« Résumé ce texte en khmer de 100 mots. »',
      metaphor: 'Instructions "visser ceci"'
    },
    {
      id: 'agent',
      title: 'Agent',
      icon: '🤝',
      color: '#10b981',
      definition: 'IA qui enchaîne plusieurs actions via prompts successifs, guidée par l\'humain.',
      example: 'Perplexity → ChatGPT → Canva dans nos scénarios.',
      metaphor: 'Ouvrier'
    },
    {
      id: 'autonomous',
      title: 'Agent autonome',
      icon: '🤖',
      color: '#f59e0b',
      definition: 'IA qui décide elle-même des étapes, appelle des outils, vérifie le résultat.',
      example: 'Manus génère un site complet à partir d\'un brief.',
      metaphor: 'Chef de chantier qui planifie et fait tout seul'
    }
  ];

  return (
    <div className="concept-clarification-slide">
      {/* Header */}
      <motion.div 
        className="slide-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="time-badge">09h15 - 09h30</div>
        <h1 className="slide-title">Re-explication : Outils · Prompts · Agents</h1>
        <p className="slide-objective">
          <span className="objective-icon">🎯</span>
          Objectif : clarifier des concepts clés avant les ateliers
        </p>
      </motion.div>

      {/* Concept Tabs */}
      <motion.div 
        className="concept-tabs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {concepts.map((concept) => (
          <motion.button
            key={concept.id}
            className={`concept-tab ${activeTab === concept.id ? 'active' : ''}`}
            onClick={() => setActiveTab(concept.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ '--tab-color': concept.color }}
          >
            <span className="tab-icon">{concept.icon}</span>
            <span className="tab-title">{concept.title}</span>
          </motion.button>
        ))}
      </motion.div>

      {/* Content Display */}
      <AnimatePresence mode="wait">
        {concepts.map((concept) => (
          activeTab === concept.id && (
            <motion.div
              key={concept.id}
              className="concept-content"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Concept Card */}
              <div className="concept-card" style={{ '--concept-color': concept.color }}>
                <div className="concept-header">
                  <div className="concept-icon-large">{concept.icon}</div>
                  <h2 className="concept-name">{concept.title}</h2>
                </div>

                <div className="concept-details">
                  <div className="detail-section">
                    <h3>
                      <span className="section-icon">📖</span>
                      Explication simplifiée
                    </h3>
                    <p className="definition-text">{concept.definition}</p>
                  </div>

                  <div className="detail-section">
                    <h3>
                      <span className="section-icon">💡</span>
                      Exemple concret IFC
                    </h3>
                    <p className="example-text">{concept.example}</p>
                  </div>

                  <div className="metaphor-box">
                    <div className="metaphor-label">Métaphore</div>
                    <div className="metaphor-content">
                      <span className="metaphor-icon">🔧</span>
                      <span className="metaphor-text">{concept.metaphor}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Representation */}
              <div className="visual-representation">
                {concept.id === 'outil' && (
                  <motion.div 
                    className="visual-tool"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <div className="tool-box">
                      <span className="tool-icon">🛠️</span>
                      <p>Application unique</p>
                    </div>
                  </motion.div>
                )}

                {concept.id === 'prompt' && (
                  <motion.div 
                    className="visual-prompt"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className="prompt-flow">
                      <div className="prompt-input">
                        <span>👤</span>
                        <div className="arrow">→</div>
                        <div className="prompt-box">
                          <p>"Instructions claires"</p>
                        </div>
                        <div className="arrow">→</div>
                        <span>🤖</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {concept.id === 'agent' && (
                  <motion.div className="visual-agent">
                    <div className="agent-chain">
                      <motion.div 
                        className="chain-item"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        <span>🔍</span>
                        <p>Perplexity</p>
                      </motion.div>
                      <div className="chain-arrow">→</div>
                      <motion.div 
                        className="chain-item"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <span>💬</span>
                        <p>ChatGPT</p>
                      </motion.div>
                      <div className="chain-arrow">→</div>
                      <motion.div 
                        className="chain-item"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <span>🎨</span>
                        <p>Canva</p>
                      </motion.div>
                    </div>
                    <p className="chain-description">Enchaînement guidé par l'humain</p>
                  </motion.div>
                )}

                {concept.id === 'autonomous' && (
                  <motion.div className="visual-autonomous">
                    <motion.div 
                      className="autonomous-brain"
                      animate={{ 
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <span className="brain-icon">🧠</span>
                      <div className="autonomous-actions">
                        <div className="action">Planifie</div>
                        <div className="action">Exécute</div>
                        <div className="action">Vérifie</div>
                        <div className="action">Ajuste</div>
                      </div>
                    </motion.div>
                    <p className="autonomous-description">Autonomie complète</p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Footer Metaphor Summary */}
      <motion.div 
        className="metaphor-summary"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className="summary-title">
          <span className="summary-icon">🔧</span>
          Métaphore complète
        </div>
        <div className="summary-content">
          <span className="summary-item">Outil = tournevis</span>
          <span className="separator">•</span>
          <span className="summary-item">Prompt = instructions "visser ceci"</span>
          <span className="separator">•</span>
          <span className="summary-item">Agent = ouvrier</span>
          <span className="separator">•</span>
          <span className="summary-item">Agent autonome = chef de chantier</span>
        </div>
      </motion.div>
    </div>
  );
};

export default ConceptClarificationSlide;