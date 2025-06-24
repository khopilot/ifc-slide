import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import './ToolCard.css';

const ToolCard = ({ tool }) => {
  return (
    <motion.div
      className="tool-card"
      whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}
      transition={{ duration: 0.2 }}
    >
      <div className="tool-header">
        <img src={tool.logo} alt={tool.name} className="tool-logo" />
        <span className={`tool-badge ${tool.type.toLowerCase().replace('/', '-')}`}>
          {tool.type}
        </span>
      </div>
      
      <h3 className="tool-name">{tool.name}</h3>
      <p className="tool-description">{tool.description}</p>
      
      {tool.features && (
        <div className="tool-features">
          {tool.features.map((feature, index) => (
            <span key={index} className="feature-tag">
              {feature}
            </span>
          ))}
        </div>
      )}
      
      <a
        href={tool.url}
        target="_blank"
        rel="noopener noreferrer"
        className="tool-link"
      >
        Essayer <FiExternalLink />
      </a>
    </motion.div>
  );
};

export default ToolCard;