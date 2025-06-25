import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './MetaWorkflowSlide.css';

const MetaWorkflowSlide = ({ slide }) => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const tabs = [
    { id: 'overview', label: 'Vue d\'ensemble', icon: '🔄' },
    { id: 'steps', label: '7 Étapes', icon: '📋' },
    { id: 'templates', label: 'Templates', icon: '🎯' },
    { id: 'metrics', label: 'Métriques', icon: '📊' },
    { id: 'bonus', label: 'Bonus', icon: '🎁' }
  ];

  const renderOverview = () => (
    <motion.div 
      className="meta-overview"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="overview-header">
        <div className="workflow-icon">🔄</div>
        <div className="workflow-info">
          <h2>Workflow : Générateur de Workflows IA</h2>
          <div className="workflow-meta">
            <span><strong>Département :</strong> Tous services</span>
            <span><strong>Durée estimée :</strong> 30-45 minutes pour créer un workflow sur mesure</span>
          </div>
        </div>
      </div>
      
      <div className="workflow-objective">
        <h3>🎯 Objectif</h3>
        <p>Permettre à chaque département de créer ses propres workflows IA personnalisés et optimisés</p>
      </div>

      <div className="meta-concept">
        <h3>💡 Le Concept "Méta"</h3>
        <div className="concept-explanation">
          <p>Ce workflow est un <strong>"méta-workflow"</strong> - un workflow pour créer des workflows!</p>
          <p>Utilisez-le comme guide universel pour concevoir, tester et déployer n'importe quel processus optimisé par l'IA dans votre service.</p>
        </div>
      </div>

      <div className="workflow-express">
        <h3>🚀 Workflow Express : 15 Minutes</h3>
        <div className="express-steps">
          <div className="express-step">
            <div className="step-header">
              <span className="step-number">1</span>
              <h4>ChatGPT (5 min)</h4>
            </div>
            <code>
              "J'ai besoin de [RÉSULTAT] rapidement.<br/>
              Crée workflow simple 3-5 étapes max avec<br/>
              outils gratuits. Contexte : [SITUATION]"
            </code>
          </div>
          <div className="express-step">
            <div className="step-header">
              <span className="step-number">2</span>
              <h4>Test immédiat (5 min)</h4>
            </div>
            <ul>
              <li>Essayer sur cas réel</li>
              <li>Noter blocages</li>
            </ul>
          </div>
          <div className="express-step">
            <div className="step-header">
              <span className="step-number">3</span>
              <h4>Ajustement (5 min)</h4>
            </div>
            <ul>
              <li>Corriger problèmes</li>
              <li>Documenter pour équipe</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="name-generator">
        <h3>💡 Générateur de Nom de Workflow</h3>
        <div className="generator-prompt">
          <code>
            ChatGPT : "Génère 5 noms créatifs pour workflow qui [DESCRIPTION].<br/>
            Critères :<br/>
            - Court (2-4 mots)<br/>
            - Mémorable<br/>
            - Décrit l'action<br/>
            - Ton [formel/fun/neutre]<br/>
            Exemples : FlowBoost, SmartDraft, QuickSync"
          </code>
        </div>
      </div>
    </motion.div>
  );

  const renderSteps = () => (
    <motion.div 
      className="meta-steps"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="steps-title">Workflow en 7 étapes</h2>
      <div className="steps-container">
        {slide.content.steps.map((step, index) => (
          <motion.div
            key={index}
            className="step-card"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="step-header">
              <div className="step-number">{index + 1}</div>
              <div className="step-info">
                <h3>{step.title}</h3>
                <span className="step-duration">{step.duration}</span>
              </div>
            </div>
            
            <p className="step-objective"><strong>Objectif :</strong> {step.objective}</p>
            
            {step.prompt && (
              <div className="step-prompt">
                <span className="prompt-label">💬 Prompt :</span>
                <code>{step.prompt}</code>
              </div>
            )}
            
            {step.elements && (
              <div className="step-elements">
                <span className="elements-label">📦 Éléments :</span>
                <ul>
                  {step.elements.map((element, idx) => (
                    <li key={idx}>{element}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {step.tools && (
              <div className="step-tools">
                {step.tools.map((tool, idx) => (
                  <span key={idx} className="tool-badge">{tool}</span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  const renderTemplates = () => (
    <motion.div 
      className="meta-templates"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="templates-title">🎯 Templates de Workflows Pré-Construits</h2>
      
      <div className="templates-grid">
        {slide.content.templates.map((template, index) => (
          <motion.div
            key={index}
            className="template-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3>{template.title}</h3>
            <div className="template-type">{template.tool} Meta-Prompt :</div>
            <code className="template-prompt">{template.prompt}</code>
          </motion.div>
        ))}
      </div>

      <div className="selection-matrix">
        <h3>📊 Matrice de Sélection Workflows</h3>
        <table className="matrix-table">
          <thead>
            <tr>
              <th>Critère</th>
              <th>Score /5</th>
              <th>Poids</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            {slide.content.selectionMatrix.map((criteria, index) => (
              <tr key={index} className={criteria.isTotal ? 'total-row' : ''}>
                <td>{criteria.name}</td>
                <td className="score">
                  {criteria.stars && Array.from({ length: 5 }, (_, i) => (
                    <span key={i} className={i < criteria.score ? 'star filled' : 'star'}>⭐</span>
                  ))}
                </td>
                <td>{criteria.weight}</td>
                <td className="note">{criteria.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );

  const renderMetrics = () => (
    <motion.div 
      className="meta-metrics"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="metrics-title">📈 Métriques de Succès Workflow</h2>
      
      <div className="dashboard-container">
        <h3>Tableau de Bord Type</h3>
        <table className="metrics-table">
          <thead>
            <tr>
              <th>KPI</th>
              <th>Avant</th>
              <th>Cible</th>
              <th>Réel</th>
            </tr>
          </thead>
          <tbody>
            {slide.content.metrics.map((metric, index) => (
              <tr key={index}>
                <td>{metric.kpi}</td>
                <td className="before">{metric.before}</td>
                <td className="target">{metric.target}</td>
                <td className="actual">{metric.actual}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="deployment-kit">
        <h3>📦 Kit de Déploiement</h3>
        <div className="kit-components">
          {slide.content.deploymentKit.map((component, index) => (
            <div key={index} className="kit-component">
              <h4>{component.title}</h4>
              <ul>
                {component.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="success-indicators">
        <h3>🎯 Indicateurs de Succès</h3>
        <div className="indicators-timeline">
          <div className="indicator-phase">
            <h4>Semaine 1</h4>
            <ul>
              <li>80% équipe a testé</li>
              <li>3+ cas d'usage identifiés</li>
              <li>Feedback collecté</li>
            </ul>
          </div>
          <div className="indicator-phase">
            <h4>Mois 1</h4>
            <ul>
                              <li>Adoption &gt;60%</li>
              <li>Temps gagné mesurable</li>
              <li>Workflow v2 déployé</li>
            </ul>
          </div>
          <div className="indicator-phase">
            <h4>Trimestre 1</h4>
            <ul>
              <li>ROI démontré</li>
              <li>Extension autres départements</li>
              <li>Best practices documentées</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderBonus = () => (
    <motion.div 
      className="meta-bonus"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="bonus-title">🎁 Bonus : Auto-Amélioration</h2>
      
      <div className="auto-improvement">
        <h3>Prompt Mensuel d'Optimisation</h3>
        <div className="improvement-prompt">
          <code>
            Claude : "Analyse utilisation workflow [NOM] ce mois :<br/>
            - Étapes les plus/moins utilisées<br/>
            - Temps réel vs estimé<br/>
            - Problèmes rencontrés<br/>
            - Suggestions utilisateurs<br/><br/>
            Propose 3 améliorations priorisées<br/>
            avec effort vs impact"
          </code>
        </div>
      </div>

      <div className="iteration-cycle">
        <h3>🔄 Cycle d'Itération Continue</h3>
        <div className="cycle-diagram">
          <div className="cycle-step">
            <span className="cycle-number">1</span>
            <h4>Mesurer</h4>
            <p>KPIs et feedback</p>
          </div>
          <div className="cycle-arrow">→</div>
          <div className="cycle-step">
            <span className="cycle-number">2</span>
            <h4>Analyser</h4>
            <p>Points de friction</p>
          </div>
          <div className="cycle-arrow">→</div>
          <div className="cycle-step">
            <span className="cycle-number">3</span>
            <h4>Améliorer</h4>
            <p>Optimisations IA</p>
          </div>
          <div className="cycle-arrow">→</div>
          <div className="cycle-step">
            <span className="cycle-number">4</span>
            <h4>Déployer</h4>
            <p>Version améliorée</p>
          </div>
        </div>
      </div>

      <div className="pro-tips">
        <h3>💡 Conseils Pro</h3>
        <div className="tips-grid">
          <div className="pro-tip">
            <span className="tip-icon">🎯</span>
            <h4>Commencer Petit</h4>
            <p>Un workflow simple qui fonctionne vaut mieux qu'un complexe jamais utilisé</p>
          </div>
          <div className="pro-tip">
            <span className="tip-icon">👥</span>
            <h4>Impliquer l'Équipe</h4>
            <p>Co-création = meilleure adoption. Faites participer dès le début</p>
          </div>
          <div className="pro-tip">
            <span className="tip-icon">📊</span>
            <h4>Mesurer Tout</h4>
            <p>Temps avant/après, erreurs évitées, satisfaction. Les données convainquent</p>
          </div>
          <div className="pro-tip">
            <span className="tip-icon">🔄</span>
            <h4>Itérer Rapidement</h4>
            <p>Version 1 en 1 semaine, pas version parfaite en 1 mois</p>
          </div>
        </div>
      </div>

      <div className="call-to-action">
        <h3>🚀 Prêt à Créer Votre Workflow ?</h3>
        <p>Utilisez ce méta-workflow pour transformer n'importe quel processus de votre département en workflow IA optimisé!</p>
        <div className="cta-button">Commencer Maintenant</div>
      </div>
    </motion.div>
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'overview': return renderOverview();
      case 'steps': return renderSteps();
      case 'templates': return renderTemplates();
      case 'metrics': return renderMetrics();
      case 'bonus': return renderBonus();
      default: return renderOverview();
    }
  };

  return (
    <div className="meta-workflow-slide">
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

export default MetaWorkflowSlide;