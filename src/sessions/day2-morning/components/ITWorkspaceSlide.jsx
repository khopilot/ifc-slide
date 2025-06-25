import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ITWorkspaceSlide.css';

const ITWorkspaceSlide = ({ slide }) => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const tabs = [
    { id: 'overview', label: 'Vue d\'ensemble', icon: '💻' },
    { id: 'steps', label: '8 Étapes', icon: '📋' },
    { id: 'security', label: 'Sécurité', icon: '🛡️' },
    { id: 'automation', label: 'Automatisations', icon: '⚡' },
    { id: 'support', label: 'Support', icon: '📱' }
  ];

  const renderOverview = () => (
    <motion.div 
      className="it-overview"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="overview-header">
        <div className="workflow-icon">💻</div>
        <div className="workflow-info">
          <h2>Workflow IT/Google Workspace : Gestion et Support Informatique</h2>
          <div className="workflow-meta">
            <span><strong>Département :</strong> Service IT/Informatique</span>
            <span><strong>Durée estimée :</strong> 30-60 minutes selon la tâche</span>
          </div>
        </div>
      </div>
      
      <div className="workflow-objective">
        <h3>🎯 Objectif</h3>
        <p>Optimiser la gestion IT et le support utilisateurs avec Google Workspace en utilisant l'IA pour automatiser, sécuriser et former</p>
      </div>

      <div className="quick-wins">
        <h3>🚀 Quick Wins Immédiats</h3>
        <div className="wins-grid">
          {slide.content.quickWins.map((win, index) => (
            <div key={index} className="win-card">
              <h4>{win.title}</h4>
              <div className="win-content">
                {win.items.map((item, idx) => (
                  <div key={idx} className="win-item">
                    <span className="item-bullet">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="kpis-overview">
        <h3>📊 KPIs Service IT</h3>
        <table className="kpis-table">
          <thead>
            <tr>
              <th>Indicateur</th>
              <th>Objectif</th>
              <th>Mesure</th>
            </tr>
          </thead>
          <tbody>
            {slide.content.kpis.map((kpi, index) => (
              <tr key={index}>
                <td>{kpi.indicator}</td>
                <td className="target">{kpi.target}</td>
                <td>{kpi.measure}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );

  const renderSteps = () => (
    <motion.div 
      className="it-steps"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="steps-title">Workflow en 8 étapes</h2>
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
            
            {step.scripts && (
              <div className="step-scripts">
                <span className="scripts-label">📝 Scripts :</span>
                {step.scripts.map((script, idx) => (
                  <div key={idx} className="script-item">
                    <h5>{script.name}</h5>
                    <ul>
                      {script.features.map((feature, fidx) => (
                        <li key={fidx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
            
            {step.modules && (
              <div className="step-modules">
                <span className="modules-label">📚 Modules :</span>
                {step.modules.map((module, idx) => (
                  <div key={idx} className="module-item">
                    <h5>{module.level}</h5>
                    <ul>
                      {module.topics.map((topic, tidx) => (
                        <li key={tidx}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                ))}
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

  const renderSecurity = () => (
    <motion.div 
      className="it-security"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="security-title">🛡️ Sécurité Google Workspace IFC</h2>
      
      <div className="security-config">
        <h3>Configuration Sécurité Recommandée</h3>
        <div className="config-prompt">
          <code>
            ChatGPT prompt : "Crée checklist sécurité Google Workspace pour organisation 50 personnes :<br/>
            - 2FA obligatoire admins<br/>
            - Politiques mots de passe<br/>
            - Restrictions partage externe<br/>
            - DLP règles données sensibles<br/>
            - Alertes administrateur<br/>
            - Backup stratégie"
          </code>
        </div>
      </div>

      <div className="incident-response">
        <h3>Plan de Réponse aux Incidents</h3>
        <div className="incident-cards">
          {slide.content.incidentResponse.map((incident, index) => (
            <div key={index} className="incident-card">
              <h4>{incident.type}</h4>
              <div className="incident-steps">
                {incident.steps.map((step, idx) => (
                  <div key={idx} className="incident-step">
                    <span className="step-number">{idx + 1}</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="security-audit">
        <h3>🔍 Audit de Sécurité</h3>
        <div className="audit-prompt">
          <h4>Analyse des logs Google Admin</h4>
          <code>
            Analyse ces logs Google Admin :<br/>
            [EXPORT LOGS]<br/><br/>
            Identifie :<br/>
            - Connexions inhabituelles<br/>
            - Partages externes massifs<br/>
            - Comptes inactifs +90 jours<br/>
            - Violations politiques sécurité<br/>
            - Recommandations prioritaires
          </code>
        </div>
      </div>

      <div className="security-threats">
        <h3>🚨 Veille Sécurité</h3>
        <div className="threats-list">
          {slide.content.securityThreats.map((threat, index) => (
            <div key={index} className="threat-item">
              <span className="threat-icon">⚠️</span>
              <span>{threat}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const renderAutomation = () => (
    <motion.div 
      className="it-automation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="automation-title">⚡ Automatisations Prioritaires</h2>
      
      <div className="automation-workflows">
        {slide.content.automations.map((automation, index) => (
          <motion.div
            key={index}
            className="automation-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3>{automation.title}</h3>
            <div className="automation-flow">
              {automation.steps.map((step, idx) => (
                <div key={idx} className="flow-step">
                  {idx > 0 && <span className="flow-arrow">→</span>}
                  <span className="flow-item">{step}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="apps-scripts">
        <h3>💡 Scripts Apps Script Essentiels</h3>
        <div className="scripts-grid">
          {slide.content.essentialScripts.map((script, index) => (
            <div key={index} className="script-card">
              <h4>{script.title}</h4>
              <code className="script-code">
                {script.code}
              </code>
              <p className="script-description">{script.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="integrations">
        <h3>🔗 Intégrations Google Workspace</h3>
        <div className="integrations-list">
          {slide.content.integrations.map((integration, index) => (
            <div key={index} className="integration-item">
              <h4>{integration.name}</h4>
              <ul>
                {integration.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const renderSupport = () => (
    <motion.div 
      className="it-support"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="support-title">📱 Support Multi-Dispositifs</h2>
      
      <div className="device-support">
        {slide.content.deviceSupport.map((device, index) => (
          <div key={index} className="device-card">
            <h3>{device.type}</h3>
            <ul>
              {device.configs.map((config, idx) => (
                <li key={idx}>{config}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="common-issues">
        <h3>🔧 Problèmes Fréquents et Solutions</h3>
        <div className="issues-accordion">
          {slide.content.commonIssues.map((issue, index) => (
            <motion.div 
              key={index} 
              className="issue-item"
              whileHover={{ scale: 1.02 }}
            >
              <div className="issue-header">
                <span className="issue-number">{index + 1}</span>
                <h4>{issue.problem}</h4>
              </div>
              <div className="issue-solution">
                <div className="diagnosis">
                  <strong>Diagnostic :</strong>
                  <ul>
                    {issue.diagnosis.map((step, idx) => (
                      <li key={idx}>{step}</li>
                    ))}
                  </ul>
                </div>
                <div className="solution">
                  <strong>Solution :</strong>
                  <p>{issue.solution}</p>
                </div>
                {issue.escalate && (
                  <div className="escalate">
                    <strong>Escalader si :</strong> {issue.escalate}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="drive-structure">
        <h3>📁 Structure Drive Organisation</h3>
        <div className="folder-tree">
          <code>
            /IFC Shared Drive/<br/>
            &nbsp;&nbsp;├── 01_Administration/<br/>
            &nbsp;&nbsp;├── 02_Communication/<br/>
            &nbsp;&nbsp;├── 03_Cours/<br/>
            &nbsp;&nbsp;├── 04_Événements/<br/>
            &nbsp;&nbsp;├── 05_Templates/<br/>
            &nbsp;&nbsp;└── 06_Archives_[ANNÉE]/
          </code>
        </div>
      </div>

      <div className="calendars-structure">
        <h3>📅 Structure Calendriers Partagés</h3>
        <div className="calendars-list">
          {slide.content.sharedCalendars.map((calendar, index) => (
            <div key={index} className="calendar-item">
              <strong>{calendar.name}</strong>
              <span className="calendar-desc">{calendar.description}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'overview': return renderOverview();
      case 'steps': return renderSteps();
      case 'security': return renderSecurity();
      case 'automation': return renderAutomation();
      case 'support': return renderSupport();
      default: return renderOverview();
    }
  };

  return (
    <div className="it-workspace-slide">
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

export default ITWorkspaceSlide;