// Données des outils IA pour la formation
export const aiTools = {
  textGeneration: [
    {
      id: 'chatgpt',
      name: 'ChatGPT',
      description: 'Assistant conversationnel polyvalent',
      url: 'https://chat.openai.com',
      category: 'Génération de texte'
    },
    {
      id: 'claude',
      name: 'Claude',
      description: 'Assistant IA d\'Anthropic',
      url: 'https://claude.ai',
      category: 'Génération de texte'
    }
  ],
  imageGeneration: [
    {
      id: 'midjourney',
      name: 'Midjourney',
      description: 'Générateur d\'images artistiques',
      url: 'https://midjourney.com',
      category: 'Génération d\'images'
    },
    {
      id: 'dalle',
      name: 'DALL-E',
      description: 'Générateur d\'images OpenAI',
      url: 'https://openai.com/dall-e-2',
      category: 'Génération d\'images'
    }
  ]
};

export default aiTools; 