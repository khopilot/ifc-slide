import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './PresentationsSlide.css';

const PresentationsSlide = ({ slide }) => {
  const [drawnNumbers, setDrawnNumbers] = useState([]);
  const { format, lottery, feedbackGrid, recognitions } = slide.content;

  return (
    <div className="presentations-slide">
      <div className="presentations-header">
        <h1 className="presentations-title">{slide.title}</h1>
        <p className="presentations-subtitle">{slide.subtitle}</p>
      </div>

      <div className="presentations-content">
        <div className="content-wrapper">
          <div className="presentations-grid">
            <div className="format-section">
          <h2 className="section-title">📊 Format des Présentations</h2>
          <div className="format-card">
            <div className="format-duration">{format.duration}</div>
            <div className="format-structure">
              {format.structure.map((item, index) => (
                <motion.div
                  key={index}
                  className="structure-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="structure-icon">▸</span>
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

            <div className="lottery-section">
          <h2 className="section-title">{lottery.title}</h2>
          <div className="lottery-card">
            <p className="lottery-description">{lottery.description}</p>
            <div className="lottery-info">
              <span className="team-count">📊 {lottery.teams} équipes participantes</span>
            </div>
            <div className="lottery-instructions">
              <h3 className="instructions-title">Instructions :</h3>
              <ul className="instructions-list">
                {lottery.instructions.map((instruction, index) => (
                  <motion.li
                    key={index}
                    className="instruction-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="instruction-number">{index + 1}</span>
                    {instruction}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
          </div>

          <div className="feedback-section">
          <h2 className="section-title">{feedbackGrid.title}</h2>
          <div className="feedback-grid">
            {feedbackGrid.criteria.map((criterion, index) => (
              <motion.div
                key={index}
                className="feedback-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <h3 className="feedback-aspect">{criterion.aspect}</h3>
                <div className="feedback-questions">
                  {criterion.questions.map((question, idx) => (
                    <p key={idx} className="feedback-question">
                      <span className="question-mark">?</span>
                      {question}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

          <div className="recognitions-section">
          <h2 className="section-title">🏆 Reconnaissances</h2>
          <div className="recognitions-list">
            <AnimatePresence>
              {recognitions.map((recognition, index) => (
                <motion.div
                  key={index}
                  className="recognition-item"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  {recognition}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        </div>
      </div>

      <div className="presentations-note">
        💡 {slide.notes}
      </div>
    </div>
  );
};

export default PresentationsSlide;