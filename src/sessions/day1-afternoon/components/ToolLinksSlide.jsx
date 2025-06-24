import React from 'react';
import { motion } from 'framer-motion';
import './ToolLinksSlide.css';

const ToolLinksSlide = () => {
  const toolLinks = [
    // Assistants Conversationnels
    { name: 'ChatGPT', url: 'https://chat.openai.com/', category: 'Conversation', icon: '💬' },
    { name: 'Claude', url: 'https://claude.ai/', category: 'Conversation', icon: '💬' },
    { name: 'Gemini', url: 'https://gemini.google.com/', category: 'Conversation', icon: '💬' },
    { name: 'Mistral', url: 'https://chat.mistral.ai/', category: 'Conversation', icon: '💬' },
    
    // Création Visuelle
    { name: 'DALL·E 3', url: 'https://openai.com/dall-e-3', category: 'Création', icon: '🎨' },
    { name: 'FLUX.1', url: 'https://blackforestlabs.ai/', category: 'Création', icon: '🎨' },
    { name: 'Canva', url: 'https://www.canva.com/', category: 'Création', icon: '🎨' },
    
    // Audio
    { name: 'Eleven Labs', url: 'https://elevenlabs.io/', category: 'Audio', icon: '🎵' },
    
    // Recherche & Analyse
    { name: 'Perplexity', url: 'https://www.perplexity.ai/', category: 'Recherche', icon: '🔍' },
    { name: 'NotebookLM', url: 'https://notebooklm.google.com/', category: 'Recherche', icon: '🔍' },
    
    // Productivité
    { name: 'Gamma', url: 'https://gamma.app/', category: 'Productivité', icon: '⚡' },
    { name: 'Grok 2', url: 'https://grok.x.ai/', category: 'Productivité', icon: '⚡' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="tool-links-slide-v2">
      <div className="links-container">
        {/* Header */}
        <motion.div 
          className="links-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="links-title">🔗 Accès Rapide aux Outils</h2>
          <p className="links-subtitle">Cliquez pour accéder directement aux outils</p>
        </motion.div>

        {/* Tools Grid */}
        <motion.div 
          className="tools-links-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {toolLinks.map((tool, index) => (
            <motion.a
              key={index}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="tool-link-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="link-icon">{tool.icon}</span>
              <span className="link-name">{tool.name}</span>
              <span className="link-arrow">→</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Footer tip */}
        <motion.div 
          className="links-tip"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          💡 Astuce : Gardez cette page ouverte dans un onglet pour un accès rapide
        </motion.div>
      </div>
    </div>
  );
};

export default ToolLinksSlide;