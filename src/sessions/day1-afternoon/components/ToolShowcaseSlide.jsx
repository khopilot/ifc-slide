import React from 'react';
import { motion } from 'framer-motion';
import './ToolShowcaseSlide.css';

const ToolShowcaseSlide = ({ slide }) => {
  const { name, description, keyFeatures, useCases, year, image, url } = slide.tool;

  return (
    <div className="tool-showcase-v2">
      <div className="showcase-layout">
        {/* Left side - Tool info */}
        <motion.div 
          className="showcase-info"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="showcase-header">
            {image && (
              <img src={image} alt={name} className="tool-logo" />
            )}
            <div>
              <h1 className="tool-title">{name}</h1>
              {year && <span className="tool-year-badge">{year}</span>}
            </div>
          </div>

          <p className="tool-description">{description}</p>

          <div className="tool-cta">
            {url && (
              <a 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="try-button"
              >
                Essayer {name} →
              </a>
            )}
          </div>
        </motion.div>

        {/* Right side - Features & Use cases */}
        <motion.div 
          className="showcase-details"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Features */}
          <div className="detail-section">
            <h3 className="detail-title">✨ Fonctionnalités</h3>
            <div className="features-compact">
              {keyFeatures.slice(0, 4).map((feature, index) => (
                <div key={index} className="feature-pill">
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Use cases */}
          <div className="detail-section">
            <h3 className="detail-title">🎯 Cas d'usage</h3>
            <div className="usecases-list">
              {useCases.slice(0, 3).map((useCase, index) => (
                <div key={index} className="usecase-item">
                  <span className="usecase-bullet">•</span>
                  {useCase}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ToolShowcaseSlide;