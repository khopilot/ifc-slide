import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './CDLRecruitmentSlide.css';

const CDLRecruitmentSlide = ({ slide }) => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const tabs = [
    { id: 'overview', label: 'Vue d\'ensemble', icon: '📊' },
    { id: 'steps', label: 'Étapes détaillées', icon: '📋' },
    { id: 'templates', label: 'Templates & Outils', icon: '📚' },
    { id: 'automations', label: 'Automatisations', icon: '🚀' },
    { id: 'checklist', label: 'Checklist', icon: '✅' }
  ];

  const renderOverview = () => (
    <motion.div 
      className="cdl-overview"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="overview-header">
        <div className="workflow-icon">📚</div>
        <div className="workflow-info">
          <h2>Workflow CDL : Gestion des CV et Recrutement de Formateurs</h2>
          <div className="workflow-meta">
            <span><strong>Département :</strong> Campus des Langues (CDL) - Administration</span>
            <span><strong>Durée estimée :</strong> 45-60 minutes par candidat</span>
          </div>
        </div>
      </div>
      
      <div className="workflow-objective">
        <h3>🎯 Objectif</h3>
        <p>Optimiser le processus de recrutement des formateurs de français en utilisant l'IA pour automatiser le tri, l'évaluation et la communication</p>
      </div>

      <div className="time-comparison">
        <h3>⏱️ Gain de Temps Estimé</h3>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Processus</th>
                <th>Avant</th>
                <th>Avec IA</th>
                <th>Gain</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tri 50 CV</td>
                <td>5h</td>
                <td className="time-ai">30 min</td>
                <td className="time-gain">90%</td>
              </tr>
              <tr>
                <td>Préparation entretiens</td>
                <td>2h</td>
                <td className="time-ai">20 min</td>
                <td className="time-gain">83%</td>
              </tr>
              <tr>
                <td>Tests pédagogiques</td>
                <td>1h</td>
                <td className="time-ai">15 min</td>
                <td className="time-gain">75%</td>
              </tr>
              <tr>
                <td>Synthèses décisionnelles</td>
                <td>3h</td>
                <td className="time-ai">30 min</td>
                <td className="time-gain">83%</td>
              </tr>
              <tr className="total-row">
                <td><strong>TOTAL/SEMAINE</strong></td>
                <td><strong>11h</strong></td>
                <td className="time-ai"><strong>1h35</strong></td>
                <td className="time-gain"><strong>86%</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="key-benefits">
        <h3>✨ Avantages Clés</h3>
        <div className="benefits-grid">
          <div className="benefit-card">
            <span className="benefit-icon">🎯</span>
            <h4>Objectivité</h4>
            <p>Critères standardisés</p>
          </div>
          <div className="benefit-card">
            <span className="benefit-icon">🌏</span>
            <h4>Adaptation locale</h4>
            <p>Contexte cambodgien</p>
          </div>
          <div className="benefit-card">
            <span className="benefit-icon">⚡</span>
            <h4>Rapidité</h4>
            <p>86% plus rapide</p>
          </div>
          <div className="benefit-card">
            <span className="benefit-icon">📈</span>
            <h4>Scalabilité</h4>
            <p>50+ CV facilement</p>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderSteps = () => (
    <motion.div 
      className="cdl-steps"
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
            
            {step.prompts && (
              <div className="step-prompts">
                <span className="prompts-label">💬 Prompts types :</span>
                <ul>
                  {step.prompts.map((prompt, idx) => (
                    <li key={idx}><code>{prompt}</code></li>
                  ))}
                </ul>
              </div>
            )}
            
            {step.output && (
              <div className="step-output">
                <span className="output-label">📤 Output :</span>
                <p>{step.output}</p>
              </div>
            )}
            
            {step.attention && (
              <div className="step-attention">
                <span className="attention-label">⚠️ Attention :</span>
                <p>{step.attention}</p>
              </div>
            )}
            
            {step.exercises && (
              <div className="step-exercises">
                {step.exercises.map((exercise, idx) => (
                  <div key={idx} className="exercise-item">
                    <h4>{exercise.title}</h4>
                    <p>{exercise.description}</p>
                  </div>
                ))}
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

  const renderTemplates = () => (
    <motion.div 
      className="cdl-templates"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="templates-title">📊 Templates et Outils Spécifiques CDL</h2>
      
      <div className="template-section">
        <h3>A. Grille d'Évaluation Standardisée</h3>
        <div className="evaluation-grid">
          <div className="grid-category">
            <h4>COMPÉTENCES TECHNIQUES (/40)</h4>
            <ul>
              <li>□ Diplômes FLE (/10)</li>
              <li>□ Expérience enseignement (/10)</li>
              <li>□ Connaissance CECRL (/10)</li>
              <li>□ Outils numériques (/10)</li>
            </ul>
          </div>
          <div className="grid-category">
            <h4>COMPÉTENCES DOUCES (/30)</h4>
            <ul>
              <li>□ Adaptation culturelle (/10)</li>
              <li>□ Gestion de classe (/10)</li>
              <li>□ Créativité pédagogique (/10)</li>
            </ul>
          </div>
          <div className="grid-category">
            <h4>ASPECTS PRATIQUES (/30)</h4>
            <ul>
              <li>□ Disponibilités (/10)</li>
              <li>□ Stabilité probable (/10)</li>
              <li>□ Prétentions salariales (/10)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="template-section">
        <h3>B. Questions d'Entretien Spécifiques Cambodge</h3>
        <div className="interview-questions">
          {slide.content.interviewQuestions.map((category, index) => (
            <motion.div 
              key={index} 
              className="question-category"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h4>{category.category}</h4>
              <ul>
                {category.questions.map((question, idx) => (
                  <li key={idx}>{question}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="template-section">
        <h3>📧 Email Templates</h3>
        <div className="email-template">
          <h4>Convocation entretien :</h4>
          <div className="template-box">
            <p><strong>Objet :</strong> Votre candidature au CDL - Entretien</p>
            <p>Bonjour [PRÉNOM],</p>
            <p>Suite à l'examen de votre candidature pour le poste de formateur/trice de français au Campus des Langues, nous avons le plaisir de vous convier à un entretien.</p>
            <p><strong>Date :</strong> [DATE]<br/>
            <strong>Heure :</strong> [HEURE] (heure de Phnom Penh)<br/>
            <strong>Durée :</strong> 45 minutes<br/>
            <strong>Format :</strong> [Présentiel/Visio]</p>
            <p>Merci de confirmer votre disponibilité.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderAutomations = () => (
    <motion.div 
      className="cdl-automations"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="automations-title">🚀 Automatisations Possibles</h2>
      
      <div className="automation-card">
        <h3>1. Pré-tri Automatique des CV</h3>
        <div className="code-block">
          <span className="code-label">Prompt pour ChatGPT :</span>
          <code>
            "Crée un script qui détecte dans un CV :<br/>
            - Mots-clés : FLE, DAEFLE, Master, Alliance Française<br/>
            - Expérience : Asie, Cambodge, ASEAN<br/>
            - Langues : français natif, anglais, khmer (bonus)<br/>
            Score chaque CV sur 100"
          </code>
        </div>
      </div>

      <div className="automation-card">
        <h3>2. Communication Automatisée</h3>
        <div className="comm-scenarios">
          <div className="scenario">
            <h4>✅ Candidats retenus :</h4>
            <ul>
              <li>Email de félicitations personnalisé</li>
              <li>Package de bienvenue CDL (PDF)</li>
              <li>Planning d'intégration</li>
            </ul>
          </div>
          <div className="scenario">
            <h4>❌ Candidats non retenus :</h4>
            <ul>
              <li>Email de refus bienveillant</li>
              <li>Encouragements personnalisés</li>
              <li>Option : garde dans vivier</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="vigilance-section">
        <h3>⚠️ Points de Vigilance CDL</h3>
        <div className="vigilance-grid">
          {slide.content.vigilancePoints.map((point, index) => (
            <div key={index} className="vigilance-card">
              <h4>{point.title}</h4>
              <ul>
                {point.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const renderChecklist = () => (
    <motion.div 
      className="cdl-checklist"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="checklist-title">📝 Checklist Recrutement CDL</h2>
      
      <div className="checklist-phases">
        {slide.content.checklistPhases.map((phase, index) => (
          <motion.div
            key={index}
            className="phase-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3>{phase.phase}</h3>
            <ul className="checklist-items">
              {phase.items.map((item, idx) => (
                <li key={idx}>
                  <input type="checkbox" id={`check-${index}-${idx}`} />
                  <label htmlFor={`check-${index}-${idx}`}>{item}</label>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="final-note"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <p>Ce workflow permet au CDL de gérer efficacement les recrutements tout en maintenant la qualité pédagogique et l'adaptation au contexte cambodgien.</p>
      </motion.div>
    </motion.div>
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'overview': return renderOverview();
      case 'steps': return renderSteps();
      case 'templates': return renderTemplates();
      case 'automations': return renderAutomations();
      case 'checklist': return renderChecklist();
      default: return renderOverview();
    }
  };

  return (
    <div className="cdl-recruitment-slide">
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

export default CDLRecruitmentSlide;