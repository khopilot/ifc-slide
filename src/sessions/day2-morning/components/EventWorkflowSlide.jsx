import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './EventWorkflowSlide.css';

const EventWorkflowSlide = ({ slide }) => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const tabs = [
    { id: 'overview', label: 'Vue d\'ensemble', icon: '🎭' },
    { id: 'steps', label: '10 Étapes', icon: '📋' },
    { id: 'timeline', label: 'Timeline', icon: '🎯' },
    { id: 'budget', label: 'Budget', icon: '📊' },
    { id: 'innovation', label: 'Innovations', icon: '✨' }
  ];

  const renderOverview = () => (
    <motion.div 
      className="event-overview"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="overview-header">
        <div className="workflow-icon">🎭</div>
        <div className="workflow-info">
          <h2>Workflow Événementiel IFC : Festival de la Francophonie</h2>
          <div className="workflow-meta">
            <span><strong>Département :</strong> Service Événementiel/Culturel</span>
            <span><strong>Durée estimée :</strong> 3-4 heures pour l'organisation complète</span>
          </div>
        </div>
      </div>
      
      <div className="workflow-objective">
        <h3>🎯 Objectif</h3>
        <p>Organiser un événement culturel majeur de A à Z en utilisant l'IA pour optimiser chaque aspect : conception, logistique, communication et analyse</p>
      </div>

      <div className="event-concept">
        <h3>🌟 Concept du Festival</h3>
        <div className="concept-card">
          <h4>"Confluences - Là où le Mékong rencontre la Seine"</h4>
          <div className="concept-details">
            <div className="detail-item">
              <span className="detail-icon">📅</span>
              <span>Durée : 3 jours</span>
            </div>
            <div className="detail-item">
              <span className="detail-icon">👥</span>
              <span>Public : 500-800 personnes/jour</span>
            </div>
            <div className="detail-item">
              <span className="detail-icon">🎨</span>
              <span>Activités : Mélange culturel FR-KH</span>
            </div>
            <div className="detail-item">
              <span className="detail-icon">💰</span>
              <span>Budget : 20,000$ optimisé</span>
            </div>
          </div>
        </div>
      </div>

      <div className="contingency-plans">
        <h3>🚨 Plans de Contingence</h3>
        <div className="contingency-grid">
          {slide.content.contingencyPlans.map((plan, index) => (
            <div key={index} className="contingency-card">
              <h4>{plan.type}</h4>
              <ul>
                {plan.measures.map((measure, idx) => (
                  <li key={idx}>{measure}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="coordination-tools">
        <h3>📱 Outils Coordination Jour J</h3>
        <div className="tools-grid">
          <div className="tool-card">
            <h4>WhatsApp Groupes</h4>
            <ul>
              {slide.content.whatsappGroups.map((group, index) => (
                <li key={index}>{group}</li>
              ))}
            </ul>
          </div>
          <div className="tool-card">
            <h4>Tableau de Bord Live</h4>
            <ul>
              {slide.content.liveDashboard.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderSteps = () => (
    <motion.div 
      className="event-steps"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="steps-title">Workflow en 10 étapes</h2>
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
            
            {step.prompts && (
              <div className="step-prompts">
                <span className="prompts-label">💬 Prompts :</span>
                {step.prompts.map((prompt, idx) => (
                  <div key={idx} className="prompt-item">{prompt}</div>
                ))}
              </div>
            )}
            
            {step.deliverables && (
              <div className="step-deliverables">
                <span className="deliverables-label">📦 Livrables :</span>
                <ul>
                  {step.deliverables.map((deliverable, idx) => (
                    <li key={idx}>{deliverable}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {step.content && (
              <div className="step-content">
                <span className="content-label">📝 Contenu :</span>
                <div className="content-details">{step.content}</div>
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

  const renderTimeline = () => (
    <motion.div 
      className="event-timeline"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="timeline-title">🎯 Timeline Compte à Rebours</h2>
      
      <div className="timeline-container">
        {slide.content.timeline.map((phase, index) => (
          <motion.div
            key={index}
            className="timeline-phase"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="phase-marker">
              <span className="phase-time">{phase.time}</span>
              <div className="phase-dot"></div>
            </div>
            <div className="phase-content">
              <h3>{phase.title}</h3>
              <ul>
                {phase.tasks.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="program-detail">
        <h3>📅 Programme Détaillé du Festival</h3>
        <div className="days-grid">
          {slide.content.program.map((day, index) => (
            <div key={index} className="day-card">
              <h4>{day.day}</h4>
              <div className="day-activities">
                {day.activities.map((activity, idx) => (
                  <div key={idx} className="activity-item">
                    <span className="activity-time">{activity.time}</span>
                    <span className="activity-name">{activity.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const renderBudget = () => (
    <motion.div 
      className="event-budget"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="budget-title">📊 Budget Type Festival (3 jours)</h2>
      
      <div className="budget-table-container">
        <table className="budget-table">
          <thead>
            <tr>
              <th>Poste</th>
              <th>Budget</th>
              <th>Optimisation IA</th>
            </tr>
          </thead>
          <tbody>
            {slide.content.budget.map((item, index) => (
              <tr key={index} className={item.isTotal ? 'total-row' : ''}>
                <td>{item.category}</td>
                <td className="budget-amount">{item.amount}</td>
                <td className="budget-optimization">{item.optimization}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="sponsorship-packages">
        <h3>💼 Packages Partenariats</h3>
        <div className="packages-grid">
          {slide.content.sponsorshipPackages.map((pkg, index) => (
            <div key={index} className="package-card" style={{'--package-color': pkg.color}}>
              <h4>{pkg.level}</h4>
              <div className="package-price">{pkg.price}</div>
              <ul>
                {pkg.benefits.map((benefit, idx) => (
                  <li key={idx}>{benefit}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="roi-analysis">
        <h3>📈 Retour sur Investissement</h3>
        <div className="roi-metrics">
          <div className="metric-card">
            <span className="metric-icon">👥</span>
            <h4>Fréquentation</h4>
            <p>2,000+ visiteurs sur 3 jours</p>
          </div>
          <div className="metric-card">
            <span className="metric-icon">📰</span>
            <h4>Couverture Média</h4>
            <p>15+ articles/reportages</p>
          </div>
          <div className="metric-card">
            <span className="metric-icon">🤝</span>
            <h4>Nouveaux Partenariats</h4>
            <p>8-10 entreprises locales</p>
          </div>
          <div className="metric-card">
            <span className="metric-icon">📱</span>
            <h4>Engagement Digital</h4>
            <p>50K+ interactions sociales</p>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderInnovation = () => (
    <motion.div 
      className="event-innovation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="innovation-title">✨ Innovations Événementielles</h2>
      
      <div className="innovations-grid">
        {slide.content.innovations.map((innovation, index) => (
          <motion.div
            key={index}
            className="innovation-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3>{innovation.title}</h3>
            <div className="innovation-features">
              {innovation.features.map((feature, idx) => (
                <div key={idx} className="feature-item">
                  <span className="feature-icon">→</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="media-strategy">
        <h3>📸 Stratégie Médias & Live Coverage</h3>
        <div className="media-grid">
          <div className="media-card">
            <h4>Préparation Contenus</h4>
            <ul>
              <li>Heygen : Avatar présentateur bilingue</li>
              <li>Templates stories Canva</li>
              <li>Interviews pré-enregistrées</li>
              <li>Teasers countdown</li>
            </ul>
          </div>
          <div className="media-card">
            <h4>Live Coverage</h4>
            <ul>
              <li>Stories Instagram temps réel</li>
              <li>Live tweets moments forts</li>
              <li>Facebook Live concerts</li>
              <li>TikTok challenges visiteurs</li>
            </ul>
          </div>
          <div className="media-card">
            <h4>Post-Event</h4>
            <ul>
              <li>Vidéo best-of 3 minutes</li>
              <li>Album photos officiel</li>
              <li>Témoignages participants</li>
              <li>Rapport impact visuel</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="success-factors">
        <h3>🎯 Facteurs Clés de Succès</h3>
        <div className="factors-list">
          <div className="factor-item">
            <span className="factor-number">1</span>
            <div>
              <h4>Préparation IA-Optimisée</h4>
              <p>Gain de 60% de temps sur la phase conception</p>
            </div>
          </div>
          <div className="factor-item">
            <span className="factor-number">2</span>
            <div>
              <h4>Communication Multi-Canal</h4>
              <p>Toucher 3x plus de public avec même budget</p>
            </div>
          </div>
          <div className="factor-item">
            <span className="factor-number">3</span>
            <div>
              <h4>Coordination Temps Réel</h4>
              <p>Réactivité maximale grâce aux outils digitaux</p>
            </div>
          </div>
          <div className="factor-item">
            <span className="factor-number">4</span>
            <div>
              <h4>Analyse Data-Driven</h4>
              <p>Amélioration continue basée sur métriques</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'overview': return renderOverview();
      case 'steps': return renderSteps();
      case 'timeline': return renderTimeline();
      case 'budget': return renderBudget();
      case 'innovation': return renderInnovation();
      default: return renderOverview();
    }
  };

  return (
    <div className="event-workflow-slide">
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

export default EventWorkflowSlide;