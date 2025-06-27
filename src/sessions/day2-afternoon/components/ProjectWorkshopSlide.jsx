import React from 'react';
import { motion } from 'framer-motion';
import './ProjectWorkshopSlide.css';

const ProjectWorkshopSlide = ({ slide }) => {
  const { phases, supportTools, evaluationCriteria } = slide.content;

  return (
    <div className="project-workshop-slide">
      <div className="workshop-header">
        <h1 className="workshop-title">{slide.title}</h1>
        <p className="workshop-subtitle">{slide.subtitle}</p>
        <div className="workshop-duration">⏱️ {slide.content.duration}</div>
      </div>

      <div className="workshop-content">
        <div className="phases-section">
          <h2 className="section-title">📋 Phases de Travail</h2>
          <div className="phases-container">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                className="phase-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="phase-title">{phase.title}</h3>
                <ul className="phase-tasks">
                  {(phase.tasks || phase.elements || phase.checklist)?.map((item, idx) => (
                    <li key={idx} className="task-item">
                      <span className="task-bullet">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="tools-section">
          <h2 className="section-title">🛠️ {supportTools.title}</h2>
          <div className="tools-grid">
            {supportTools.tools.map((tool, index) => (
              <motion.div
                key={index}
                className="tool-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <h3 className="tool-name">{tool.name}</h3>
                <p className="tool-usage">{tool.usage}</p>
                {tool.prompt && (
                  <div className="tool-prompt">
                    <span className="prompt-label">💬 Prompt :</span>
                    <code>{tool.prompt}</code>
                  </div>
                )}
                {tool.templates && (
                  <div className="tool-templates">
                    {tool.templates.map((template, idx) => (
                      <span key={idx} className="template-badge">{template}</span>
                    ))}
                  </div>
                )}
                {tool.tip && (
                  <p className="tool-tip">💡 {tool.tip}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="criteria-section">
          <h2 className="section-title">✅ Critères d'Évaluation</h2>
          <div className="criteria-list">
            {evaluationCriteria.map((criterion, index) => (
              <motion.div
                key={index}
                className="criterion-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.05 }}
              >
                <span className="criterion-number">{index + 1}</span>
                <span className="criterion-text">{criterion}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="workshop-note">
        📝 {slide.notes}
      </div>
    </div>
  );
};

export default ProjectWorkshopSlide;