import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ConclusionSlide.css';

const ConclusionSlide = ({ slide }) => {
  const [activeSection, setActiveSection] = useState('takeaways');
  const { keyTakeaways, achievements, commitments, certificate, finalMessage, contacts } = slide.content;

  const sections = [
    { id: 'takeaways', label: 'Points Clés', icon: '🎯' },
    { id: 'achievements', label: 'Accomplissements', icon: '🏆' },
    { id: 'commitments', label: 'Engagements', icon: '📋' },
    { id: 'certificate', label: 'Certificat', icon: '📜' },
    { id: 'message', label: 'Message', icon: '💫' }
  ];

  const renderContent = () => {
    switch(activeSection) {
      case 'takeaways':
        return (
          <motion.div
            key="takeaways"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="takeaways-content"
          >
            <h2 className="content-title">{keyTakeaways.title}</h2>
            <div className="takeaways-list">
              {keyTakeaways.points.map((point, index) => (
                <motion.div
                  key={index}
                  className="takeaway-item"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="takeaway-number">{index + 1}</span>
                  <p className="takeaway-text">{point}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 'achievements':
        return (
          <motion.div
            key="achievements"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="achievements-content"
          >
            <h2 className="content-title">{achievements.title}</h2>
            <div className="achievements-grid">
              {achievements.items.map((item, index) => (
                <motion.div
                  key={index}
                  className="achievement-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="achievement-icon">✅</div>
                  <p className="achievement-text">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 'commitments':
        return (
          <motion.div
            key="commitments"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="commitments-content"
          >
            <h2 className="content-title">{commitments.title}</h2>
            <div className="commitments-form">
              {commitments.personal.map((commitment, index) => (
                <motion.div
                  key={index}
                  className="commitment-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="commitment-check">☐</span>
                  <p className="commitment-text">{commitment}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 'certificate':
        return (
          <motion.div
            key="certificate"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="certificate-content"
          >
            <h2 className="content-title">{certificate.title}</h2>
            <div className="certificate-card">
              <p className="certificate-text">{certificate.text}</p>
              <div className="certificate-elements">
                {certificate.elements.map((element, index) => (
                  <motion.div
                    key={index}
                    className="element-badge"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    {element}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        );

      case 'message':
        return (
          <motion.div
            key="message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="message-content"
          >
            <h2 className="content-title">{finalMessage.title}</h2>
            <div className="message-card">
              <blockquote className="message-quote">
                {finalMessage.quote}
              </blockquote>
              <p className="message-signature">— {finalMessage.signature}</p>
            </div>
            <div className="contacts-section">
              <h3 className="contacts-title">{contacts.title}</h3>
              <div className="contacts-list">
                {contacts.items.map((item, index) => (
                  <motion.div
                    key={index}
                    className="contact-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="conclusion-slide">
      <div className="conclusion-header">
        <h1 className="conclusion-title">{slide.title}</h1>
        <p className="conclusion-subtitle">{slide.subtitle}</p>
      </div>

      <div className="conclusion-navigation">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`nav-button ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => setActiveSection(section.id)}
          >
            <span className="nav-icon">{section.icon}</span>
            <span className="nav-label">{section.label}</span>
          </button>
        ))}
      </div>

      <div className="conclusion-content">
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </div>

      <motion.div 
        className="thank-you-footer"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <p>Merci pour votre participation ! 🙏</p>
      </motion.div>
    </div>
  );
};

export default ConclusionSlide;