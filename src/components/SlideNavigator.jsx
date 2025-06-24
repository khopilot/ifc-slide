import React, { useMemo, useState } from 'react';
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

  // Organize slides by sessions (4 half-days)
  const sessions = useMemo(() => {
    // Find specific slides
    const mainTitle = slides.find(slide => slide.id === 'main-title');
    
    // Separate morning and afternoon slides based on their characteristics
    const morningSlides = slides.filter(slide => {
      // Skip main title
      if (slide.id === 'main-title') return false;
      
      // Morning slides have string IDs that start with 'morning-', 'timeline-', 'prompt-', etc.
      if (typeof slide.id === 'string') {
        return slide.id.startsWith('morning-') || 
               slide.id.startsWith('timeline-') || 
               slide.id.startsWith('prompt-') ||
               slide.id === 'coffee-break' ||
               slide.id === 'lunch-break';
      }
      return false;
    });
    
    // Afternoon slides have numeric IDs
    const afternoonSlides = slides.filter(slide => {
      // Skip main title
      if (slide.id === 'main-title') return false;
      
      // Afternoon slides have numeric IDs or specific afternoon types
      if (typeof slide.id === 'number') return true;
      if (slide.type === 'afternoon-title' || slide.type === 'afternoon-break') return true;
      if (slide.type?.includes('tool-')) return true;
      
      return false;
    });

    return [
      {
        id: 'intro',
        title: 'Introduction',
        icon: <FiBook />,
        time: 'Accueil',
        color: '#6366f1',
        slides: mainTitle ? [{ ...mainTitle, index: slides.indexOf(mainTitle) }] : []
      },
      {
        id: 'day1-morning',
        title: 'Jour 1 - Matin',
        subtitle: 'Fondamentaux de l\'IA',
        icon: <FiSun />,
        time: '9h00 - 12h30',
        color: '#3b82f6',
        slides: morningSlides.map((slide) => ({ 
          ...slide, 
          index: slides.findIndex(s => s.id === slide.id) 
        })).sort((a, b) => a.index - b.index)
      },
      {
        id: 'day1-afternoon',
        title: 'Jour 1 - Après-midi',
        subtitle: 'Outils IA Pratiques',
        icon: <FiSunset />,
        time: '14h00 - 17h30',
        color: '#f59e0b',
        slides: afternoonSlides.map((slide) => ({ 
          ...slide, 
          index: slides.findIndex(s => s.id === slide.id) 
        })).sort((a, b) => a.index - b.index)
      },
      {
        id: 'day2-morning',
        title: 'Jour 2 - Matin',
        subtitle: 'Projets en Équipe',
        icon: <FiTarget />,
        time: '9h00 - 12h00',
        color: '#10b981',
        slides: [] // Placeholder for future sessions
      },
      {
        id: 'day2-afternoon',
        title: 'Jour 2 - Après-midi',
        subtitle: 'Présentations & Conclusion',
        icon: <FiLayers />,
        time: '14h00 - 16h00',
        color: '#8b5cf6',
        slides: [] // Placeholder for future sessions
      }
    ];
  }, [slides]);

  // Get icon for slide type
  const getSlideIcon = (type) => {
    switch(type) {
      case 'title': return '🎯';
      case 'timeline': return '📅';
      case 'presentation': return '📊';
      case 'tool-showcase': return '🛠️';
      case 'tool-category': return '📦';
      case 'break': return '☕';
      case 'afternoon-break': return '☕';
      case 'afternoon-title': return '🌅';
      case 'prompt-engineering': return '💡';
      case 'practical-activity': return '🚀';
      case 'tool-links': return '🔗';
      default: return '📄';
    }
  };

  // Get readable title for timeline slides
  const getSlideTitle = (slide) => {
    if (slide.id && typeof slide.id === 'string' && slide.id.startsWith('timeline-')) {
      const year = slide.id.replace('timeline-', '');
      return `${year} - ${slide.title}`;
    }
    return slide.title;
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
              <h2>Plan de Formation</h2>
              <p className="header-subtitle">Intelligence Artificielle - Institut Français</p>
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
                      key={slide.id}
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
                  <div className="empty-icon">📚</div>
                  <h3>Sélectionnez une session</h3>
                  <p>Cliquez sur une session pour voir les slides disponibles</p>
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer */}
          <footer className="navigator-footer">
            <div className="progress-info">
              <span>Progression: {currentSlide + 1} / {slides.length}</span>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                />
              </div>
            </div>
            <div className="keyboard-hint">
              <kbd>ESC</kbd> pour fermer • <kbd>←</kbd> <kbd>→</kbd> pour naviguer
            </div>
          </footer>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SlideNavigator;