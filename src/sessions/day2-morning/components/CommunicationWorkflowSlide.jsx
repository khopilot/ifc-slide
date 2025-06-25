import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './CommunicationWorkflowSlide.css';

const CommunicationWorkflowSlide = ({ slide }) => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const tabs = [
    { id: 'overview', label: 'Vue d\'ensemble', icon: '📊' },
    { id: 'steps', label: '8 Étapes', icon: '📋' },
    { id: 'calendar', label: 'Calendrier', icon: '📅' },
    { id: 'templates', label: 'Templates', icon: '📝' },
    { id: 'kpis', label: 'KPIs', icon: '📈' }
  ];

  const renderOverview = () => (
    <motion.div 
      className="comm-overview"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="overview-header">
        <div className="workflow-icon">📢</div>
        <div className="workflow-info">
          <h2>Workflow Communication IFC : Campagne Multi-Canal</h2>
          <div className="workflow-meta">
            <span><strong>Département :</strong> Service Communication</span>
            <span><strong>Durée estimée :</strong> 2-3 heures pour campagne complète</span>
          </div>
        </div>
      </div>
      
      <div className="workflow-objective">
        <h3>🎯 Objectif</h3>
        <p>Créer et déployer une communication cohérente sur tous les canaux en utilisant l'IA pour maximiser l'impact et réduire le temps de production</p>
      </div>

      <div className="channels-grid">
        <h3>📱 Canaux de Communication</h3>
        <div className="channels">
          <div className="channel-card">
            <span className="channel-icon">📘</span>
            <h4>Facebook</h4>
            <p>Posts longs, événements</p>
          </div>
          <div className="channel-card">
            <span className="channel-icon">📸</span>
            <h4>Instagram</h4>
            <p>Visuels, stories, reels</p>
          </div>
          <div className="channel-card">
            <span className="channel-icon">💼</span>
            <h4>LinkedIn</h4>
            <p>Pro, partenariats</p>
          </div>
          <div className="channel-card">
            <span className="channel-icon">📧</span>
            <h4>Email</h4>
            <p>Newsletter, invitations</p>
          </div>
          <div className="channel-card">
            <span className="channel-icon">💬</span>
            <h4>WhatsApp</h4>
            <p>Rappels, urgent</p>
          </div>
          <div className="channel-card">
            <span className="channel-icon">🌐</span>
            <h4>Site Web</h4>
            <p>Info complète</p>
          </div>
        </div>
      </div>

      <div className="key-features">
        <h3>✨ Points Forts du Workflow</h3>
        <div className="features-list">
          <div className="feature">
            <span className="feature-icon">🌍</span>
            <div>
              <h4>Trilingue</h4>
              <p>FR / KH / EN automatique</p>
            </div>
          </div>
          <div className="feature">
            <span className="feature-icon">🎨</span>
            <div>
              <h4>Cohérence visuelle</h4>
              <p>Identité forte sur tous canaux</p>
            </div>
          </div>
          <div className="feature">
            <span className="feature-icon">⚡</span>
            <div>
              <h4>Rapidité</h4>
              <p>2-3h vs 2-3 jours</p>
            </div>
          </div>
          <div className="feature">
            <span className="feature-icon">📊</span>
            <div>
              <h4>Mesurable</h4>
              <p>KPIs et analytics intégrés</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderSteps = () => (
    <motion.div 
      className="comm-steps"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="steps-title">Workflow en 8 étapes</h2>
      <div className="steps-grid">
        {slide.content.steps.map((step, index) => (
          <motion.div
            key={index}
            className="step-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            style={{ '--step-color': step.color }}
          >
            <div className="step-header">
              <div className="step-number">{index + 1}</div>
              <div className="step-icon">{step.icon}</div>
            </div>
            
            <h3 className="step-title">{step.title}</h3>
            <span className="step-duration">{step.duration}</span>
            
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
            
            <div className="step-tool">
              <span className="tool-badge">{step.tool}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  const renderCalendar = () => (
    <motion.div 
      className="comm-calendar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="calendar-title">📅 Calendrier Type Campagne IFC</h2>
      
      <div className="timeline-container">
        {slide.content.calendar.map((phase, index) => (
          <motion.div
            key={index}
            className="timeline-phase"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="phase-marker">
              <span className="phase-day">{phase.day}</span>
            </div>
            <div className="phase-content">
              <h3>{phase.title}</h3>
              <ul>
                {phase.actions.map((action, idx) => (
                  <li key={idx}>{action}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="automation-tips">
        <h3>🚀 Automatisations Gain de Temps</h3>
        <div className="tips-grid">
          {slide.content.automations.map((auto, index) => (
            <div key={index} className="automation-card">
              <h4>{auto.title}</h4>
              <code>{auto.prompt}</code>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const renderTemplates = () => (
    <motion.div 
      className="comm-templates"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="templates-title">📝 Templates Spécifiques IFC</h2>
      
      <div className="template-section">
        <h3>A. Formules d'Accroche par Type d'Événement</h3>
        <div className="hooks-grid">
          {slide.content.templates.hooks.map((hook, index) => (
            <div key={index} className="hook-card">
              <h4>{hook.type}</h4>
              <div className="hook-versions">
                <p><span className="flag">🇫🇷</span> {hook.fr}</p>
                <p><span className="flag">🇰🇭</span> {hook.kh}</p>
                <p><span className="flag">🇬🇧</span> {hook.en}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="template-section">
        <h3>B. Hashtags Stratégiques</h3>
        <div className="hashtags-box">
          <code>
            #IFCCambodia #CultureFrançaise #ភាសាបារាំង<br/>
            #FrenchInPhnomPenh #InstitutFrançais #LearnFrench<br/>
            #CultureKH #FrancoCambodgien #IFCEvents<br/>
            [#ÉVÉNEMENT_SPÉCIFIQUE]
          </code>
        </div>
      </div>

      <div className="template-section">
        <h3>C. Formats Stories Instagram</h3>
        <div className="stories-formats">
          {slide.content.templates.storyFormats.map((format, index) => (
            <div key={index} className="story-format">
              <span className="format-number">{index + 1}</span>
              <h4>{format.type}</h4>
              <p>{format.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="checklist-section">
        <h3>✅ Check-list Pré-Publication</h3>
        <div className="checklist-grid">
          {slide.content.checklist.map((category, index) => (
            <div key={index} className="checklist-category">
              <h4>{category.category}</h4>
              <ul>
                {category.items.map((item, idx) => (
                  <li key={idx}>
                    <input type="checkbox" id={`check-${index}-${idx}`} />
                    <label htmlFor={`check-${index}-${idx}`}>{item}</label>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const renderKPIs = () => (
    <motion.div 
      className="comm-kpis"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="kpis-title">📊 KPIs et Objectifs Types</h2>
      
      <div className="kpis-table">
        <table>
          <thead>
            <tr>
              <th>Métrique</th>
              <th>Objectif</th>
              <th>Outil de mesure</th>
            </tr>
          </thead>
          <tbody>
            {slide.content.kpis.map((kpi, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <td>{kpi.metric}</td>
                <td className="kpi-objective">{kpi.objective}</td>
                <td>{kpi.tool}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pro-tips">
        <h3>💡 Conseils Pro Communication IFC</h3>
        <div className="tips-list">
          {slide.content.proTips.map((tip, index) => (
            <motion.div 
              key={index} 
              className="pro-tip"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="tip-number">{index + 1}</span>
              <div>
                <h4>{tip.title}</h4>
                <p>{tip.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div 
        className="impact-summary"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h3>🚀 Impact Global</h3>
        <p>Ce workflow permet au service communication de l'IFC de créer des campagnes complètes et cohérentes en réduisant drastiquement le temps de production tout en augmentant la qualité et la portée des messages.</p>
      </motion.div>
    </motion.div>
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'overview': return renderOverview();
      case 'steps': return renderSteps();
      case 'calendar': return renderCalendar();
      case 'templates': return renderTemplates();
      case 'kpis': return renderKPIs();
      default: return renderOverview();
    }
  };

  return (
    <div className="communication-workflow-slide">
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

export default CommunicationWorkflowSlide;