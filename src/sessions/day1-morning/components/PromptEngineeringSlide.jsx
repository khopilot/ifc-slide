import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './PromptEngineeringSlide.css';

const PromptEngineeringSlide = ({ slide }) => {
  const [activeExample, setActiveExample] = useState(0);
  const [showExerciseHint, setShowExerciseHint] = useState(false);
  const [copiedExample, setCopiedExample] = useState(null);

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedExample(index);
    setTimeout(() => setCopiedExample(null), 2000);
  };

  const getContextualHint = (slide) => {
    if (slide.id === 'prompt-simple') {
      return "Pour un prompt simple, soyez direct et précis. Exemple: 'Liste 5 activités culturelles de l'IFC en 2024'";
    } else if (slide.id === 'prompt-intermediaire') {
      return "Ajoutez un rôle et un contexte. Exemple: 'Tu es responsable culturel. Propose 5 animations innovantes pour adolescents à l'IFC'";
    } else if (slide.id === 'prompt-complexe') {
      return "Structurez avec: Rôle + Contexte + Tâche détaillée + Format souhaité + Contraintes spécifiques";
    }
    return "Pensez à inclure le contexte, le rôle, et des instructions claires dans votre prompt.";
  };

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

  const exampleVariants = {
    hidden: { x: -50, opacity: 0 },
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
    <div className="prompt-engineering-slide">
      {/* Animated background */}
      <div className="prompt-background">
        <div className="ai-grid">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="grid-cell"
              animate={{
                opacity: [0.05, 0.15, 0.05],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 3,
                delay: i * 0.1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      <motion.div
        className="prompt-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header with icon */}
        <motion.div className="prompt-header" variants={itemVariants}>
          <div className="prompt-icon">
            <span>🤖</span>
          </div>
          <h2 className="prompt-title">{slide.title}</h2>
        </motion.div>

        {/* Definition section */}
        {slide.definition && (
          <motion.div className="definition-section" variants={itemVariants}>
            <div className="definition-card">
              <div className="definition-header">
                <span className="definition-icon">💡</span>
                <h3>Définition</h3>
              </div>
              <p className="definition-text">{slide.definition}</p>
            </div>
          </motion.div>
        )}

        {/* Best practices */}
        {slide.bestPractices && (
          <motion.div className="best-practices-section" variants={itemVariants}>
            <h3 className="section-title">
              <span className="section-icon">✨</span>
              Meilleures Pratiques
            </h3>
            <div className="practices-grid">
              {slide.bestPractices.map((practice, index) => (
                <motion.div
                  key={index}
                  className="practice-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="practice-number">{index + 1}</div>
                  <p className="practice-text">{practice}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Examples section with interactive tabs */}
        {slide.examples && (
          <motion.div className="examples-section" variants={itemVariants}>
            <h3 className="section-title">
              <span className="section-icon">📝</span>
              Exemples Pratiques
            </h3>
            
            {/* Example tabs */}
            <div className="example-tabs">
              {slide.examples.map((example, index) => (
                <button
                  key={index}
                  className={`example-tab ${activeExample === index ? 'active' : ''}`}
                  onClick={() => setActiveExample(index)}
                >
                  {example.label}
                </button>
              ))}
            </div>

            {/* Example content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExample}
                className="example-content"
                variants={exampleVariants}
                initial="hidden"
                animate="visible"
                exit={{ x: 50, opacity: 0 }}
              >
                <div className="example-card">
                  <div className="example-header">
                    <h4>{slide.examples[activeExample].label}</h4>
                    <button
                      className={`copy-button ${copiedExample === activeExample ? 'copied' : ''}`}
                      onClick={() => copyToClipboard(slide.examples[activeExample].text, activeExample)}
                    >
                      {copiedExample === activeExample ? '✓ Copié!' : '📋'}
                    </button>
                  </div>
                  <div className="example-text-wrapper">
                    <pre className="example-text">
                      {slide.examples[activeExample].text}
                    </pre>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}

        {/* Exercise section */}
        {slide.exercise && (
          <motion.div className="exercise-section" variants={itemVariants}>
            <div className="exercise-card">
              <div className="exercise-header">
                <h3 className="section-title">
                  <span className="section-icon">🎯</span>
                  Exercice Pratique
                </h3>
                <button
                  className="hint-button"
                  onClick={() => setShowExerciseHint(!showExerciseHint)}
                >
                  {showExerciseHint ? 'Masquer l\'indice' : 'Voir un indice'}
                </button>
              </div>
              
              <p className="exercise-text">{slide.exercise}</p>
              
              <AnimatePresence>
                {showExerciseHint && (
                  <motion.div
                    className="exercise-hint"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="hint-text">
                      💡 Indice: {getContextualHint(slide)}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="exercise-actions">
                <a 
                  href="https://chat.openai.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="try-button"
                >
                  Essayer sur ChatGPT →
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {/* Interactive prompt builder (for introduction slides) */}
        {slide.type === 'prompt-engineering' && !slide.examples && (
          <motion.div className="prompt-builder" variants={itemVariants}>
            <h3 className="section-title">
              <span className="section-icon">🔨</span>
              Construisez votre Prompt
            </h3>
            <div className="builder-sections">
              <div className="builder-section">
                <label>1. QUI - Définir le rôle</label>
                <div className="builder-input">
                  <strong>Exemple :</strong> "Tu es le directeur culturel de l'IFC avec 15 ans d'expérience en diplomatie culturelle"
                </div>
              </div>
              <div className="builder-section">
                <label>2. QUOI - Préciser la tâche</label>
                <div className="builder-input">
                  <strong>Exemple :</strong> "Crée un programme mensuel d'activités culturelles pour attirer les jeunes cambodgiens (18-25 ans)"
                </div>
              </div>
              <div className="builder-section">
                <label>3. COMMENT - Format et contraintes</label>
                <div className="builder-input">
                  <strong>Exemple :</strong> "Format : tableau avec dates, activités, budget • Ton : dynamique • Longueur : 1 page"
                </div>
              </div>
            </div>
            <motion.div 
              className="builder-formula"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <p className="formula-text">
                <strong>Formule gagnante :</strong> RÔLE + CONTEXTE + TÂCHE PRÉCISE + FORMAT + CONTRAINTES = Résultat optimal
              </p>
            </motion.div>
            
            {/* Interactive tips */}
            <motion.div 
              className="builder-tips"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <div className="tip-item">
                <span className="tip-icon">💡</span>
                <span className="tip-text">Astuce : Plus vous êtes précis, meilleurs sont les résultats</span>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Decorative elements */}
        <div className="prompt-decorations">
          <motion.div
            className="decoration-ai"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default PromptEngineeringSlide;