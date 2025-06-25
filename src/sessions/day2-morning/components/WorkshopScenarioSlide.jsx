import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './WorkshopScenarioSlide.css';

const WorkshopScenarioSlide = ({ slide }) => {
  const [activeScenario, setActiveScenario] = useState(0);
  
  const scenarios = slide.content?.scenarios || [];
  const currentScenario = scenarios[activeScenario];

  const handleNavigation = (direction) => {
    if (direction === 'next' && activeScenario < scenarios.length - 1) {
      setActiveScenario(activeScenario + 1);
    } else if (direction === 'prev' && activeScenario > 0) {
      setActiveScenario(activeScenario - 1);
    }
  };

  return (
    <div className="workshop-scenario-slide">
      {/* Header */}
      <motion.div 
        className="scenario-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="scenario-title">{slide.title}</h1>
        <div className="scenario-navigation">
          <button 
            className="nav-button prev"
            onClick={() => handleNavigation('prev')}
            disabled={activeScenario === 0}
          >
            <span>←</span>
          </button>
          <div className="scenario-counter">
            <span className="current">{activeScenario + 1}</span>
            <span className="separator">/</span>
            <span className="total">{scenarios.length}</span>
          </div>
          <button 
            className="nav-button next"
            onClick={() => handleNavigation('next')}
            disabled={activeScenario === scenarios.length - 1}
          >
            <span>→</span>
          </button>
        </div>
      </motion.div>

      {/* Scenario Tabs */}
      <div className="scenario-tabs">
        {scenarios.map((scenario, index) => (
          <motion.button
            key={index}
            className={`scenario-tab ${activeScenario === index ? 'active' : ''}`}
            onClick={() => setActiveScenario(index)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="tab-number">{index + 1}</span>
            <span className="tab-title">{scenario.title}</span>
          </motion.button>
        ))}
      </div>

      {/* Scenario Content */}
      <AnimatePresence mode="wait">
        {currentScenario && (
          <motion.div
            key={activeScenario}
            className="scenario-content"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Scenario Info Card */}
            <div className="scenario-info-card">
              <div className="info-header">
                <h2 className="scenario-name">
                  Scénario {activeScenario + 1} : {currentScenario.title}
                </h2>
                <div className="scenario-meta">
                  <span className="department">
                    <span className="icon">🏢</span>
                    {currentScenario.department}
                  </span>
                  <span className="duration">
                    <span className="icon">⏱️</span>
                    {currentScenario.duration}
                  </span>
                </div>
              </div>
              
              <div className="objective-box">
                <h3>🎯 Objectif</h3>
                <p>{currentScenario.objective}</p>
              </div>
            </div>

            {/* Steps Timeline */}
            <div className="steps-container">
              <h3 className="steps-title">📋 Étapes détaillées</h3>
              <div className="steps-timeline">
                {currentScenario.steps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="step-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="step-header">
                      <span className="step-number">{index + 1}</span>
                      <h4 className="step-title">{step.title}</h4>
                      <span className="step-duration">{step.duration}</span>
                    </div>
                    
                    <div className="step-content">
                      {step.prompt && (
                        <div className="prompt-box">
                          <span className="prompt-label">💬 Prompt :</span>
                          <p className="prompt-text">"{step.prompt}"</p>
                        </div>
                      )}
                      
                      {step.actions && (
                        <ul className="actions-list">
                          {step.actions.map((action, idx) => (
                            <li key={idx}>{action}</li>
                          ))}
                        </ul>
                      )}
                      
                      {step.tools && (
                        <div className="tools-used">
                          <span className="tools-label">🛠️ Outils :</span>
                          {step.tools.map((tool, idx) => (
                            <span key={idx} className="tool-badge">{tool}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Deliverable */}
            <motion.div 
              className="deliverable-card"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <h3>
                <span className="icon">📦</span>
                Livrable
              </h3>
              <p>{currentScenario.deliverable}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WorkshopScenarioSlide;