import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './QASessionSlide.css';

const QASessionSlide = ({ slide }) => {
  const [activeTheme, setActiveTheme] = useState(0);
  const { themes, resources, nextSteps } = slide.content;

  return (
    <div className="qa-session-slide">
      <div className="qa-header">
        <h1 className="qa-title">{slide.title}</h1>
        <p className="qa-subtitle">{slide.subtitle}</p>
      </div>

      <div className="qa-content">
        <div className="qa-content-inner">
          <div className="themes-section">
            <h2 className="section-title">📚 Thèmes de Questions</h2>
            <div className="themes-tabs">
              {themes.map((theme, index) => (
                <button
                  key={index}
                  className={`theme-tab ${activeTheme === index ? 'active' : ''}`}
                  onClick={() => setActiveTheme(index)}
                >
                  {theme.category}
                </button>
              ))}
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTheme}
                className="questions-panel"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="category-title">{themes[activeTheme].category}</h3>
                <div className="sample-questions">
                  {themes[activeTheme].sampleQuestions.map((question, idx) => (
                    <motion.div
                      key={idx}
                      className="question-item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <span className="question-icon">❓</span>
                      <p className="question-text">{question}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="resources-grid">
            <div className="resources-section">
              <h2 className="section-title">{resources.title}</h2>
              <div className="resources-grid-inner">
                {resources.items.map((resource, index) => (
                  <motion.div
                    key={index}
                    className="resource-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <h3 className="resource-type">{resource.type}</h3>
                    <div className="resource-suggestions">
                      {resource.suggestions.map((suggestion, idx) => (
                        <span key={idx} className="suggestion-tag">
                          {suggestion}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="next-steps-section">
              <h2 className="section-title">🚀 Prochaines Étapes</h2>
              <div className="steps-timeline">
                {nextSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="step-item"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="step-number">{index + 1}</div>
                    <div className="step-content">
                      <p className="step-text">{step}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QASessionSlide;