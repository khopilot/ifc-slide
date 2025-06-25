import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './MaintenanceWorkflowSlide.css';

const MaintenanceWorkflowSlide = ({ slide }) => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const tabs = [
    { id: 'overview', label: 'Vue d\'ensemble', icon: '🔧' },
    { id: 'steps', label: '7 Étapes', icon: '📋' },
    { id: 'cases', label: 'Cas d\'usage', icon: '🏗️' },
    { id: 'dashboard', label: 'Tableaux de bord', icon: '📊' },
    { id: 'emergency', label: 'Urgences', icon: '⚡' }
  ];

  const renderOverview = () => (
    <motion.div 
      className="maintenance-overview"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="overview-header">
        <div className="workflow-icon">🔧</div>
        <div className="workflow-info">
          <h2>Workflow Maintenance IFC : Gestion Technique et Bâtiments</h2>
          <div className="workflow-meta">
            <span><strong>Département :</strong> Service Maintenance/Technique</span>
            <span><strong>Durée estimée :</strong> 30-45 minutes par intervention</span>
          </div>
        </div>
      </div>
      
      <div className="workflow-objective">
        <h3>🎯 Objectif</h3>
        <p>Optimiser la gestion des interventions et la maintenance préventive en utilisant l'IA pour diagnostiquer, planifier et documenter</p>
      </div>

      <div className="key-benefits">
        <h3>💡 Bénéfices Clés</h3>
        <div className="benefits-grid">
          <div className="benefit-card">
            <span className="benefit-icon">⏱️</span>
            <h4>Réactivité</h4>
            <p>Délai intervention &lt;24h</p>
          </div>
          <div className="benefit-card">
            <span className="benefit-icon">💰</span>
            <h4>Économies</h4>
            <p>15-20K$/an optimisés</p>
          </div>
          <div className="benefit-card">
            <span className="benefit-icon">📱</span>
            <h4>Mobilité</h4>
            <p>Check-lists sur mobile</p>
          </div>
          <div className="benefit-card">
            <span className="benefit-icon">🌱</span>
            <h4>Éco-responsable</h4>
            <p>Réduction empreinte</p>
          </div>
        </div>
      </div>

      <div className="optimization-summary">
        <h3>💰 Optimisation Budget Annuel</h3>
        <table>
          <thead>
            <tr>
              <th>Action IA</th>
              <th>Économie estimée</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Maintenance préventive planifiée</td>
              <td className="savings">-30% pannes</td>
            </tr>
            <tr>
              <td>Négociation fournisseurs data-driven</td>
              <td className="savings">-15% achats</td>
            </tr>
            <tr>
              <td>Optimisation stocks</td>
              <td className="savings">-20% sur-stockage</td>
            </tr>
            <tr>
              <td>Interventions groupées par zone</td>
              <td className="savings">-25% temps</td>
            </tr>
            <tr className="total-row">
              <td><strong>TOTAL ANNUEL</strong></td>
              <td className="total-savings"><strong>15-20K$ économisés</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
    </motion.div>
  );

  const renderSteps = () => (
    <motion.div 
      className="maintenance-steps"
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
            
            {step.prompts && (
              <div className="step-prompts">
                <span className="prompts-label">💬 Prompts :</span>
                {step.prompts.map((prompt, idx) => (
                  <code key={idx}>{prompt}</code>
                ))}
              </div>
            )}
            
            {step.outputs && (
              <div className="step-outputs">
                <span className="outputs-label">📤 Outputs :</span>
                <ul>
                  {step.outputs.map((output, idx) => (
                    <li key={idx}>{output}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {step.focus && (
              <div className="step-focus">
                <span className="focus-label">🎯 Focus :</span>
                <p>{step.focus}</p>
              </div>
            )}
            
            <div className="step-tools">
              {step.tools && step.tools.map((tool, idx) => (
                <span key={idx} className="tool-badge">{tool}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  const renderCases = () => (
    <motion.div 
      className="maintenance-cases"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="cases-title">🏗️ Cas d'Usage Spécifiques IFC</h2>
      
      <div className="cases-grid">
        {slide.content.cases.map((useCase, index) => (
          <motion.div
            key={index}
            className="case-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3>{useCase.title}</h3>
            <div className="case-steps">
              {useCase.steps.map((step, idx) => (
                <div key={idx} className="case-step">
                  <span className="step-number">{idx + 1}</span>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="digital-tools">
        <h3>🛠️ Outils Numériques Intégrés</h3>
        <div className="tools-grid">
          {slide.content.digitalTools.map((tool, index) => (
            <div key={index} className="digital-tool-card">
              <h4>{tool.title}</h4>
              <ul>
                {tool.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="eco-section">
        <h3>🌱 Maintenance Éco-Responsable</h3>
        <div className="eco-actions">
          {slide.content.ecoActions.map((action, index) => (
            <div key={index} className="eco-action">
              <strong>{action.tool}:</strong> {action.action}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const renderDashboard = () => (
    <motion.div 
      className="maintenance-dashboard"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="dashboard-title">📊 Tableaux de Bord Maintenance</h2>
      
      <div className="dashboard-monthly">
        <h3>Dashboard Mensuel Type</h3>
        <table className="metrics-table">
          <thead>
            <tr>
              <th>Indicateur</th>
              <th>Objectif</th>
              <th>Réel</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {slide.content.dashboard.map((metric, index) => (
              <tr key={index}>
                <td>{metric.indicator}</td>
                <td>{metric.target}</td>
                <td className={metric.status === '✅' ? 'good' : 'warning'}>
                  {metric.actual}
                </td>
                <td className="status">{metric.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="stock-management">
        <h3>📦 Stock Critique à Surveiller</h3>
        <div className="stock-prompt">
          <code>
            ChatGPT prompt : "Crée dashboard visuel stock maintenance :<br/>
            - Filtres clim (rouge si &lt;10)<br/>
            - Ampoules LED (jaune si &lt;20)<br/>
            - Produits entretien (vert si OK)<br/>
            - Pièces plomberie courantes<br/>
            Avec alertes automatiques"
          </code>
        </div>
      </div>

      <div className="checklists">
        <h3>📱 Check-lists Mobiles</h3>
        <div className="checklist-grid">
          <div className="checklist-card">
            <h4>Ronde Quotidienne (7h00)</h4>
            <ul className="checklist">
              {slide.content.dailyChecklist.map((item, index) => (
                <li key={index}>
                  <input type="checkbox" id={`daily-${index}`} />
                  <label htmlFor={`daily-${index}`}>{item}</label>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="checklist-card">
            <h4>Vérification Hebdomadaire</h4>
            <ul className="checklist">
              {slide.content.weeklyChecklist.map((item, index) => (
                <li key={index}>
                  <input type="checkbox" id={`weekly-${index}`} />
                  <label htmlFor={`weekly-${index}`}>{item}</label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderEmergency = () => (
    <motion.div 
      className="maintenance-emergency"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="emergency-title">⚡ Workflows Urgence</h2>
      
      <div className="emergency-procedures">
        {slide.content.emergencyProcedures.map((procedure, index) => (
          <motion.div
            key={index}
            className="emergency-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="emergency-header">
              <h3>{procedure.title}</h3>
              <span className="emergency-icon">{procedure.icon}</span>
            </div>
            
            <div className="emergency-steps">
              {procedure.steps.map((step, idx) => (
                <div key={idx} className="emergency-step">
                  <span className="step-number">{idx + 1}</span>
                  <div>
                    <strong>{step.action}:</strong> {step.detail}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="communication-templates">
        <h3>💬 Templates Communication Urgence</h3>
        <div className="templates-grid">
          <div className="template-card">
            <h4>SMS Automatique</h4>
            <div className="template-content">
              "Coupure secteur X, générateur en route. Rétablissement estimé : [HEURE]"
            </div>
          </div>
          
          <div className="template-card">
            <h4>WhatsApp Groupe</h4>
            <div className="template-content">
              "🚨 [TYPE URGENCE] - Localisation : [LIEU]<br/>
              Actions en cours. Éviter zone.<br/>
              Contact : [NUMÉRO]"
            </div>
          </div>
          
          <div className="template-card">
            <h4>Email Direction</h4>
            <div className="template-content">
              "Incident technique [DATE/HEURE]<br/>
              Nature : [DESCRIPTION]<br/>
              Impact : [ZONES AFFECTÉES]<br/>
              Résolution prévue : [DÉLAI]"
            </div>
          </div>
        </div>
      </div>

      <div className="prevention-calendar">
        <h3>📅 Maintenance Préventive Annuelle</h3>
        <div className="calendar-grid">
          <div className="period-card">
            <h4>MENSUEL</h4>
            <ul>
              <li>Filtres climatisation (saison)</li>
              <li>Tests alarmes/sécurité</li>
              <li>Vérification éclairage secours</li>
            </ul>
          </div>
          
          <div className="period-card">
            <h4>TRIMESTRIEL</h4>
            <ul>
              <li>Révision complète climatiseurs</li>
              <li>Contrôle installations électriques</li>
              <li>Traitement anti-nuisibles</li>
            </ul>
          </div>
          
          <div className="period-card">
            <h4>ANNUEL</h4>
            <ul>
              <li>Peinture zones usure</li>
              <li>Révision toiture avant mousson</li>
              <li>Audit sécurité complet</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'overview': return renderOverview();
      case 'steps': return renderSteps();
      case 'cases': return renderCases();
      case 'dashboard': return renderDashboard();
      case 'emergency': return renderEmergency();
      default: return renderOverview();
    }
  };

  return (
    <div className="maintenance-workflow-slide">
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

export default MaintenanceWorkflowSlide;