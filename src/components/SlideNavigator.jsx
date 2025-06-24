import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronRight, FiGrid } from 'react-icons/fi';
import './SlideNavigator.css';

const SlideNavigator = ({ slides, currentSlide, onSelectSlide, onClose }) => {
  const slideCategories = useMemo(() => {
    const categories = {};
    slides.forEach((slide, index) => {
      const category = slide.category || 'Général';
      if (!categories[category]) {
        categories[category] = [];
      }
      categories[category].push({ ...slide, index });
    });
    return categories;
  }, [slides]);

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3, ease: 'easeOut' }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  const modalVariants = {
    hidden: { 
      scale: 0.8, 
      opacity: 0,
      y: 50
    },
    visible: { 
      scale: 1, 
      opacity: 1,
      y: 0,
      transition: { 
        type: 'spring',
        damping: 25,
        stiffness: 300
      }
    },
    exit: { 
      scale: 0.9, 
      opacity: 0,
      y: 20,
      transition: { duration: 0.2 }
    }
  };

  const slideVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.03,
        duration: 0.5,
        ease: 'easeOut'
      }
    }),
    hover: {
      scale: 1.03,
      y: -8,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.97 }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="slide-navigator-overlay"
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose}
      >
        <motion.div
          className="slide-navigator"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
        >
          <header className="navigator-header">
            <div className="header-content">
              <FiGrid className="header-icon" />
              <h2>Navigation des slides</h2>
              <span className="slide-count">{slides.length} slides</span>
            </div>
            <motion.button 
              className="close-btn" 
              onClick={onClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <FiX />
            </motion.button>
          </header>
          
          <div className="navigator-body">
            {Object.entries(slideCategories).map(([category, categorySlides]) => (
              <div key={category} className="slide-category">
                <h3 className="category-title">
                  <span>{category}</span>
                  <span className="category-count">{categorySlides.length}</span>
                </h3>
                <div className="slides-grid">
                  {categorySlides.map((slide, i) => (
                    <motion.article
                      key={slide.id}
                      className={`slide-card ${slide.index === currentSlide ? 'active' : ''}`}
                      onClick={() => onSelectSlide(slide.index)}
                      variants={slideVariants}
                      custom={i}
                      initial="hidden"
                      animate="visible"
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <div className="slide-card-header">
                        <span className="slide-number">{slide.index + 1}</span>
                        {slide.index === currentSlide && (
                          <motion.span 
                            className="current-indicator"
                            layoutId="currentSlide"
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                          >
                            En cours
                          </motion.span>
                        )}
                      </div>
                      
                      <div className="slide-card-content">
                        <h4 className="slide-title">{slide.title}</h4>
                        {slide.subtitle && (
                          <p className="slide-subtitle">{slide.subtitle}</p>
                        )}
                      </div>
                      
                      <div className="slide-card-footer">
                        <span className="slide-type">{slide.type || 'slide'}</span>
                        <FiChevronRight className="slide-arrow" />
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SlideNavigator;