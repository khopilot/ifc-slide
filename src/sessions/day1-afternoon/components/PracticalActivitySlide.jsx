import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './PracticalActivitySlide.css';

const PracticalActivitySlide = ({ slide }) => {
  const [activeTab, setActiveTab] = useState('formation');

  const tabs = [
    { id: 'formation', label: 'Formation', icon: '👥' },
    { id: 'objectif', label: 'Objectif', icon: '🎯' },
    { id: 'ressources', label: 'Ressources', icon: '🛠️' },
    { id: 'exemples', label: 'Exemples', icon: '📋' },
    { id: 'planning', label: 'Planning', icon: '⏰' }
  ];

  return (
    <div className="practical-activity-slide">
      {/* Header */}
      <motion.div 
        className="activity-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="activity-title">{slide.title}</h1>
        <p className="activity-duration">Durée: {slide.duration}</p>
      </motion.div>

      {/* Tabs Navigation */}
      <motion.div 
        className="activity-tabs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-label">{tab.label}</span>
          </button>
        ))}
      </motion.div>

      {/* Tab Content */}
      <motion.div 
        className="tab-content"
        key={activeTab}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Formation des équipes */}
        {activeTab === 'formation' && (
          <div className="content-section">
            <h3 className="section-title">{slide.content.sections[0].title}</h3>
            <div className="points-grid">
              {slide.content.sections[0].points.map((point, idx) => (
                <motion.div 
                  key={idx} 
                  className="point-card"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="point-number">{idx + 1}</div>
                  <p className="point-text">{point}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Objectif du projet */}
        {activeTab === 'objectif' && (
          <div className="content-section">
            <h3 className="section-title">{slide.content.sections[1].title}</h3>
            <div className="objectives-list">
              {slide.content.sections[1].points.map((point, idx) => (
                <motion.div 
                  key={idx} 
                  className="objective-item"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <span className="objective-icon">✓</span>
                  <span className="objective-text">{point}</span>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Ressources disponibles */}
        {activeTab === 'ressources' && (
          <div className="content-section">
            <h3 className="section-title">{slide.content.sections[2].title}</h3>
            <div className="resources-grid">
              {slide.content.sections[2].points.map((point, idx) => (
                <motion.div 
                  key={idx} 
                  className="resource-card"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="resource-icon">💡</div>
                  <p className="resource-text">{point}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Exemples de projets */}
        {activeTab === 'exemples' && (
          <div className="content-section">
            <h3 className="section-title">{slide.content.sections[3].title}</h3>
            <div className="examples-grid">
              {slide.content.sections[3].points.map((point, idx) => (
                <motion.div 
                  key={idx} 
                  className="example-card"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="example-header">
                    <span className="example-number">{idx + 1}</span>
                    <h4 className="example-title">{point.split(':')[0]}</h4>
                  </div>
                  <p className="example-desc">{point.split(':')[1]}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Planning de demain */}
        {activeTab === 'planning' && (
          <div className="content-section">
            <h3 className="section-title">{slide.content.sections[4].title}</h3>
            <div className="timeline">
              {slide.content.sections[4].points.map((point, idx) => {
                const [time, ...descParts] = point.split(':');
                const desc = descParts.join(':');
                return (
                  <motion.div 
                    key={idx} 
                    className="timeline-item"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.15 }}
                  >
                    <div className="timeline-time">{time}</div>
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <p>{desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
      </motion.div>

      {/* Footer CTA */}
      <motion.div 
        className="activity-footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p className="footer-message">
          Préparez vos idées et choisissez votre partenaire pour demain ! 🚀
        </p>
      </motion.div>
    </div>
  );
};

export default PracticalActivitySlide;