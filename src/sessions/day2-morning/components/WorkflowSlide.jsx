import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './WorkflowSlide.css';

const WorkflowSlide = ({ slide }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const renderWorkflowPresentation = () => (
    <div className="workflow-presentation">
      <motion.div 
        className="presentation-header"
        variants={itemVariants}
      >
        <h1 className="main-title">{slide.title}</h1>
        <p className="subtitle">{slide.subtitle}</p>
      </motion.div>

      <motion.div 
        className="program-container"
        variants={itemVariants}
      >
        <h2 className="program-intro">{slide.content.intro}</h2>
        <div className="program-grid">
          {slide.content.items.map((item, index) => (
            <motion.div
              key={index}
              className="program-item"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="item-icon">{item.icon}</div>
              <h3 className="item-title">{item.text}</h3>
              <p className="item-description">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );

  const renderWorkflowIntro = () => (
    <div className="workflow-intro">
      <motion.div 
        className="intro-header"
        variants={itemVariants}
      >
        <h1 className="main-title">{slide.content.mainTitle}</h1>
        <p className="description">{slide.content.description}</p>
      </motion.div>

      <motion.div 
        className="principle-container"
        variants={itemVariants}
      >
        <h3 className="principle-title">{slide.content.principle.title}</h3>
        <p className="principle-text">{slide.content.principle.text}</p>
      </motion.div>

      <motion.div 
        className="workflow-steps"
        variants={itemVariants}
      >
        {slide.content.workflow.map((step, index) => (
          <motion.div
            key={index}
            className="workflow-step"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="step-icon">{step.icon}</div>
            <h4 className="step-title">{step.step}</h4>
            <p className="step-tool">{step.tool}</p>
            <p className="step-description">{step.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );

  const renderWorkflowDetail = () => (
    <div className="workflow-detail">
      <motion.div 
        className="detail-header"
        variants={itemVariants}
      >
        <h1 className="main-title">{slide.title}</h1>
        <p className="subtitle">{slide.subtitle}</p>
        <div className="example-badge">
          Exemple : {slide.content.example}
        </div>
      </motion.div>

      <motion.div 
        className="workflow-timeline"
        variants={containerVariants}
      >
        {slide.content.steps ? (
          // Format étapes séquentielles
          <div className="steps-container">
            {slide.content.steps.map((step, index) => (
              <motion.div
                key={index}
                className={`workflow-step-card ${currentStep === index ? 'active' : ''}`}
                variants={itemVariants}
                onClick={() => setCurrentStep(index)}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`step-number ${step.color}`}>{step.number}</div>
                <div className="step-content">
                  <h4 className="step-title">
                    {step.icon} {step.title}
                  </h4>
                  <p className="step-prompt">"{step.prompt}"</p>
                  <p className="step-result">→ {step.result}</p>
                  <span className="step-tool">{step.tool}</span>
                </div>
              </motion.div>
            ))}
          </div>
        ) : slide.content.phases ? (
          // Format phases avec sous-étapes
          <div className="phases-container">
            {slide.content.phases.map((phase, index) => (
              <motion.div
                key={index}
                className="phase-section"
                variants={itemVariants}
              >
                <h3 className="phase-title">
                  {phase.icon} {phase.title}
                </h3>
                <div className="phase-steps">
                  {phase.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="phase-step">
                      <h4 className="phase-step-title">{step.title}</h4>
                      <p className="phase-step-tool">{step.tool}</p>
                      <p className="phase-step-prompt">"{step.prompt}"</p>
                      <p className="phase-step-result">→ {step.result}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        ) : slide.content.workflows ? (
          // Format workflows multiples
          <div className="workflows-grid">
            {slide.content.workflows.map((workflow, index) => (
              <motion.div
                key={index}
                className="workflow-card"
                variants={itemVariants}
              >
                <h3 className="workflow-title">
                  {workflow.icon} {workflow.title}
                </h3>
                <ul className="workflow-steps-list">
                  {workflow.steps.map((step, stepIndex) => (
                    <li key={stepIndex}>{step}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        ) : null}

        {slide.content.timeComparison && (
          <motion.div 
            className="time-comparison"
            variants={itemVariants}
          >
            <div className="time-before">
              <span className="time-label">Avant :</span>
              <span className="time-value">{slide.content.timeComparison.before}</span>
            </div>
            <div className="time-arrow">→</div>
            <div className="time-after">
              <span className="time-label">Avec l'IA :</span>
              <span className="time-value">{slide.content.timeComparison.after}</span>
            </div>
          </motion.div>
        )}

        {slide.content.benefits && (
          <motion.div 
            className="benefits-section"
            variants={itemVariants}
          >
            <h3>Avantages :</h3>
            <ul className="benefits-list">
              {slide.content.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.div>
    </div>
  );

  const renderSlideContent = () => {
    switch (slide.type) {
      case 'workflow-presentation':
        return renderWorkflowPresentation();
      case 'workflow-intro':
        return renderWorkflowIntro();
      case 'workflow-detail':
        return renderWorkflowDetail();
      default:
        return <div>Type de slide non reconnu</div>;
    }
  };

  return (
    <div className={`workflow-slide ${slide.type} ${slide.department || ''}`}>
      <motion.div
        className="workflow-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {renderSlideContent()}
      </motion.div>

      {/* Duration indicator */}
      {slide.duration && (
        <div className="duration-indicator">
          <span>{slide.duration}</span>
        </div>
      )}

      {/* Navigation dots for steps */}
      {slide.content?.steps && (
        <div className="step-navigation">
          {slide.content.steps.map((_, index) => (
            <button
              key={index}
              className={`nav-dot ${currentStep === index ? 'active' : ''}`}
              onClick={() => setCurrentStep(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkflowSlide; 