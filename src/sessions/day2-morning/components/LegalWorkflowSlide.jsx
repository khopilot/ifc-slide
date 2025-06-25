import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LegalWorkflowSlide.css';

const LegalWorkflowSlide = ({ slide }) => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const tabs = [
    { id: 'overview', label: 'Vue d\'ensemble', icon: '📊' },
    { id: 'steps', label: 'Étapes détaillées', icon: '📋' },
    { id: 'cases', label: 'Cas d\'usage', icon: '📁' },
    { id: 'cautions', label: 'Points d\'attention', icon: '⚠️' },
    { id: 'results', label: 'Résultats', icon: '🎯' }
  ];

  const renderOverview = () => (
    <motion.div 
      className="workflow-overview"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="overview-header">
        <div className="workflow-icon">⚖️</div>
        <div className="workflow-info">
          <h2>Workflow Juridique : Création/Révision de Contrats</h2>
          <div className="workflow-meta">
            <span><strong>Département :</strong> Service Juridique/Administration</span>
            <span><strong>Durée estimée :</strong> 60-90 minutes selon complexité</span>
          </div>
        </div>
      </div>
      
      <div className="workflow-objective">
        <h3>🎯 Objectif</h3>
        <p>Créer ou réviser des contrats de manière efficace et sécurisée en utilisant l'IA pour accélérer le processus tout en maintenant la rigueur juridique</p>
      </div>

      <div className="workflow-benefits">
        <h3>✨ Avantages du workflow</h3>
        <div className="benefits-grid">
          <div className="benefit-card">
            <span className="benefit-icon">⚡</span>
            <h4>Rapidité</h4>
            <p>87% de gain de temps</p>
          </div>
          <div className="benefit-card">
            <span className="benefit-icon">🌐</span>
            <h4>Multilingue</h4>
            <p>FR/KH/EN automatique</p>
          </div>
          <div className="benefit-card">
            <span className="benefit-icon">✅</span>
            <h4>Conformité</h4>
            <p>Respect des 2 législations</p>
          </div>
          <div className="benefit-card">
            <span className="benefit-icon">🔄</span>
            <h4>Réutilisable</h4>
            <p>Templates adaptables</p>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderSteps = () => (
    <motion.div 
      className="workflow-steps"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="steps-title">Workflow en 6 étapes</h2>
      <div className="steps-timeline">
        {slide.content.steps.map((step, index) => (
          <motion.div
            key={index}
            className="step-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="step-number">{index + 1}</div>
            <div className="step-content">
              <div className="step-header">
                <h3>{step.title}</h3>
                <span className="step-duration">{step.duration}</span>
              </div>
              <p className="step-objective"><strong>Objectif :</strong> {step.objective}</p>
              
              {step.prompt && (
                <div className="step-prompt">
                  <span className="prompt-label">💬 Prompt :</span>
                  <code>{step.prompt}</code>
                </div>
              )}
              
              {step.actions && (
                <div className="step-actions">
                  <span className="actions-label">Actions :</span>
                  <ul>
                    {step.actions.map((action, idx) => (
                      <li key={idx}>{action}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="step-tool">
                <span className="tool-badge">{step.tool}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  const renderCases = () => (
    <motion.div 
      className="workflow-cases"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="cases-title">Cas d'Usage Spécifiques IFC</h2>
      <div className="cases-grid">
        {slide.content.cases.map((useCase, index) => (
          <motion.div
            key={index}
            className="case-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <h3>{useCase.title}</h3>
            <div className="case-steps">
              {useCase.steps.map((step, idx) => (
                <div key={idx} className="case-step">
                  <span className="case-step-number">{idx + 1}</span>
                  <span className="case-step-text">{step}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  const renderCautions = () => (
    <motion.div 
      className="workflow-cautions"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="cautions-title">⚠️ Points d'Attention Juridiques</h2>
      <div className="cautions-list">
        {slide.content.cautions.map((caution, index) => (
          <motion.div
            key={index}
            className="caution-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3>{caution.title}</h3>
            <ul>
              {caution.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      
      <div className="prompt-template">
        <h3>🎯 Prompt Prêt à l'Emploi</h3>
        <div className="template-box">
          <code>
            "Je dois créer un contrat de [TYPE] pour l'Institut Français du Cambodge.<br/>
            Le prestataire est [cambodgien/français/autre].<br/>
            Durée : [X mois].<br/>
            Services : [décrire].<br/>
            Génère une structure complète avec toutes les clauses nécessaires en droit cambodgien et français."
          </code>
        </div>
      </div>
    </motion.div>
  );

  const renderResults = () => (
    <motion.div 
      className="workflow-results"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="results-title">📊 Gain de Temps Estimé</h2>
      <div className="results-table">
        <table>
          <thead>
            <tr>
              <th>Tâche</th>
              <th>Temps traditionnel</th>
              <th>Avec IA</th>
              <th>Gain</th>
            </tr>
          </thead>
          <tbody>
            {slide.content.timeComparison.map((item, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <td>{item.task}</td>
                <td>{item.traditional}</td>
                <td className="time-ai">{item.withAI}</td>
                <td className="time-gain">{item.gain}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <motion.div 
        className="results-summary"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="summary-icon">🚀</div>
        <div className="summary-content">
          <h3>Résultat Global</h3>
          <p className="summary-percentage">87% de gain de temps</p>
          <p className="summary-text">De 8-10 heures à 1h15 en moyenne</p>
        </div>
      </motion.div>
    </motion.div>
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'overview': return renderOverview();
      case 'steps': return renderSteps();
      case 'cases': return renderCases();
      case 'cautions': return renderCautions();
      case 'results': return renderResults();
      default: return renderOverview();
    }
  };

  return (
    <div className="legal-workflow-slide">
      <div className="slide-header">
        <h1 className="slide-title">{slide.title}</h1>
        <div className="tab-navigation">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span className="tab-label">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
      
      <div className="slide-content">
        <AnimatePresence mode="wait">
          <motion.div key={activeTab}>
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LegalWorkflowSlide;