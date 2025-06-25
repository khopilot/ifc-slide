import React, { useMemo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiX, 
  FiChevronRight, 
  FiSun, 
  FiSunset,
  FiCoffee,
  FiBook,
  FiTool,
  FiTarget,
  FiClock,
  FiLayers
} from 'react-icons/fi';
import './SlideNavigator.css';

const SlideNavigator = ({ slides, currentSlide, onSelectSlide, onClose }) => {
  const [activeSession, setActiveSession] = useState(null);

  // Configuration simple et claire des sessions
  const sessionConfig = {
    'intro': { start: 0, end: 0 },      // 1 slide
    'day1-morning': { start: 1, end: 33 },   // 33 slides
    'day1-afternoon': { start: 34, end: 56 }, // 23 slides
    'day2-morning': { start: 57, end: 69 },   // 13 slides
    'day2-afternoon': { start: 70, end: 71 }  // 2 slides
  };

  // Organiser les slides par session
  const sessions = useMemo(() => {
    if (!slides || slides.length === 0) return [];

    const sessionList = [
      {
        id: 'intro',
        title: 'Introduction',
        icon: <FiBook />,
        time: 'Accueil',
        color: '#6366f1',
        slides: []
      },
      {
        id: 'day1-morning',
        title: 'Jour 1 - Matinée',
        subtitle: 'Histoire de l\'IA • Chronologie • Prompt Engineering',
        icon: <FiSun />,
        time: '9h00 - 12h00',
        color: '#3b82f6',
        description: 'Timeline IA (1936-2025) + Maîtrise des prompts',
        slides: []
      },
      {
        id: 'day1-afternoon',
        title: 'Jour 1 - Après-midi',
        subtitle: 'Exploration des Outils IA • Conversation • Création • Recherche',
        icon: <FiSunset />,
        time: '13h30 - 17h00',
        color: '#f59e0b',
        description: 'ChatGPT, Claude, DALL-E, Perplexity, Gamma...',
        slides: []
      },
      {
        id: 'day2-morning',
        title: 'Jour 2 - Matinée',
        subtitle: 'Workflows Avancés • Communication • Maintenance • IT • Événements • Juridique • CDL',
        icon: <FiTarget />,
        time: '9h00 - 12h00',
        color: '#10b981',
        description: 'Workflows complets + Atelier création personnalisée',
        slides: []
      },
      {
        id: 'day2-afternoon',
        title: 'Jour 2 - Après-midi',
        subtitle: 'Session en développement',
        icon: <FiLayers />,
        time: '14h00 - 17h00',
        color: '#8b5cf6',
        description: 'Contenu à venir - en cours de développement',
        slides: []
      }
    ];

    // Assigner les slides aux sessions basé sur les indices
    slides.forEach((slide, index) => {
      const slideWithIndex = { ...slide, index };
      
      // Trouver quelle session contient cet index
      for (let session of sessionList) {
        const config = sessionConfig[session.id];
        if (index >= config.start && index <= config.end) {
          session.slides.push(slideWithIndex);
          break;
        }
      }
    });

    console.log('📊 Session mapping:');
    sessionList.forEach(session => {
      console.log(`${session.id}: ${session.slides.length} slides`);
      if (session.slides.length > 0) {
        console.log(`  First: ${session.slides[0].id}`);
        console.log(`  Last: ${session.slides[session.slides.length - 1].id}`);
      }
    });

    return sessionList;
  }, [slides]);

  // Auto-sélection de la session active basée sur le slide actuel
  useEffect(() => {
    if (currentSlide >= 0) {
      // Trouver quelle session contient le slide actuel
      for (let sessionId in sessionConfig) {
        const config = sessionConfig[sessionId];
        if (currentSlide >= config.start && currentSlide <= config.end) {
          if (activeSession !== sessionId) {
            setActiveSession(sessionId);
            console.log(`Auto-selected session: ${sessionId} for slide ${currentSlide}`);
          }
          break;
        }
      }
    }
  }, [currentSlide, activeSession]);

  // Obtenir l'icône pour le type de slide
  const getSlideIcon = (type) => {
    const iconMap = {
      'title': '🎯',
      'recap-slide': '🔄',
      'concept-clarification': '💡',
      'timeline': '📅',
      'presentation': '📊',
      'prompt-engineering': '💡',
      'practical-activity': '🚀',
      'afternoon-title': '🌅',
      'tool-showcase': '🛠️',
      'tool-category': '📦',
      'tool-links': '🔗',
      'communication-workflow': '📢',
      'maintenance-workflow': '🔧',
      'it-workspace': '💻',
      'event-workflow': '🎭',
      'legal-workflow': '⚖️',
      'cdl-recruitment': '📚',
      'team-formation': '👥',
      'meta-workflow': '🎨',
      'workshop-scenarios': '📋',
      'practical-workshop': '🛠️',
      'break': '☕',
      'afternoon-break': '☕',
      'lunch': '🍽️'
    };
    return iconMap[type] || '📄';
  };

  // Obtenir un titre lisible pour les slides
  const getSlideTitle = (slide) => {
    if (!slide || !slide.id) return slide?.title || 'Sans titre';
    
    // Gestion des timeline
    if (typeof slide.id === 'string' && slide.id.startsWith('timeline-')) {
      const year = slide.id.replace('timeline-', '');
      return `${year} - ${slide.title || ''}`;
    }
    
    // Titres personnalisés pour Day 2
    const day2Titles = {
      'day2-morning-title': 'Workflows IA - Jour 2',
      'day2-recap': 'Récapitulatif Jour 1',
      'day2-concept-clarification': 'Concepts Clés',
      'day2-communication-workflow': 'Communication IFC',
      'day2-maintenance-workflow': 'Maintenance Technique',
      'day2-it-workspace': 'IT & Google Workspace',
      'day2-event-workflow': 'Événementiel',
      'day2-legal-workflow': 'Juridique & Contrats',
      'day2-cdl-recruitment': 'CDL - Recrutement',
      'day2-morning-break': 'Pause Matinée',
      'day2-team-formation': 'Formation Équipes',
      'day2-meta-workflow': 'Atelier Création Workflows',
      'day2-lunch': 'Déjeuner',
      'day2-afternoon-title': 'Jour 2 - Après-midi',
      'day2-afternoon-placeholder': 'Contenu à venir'
    };
    
    if (typeof slide.id === 'string' && slide.id.startsWith('day2-')) {
      return day2Titles[slide.id] || slide.title || slide.id;
    }
    
    return slide.title || slide.id || 'Sans titre';
  };

  return (
    <AnimatePresence>
      <motion.div
        className="slide-navigator-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="slide-navigator-modern"
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <header className="navigator-header-modern">
            <div className="header-left">
              <h2>Formation IA - IFC</h2>
              <p className="header-subtitle">Intelligence Artificielle pour l'Institut Français du Cambodge</p>
            </div>
            <motion.button 
              className="close-btn-modern" 
              onClick={onClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiX />
            </motion.button>
          </header>
          
          {/* Body */}
          <div className="navigator-body-modern">
            {/* Sessions Sidebar */}
            <div className="sessions-timeline">
              {sessions.map((session, idx) => (
                <motion.div
                  key={session.id}
                  className={`session-card ${activeSession === session.id ? 'active' : ''} ${session.slides.length === 0 ? 'disabled' : ''}`}
                  onClick={() => session.slides.length > 0 && setActiveSession(session.id)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={session.slides.length > 0 ? { y: -2 } : {}}
                  style={{ '--session-color': session.color }}
                >
                  <div className="session-icon" style={{ color: session.color }}>
                    {session.icon}
                  </div>
                  <div className="session-info">
                    <h3>{session.title}</h3>
                    {session.subtitle && <p className="session-subtitle">{session.subtitle}</p>}
                    {session.description && <p className="session-description">{session.description}</p>}
                    <div className="session-meta">
                      <FiClock size={12} />
                      <span>{session.time}</span>
                      {session.slides.length > 0 && (
                        <>
                          <span className="separator">•</span>
                          <span>{session.slides.length} slides</span>
                        </>
                      )}
                    </div>
                  </div>
                  {session.slides.length > 0 && (
                    <FiChevronRight className="session-arrow" />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Slides Section */}
            <AnimatePresence mode="wait">
              {activeSession ? (
                <motion.div
                  key={activeSession}
                  className="slides-section"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {sessions.find(s => s.id === activeSession)?.slides.map((slide, idx) => (
                    <motion.div
                      key={`${slide.id || idx}-${slide.index}`}
                      className={`slide-item ${slide.index === currentSlide ? 'current' : ''}`}
                      onClick={() => onSelectSlide(slide.index)}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.03 }}
                      whileHover={{ scale: 1.01, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="slide-item-left">
                        <span className="slide-emoji">{getSlideIcon(slide.type)}</span>
                        <div className="slide-info">
                          <h4>{getSlideTitle(slide)}</h4>
                          {slide.subtitle && <p>{slide.subtitle}</p>}
                        </div>
                      </div>
                      <div className="slide-item-right">
                        {slide.duration && (
                          <span className="slide-duration">{slide.duration}</span>
                        )}
                        <span className="slide-index">{slide.index + 1}</span>
                        {slide.index === currentSlide && (
                          <motion.span 
                            className="current-badge"
                            layoutId="currentBadge"
                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                          >
                            En cours
                          </motion.span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <div className="empty-state">
                  <div className="empty-icon">🎓</div>
                  <h3>Sélectionnez une session</h3>
                  <p>Choisissez une session de formation pour explorer les slides et le contenu disponible</p>
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer */}
          <footer className="navigator-footer">
            <div className="progress-info">
              <span>Slide actuel: {currentSlide + 1} / {slides.length}</span>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                />
              </div>
              <span className="progress-percentage">{Math.round(((currentSlide + 1) / slides.length) * 100)}%</span>
            </div>
            <div className="keyboard-hint">
              <kbd>ESC</kbd> fermer • <kbd>←</kbd> <kbd>→</kbd> naviguer • <kbd>N</kbd> navigation
            </div>
          </footer>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SlideNavigator;