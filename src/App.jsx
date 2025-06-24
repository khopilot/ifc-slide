import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import { FiArrowLeft, FiArrowRight, FiMaximize, FiDownload, FiSun, FiMoon, FiGrid } from 'react-icons/fi';
import { allSlides as slidesData } from './data/allSlides';
import { aiTools } from './data/aiTools';
import SlideRenderer from './components/SlideRenderer';
import ProgressBar from './components/ProgressBar';
import SlideNavigator from './components/SlideNavigator';
import './styles/App.css';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showNavigator, setShowNavigator] = useState(false);
  const [showPresenterNotes, setShowPresenterNotes] = useState(false);

  const totalSlides = slidesData.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
    setShowNavigator(false);
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark');
  }, [isDarkMode]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          prevSlide();
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          toggleFullscreen();
          break;
        case 'Escape':
          if (showNavigator) {
            setShowNavigator(false);
          }
          break;
        case 'g':
        case 'G':
          e.preventDefault();
          setShowNavigator(!showNavigator);
          break;
        case 'p':
        case 'P':
          e.preventDefault();
          setShowPresenterNotes(!showPresenterNotes);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, toggleFullscreen, showNavigator, showPresenterNotes]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: true,
  });

  const currentSlideData = slidesData[currentSlide];

  return (
    <div className={`app ${isDarkMode ? 'dark' : ''}`} {...swipeHandlers}>
      <ProgressBar current={currentSlide} total={totalSlides} />
      
      <div className="slide-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="slide-wrapper"
          >
            <SlideRenderer slide={currentSlideData} tools={aiTools} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="controls">
        <button
          className="control-btn"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          aria-label="Slide précédente"
        >
          <FiArrowLeft />
        </button>
        
        <div className="slide-counter">
          {currentSlide + 1} / {totalSlides}
        </div>
        
        <button
          className="control-btn"
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          aria-label="Slide suivante"
        >
          <FiArrowRight />
        </button>
      </div>

      <div className="toolbar">
        <button
          className="toolbar-btn"
          onClick={toggleDarkMode}
          aria-label="Basculer mode sombre"
        >
          {isDarkMode ? <FiSun /> : <FiMoon />}
        </button>
        
        <button
          className="toolbar-btn"
          onClick={() => setShowNavigator(!showNavigator)}
          aria-label="Afficher navigateur"
        >
          <FiGrid />
        </button>
        
        <button
          className="toolbar-btn"
          onClick={toggleFullscreen}
          aria-label="Plein écran"
        >
          <FiMaximize />
        </button>
      </div>

      {showNavigator && (
        <SlideNavigator
          slides={slidesData}
          currentSlide={currentSlide}
          onSelectSlide={goToSlide}
          onClose={() => setShowNavigator(false)}
        />
      )}

      {showPresenterNotes && (
        <div className="presenter-notes">
          <h3>Notes du présentateur</h3>
          <p>Slide {currentSlide + 1}: {currentSlideData.title}</p>
          {currentSlideData.notes && <p>{currentSlideData.notes}</p>}
        </div>
      )}
    </div>
  );
}

export default App;