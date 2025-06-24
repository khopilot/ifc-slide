import AfternoonTitleSlide from './components/AfternoonTitleSlide';
import ToolCategorySlide from './components/ToolCategorySlide';
import ToolShowcaseSlide from './components/ToolShowcaseSlide';
import ToolLinksSlide from './components/ToolLinksSlide';
import AfternoonBreakSlide from './components/AfternoonBreakSlide';
import PresentationSlide from '../day1-morning/components/PresentationSlide';
import PracticalActivitySlide from './components/PracticalActivitySlide';

export const afternoonSlides = [
  // 1. Slide de titre
  {
    id: 1,
    type: 'afternoon-title',
    component: AfternoonTitleSlide,
    title: 'Outils IA Pratiques',
    duration: '3 min'
  },

  // 2. Introduction à la session
  {
    id: 2,
    type: 'presentation',
    component: PresentationSlide,
    title: 'Programme de l\'après-midi',
    content: {
      title: 'Au programme cet après-midi',
      text: [
        'Exploration des outils IA les plus pratiques et accessibles pour l\'Institut Français',
        'Démonstrations concrètes et modes d\'emploi détaillés',
        'Focus sur l\'application pratique dans vos missions quotidiennes'
      ],
      points: [
        'Outils de génération de texte et conversation',
        'Création visuelle et multimédia',
        'Recherche et analyse de données',
        'Productivité et automatisation'
      ]
    },
    duration: '2 min'
  },

  // 3. Catégorie: Conversation & Texte
  {
    id: 3,
    type: 'tool-category',
    component: ToolCategorySlide,
    title: 'Conversation & Génération de Texte',
    category: {
      title: 'Conversation & Génération de Texte',
      icon: '💬',
      description: 'Outils d\'intelligence conversationnelle pour dialoguer, rédiger et créer du contenu textuel de qualité professionnelle.',
      tools: [
        {
          name: 'ChatGPT',
          company: 'OpenAI',
          shortDescription: 'L\'assistant conversationnel le plus populaire au monde'
        },
        {
          name: 'Claude',
          company: 'Anthropic',
          shortDescription: 'IA éthique spécialisée dans l\'analyse de longs documents'
        },
        {
          name: 'Gemini',
          company: 'Google',
          shortDescription: 'Assistant multimodal intégré à l\'écosystème Google'
        },
        {
          name: 'LLaMA 4',
          company: 'Meta',
          shortDescription: 'Modèle open-source avec capacités multimodales'
        }
      ]
    },
    duration: '1 min'
  },

  // 4. ChatGPT
  {
    id: 4,
    type: 'tool-showcase',
    component: ToolShowcaseSlide,
    title: 'ChatGPT',
    tool: {
      name: 'ChatGPT',
      company: 'OpenAI',
      year: '2022',
      url: 'https://chat.openai.com/',
      image: '/src/sessions/day1-afternoon/images/chatgpt_illustration_1.jpg',
      description: 'ChatGPT est un modèle de langage avancé basé sur l\'architecture GPT, conçu pour comprendre et générer du texte de manière cohérente. Il permet des conversations fluides et la réalisation de diverses tâches linguistiques avec des capacités multimodales incluant DALL·E.',
      keyFeatures: [
        'Conversation en langage naturel fluide',
        'Génération de contenu varié (articles, scripts, emails)',
        'Traduction et résumé automatique',
        'Aide à la programmation et au débogage',
        'Capacités multimodales avec génération d\'images'
      ],
      useCases: [
        'Rédaction créative et professionnelle',
        'Assistance à la recherche documentaire',
        'Développement web et programmation',
        'Création visuelle pour présentations'
      ]
    },
    duration: '3 min'
  },

  // 5. Claude
  {
    id: 5,
    type: 'tool-showcase',
    component: ToolShowcaseSlide,
    title: 'Claude',
    tool: {
      name: 'Claude',
      company: 'Anthropic',
      year: '2023',
      url: 'https://claude.ai/',
      image: '/src/sessions/day1-afternoon/images/claude_illustration_1.jpg',
      description: 'Claude est un modèle de langage étendu conçu pour être utile, inoffensif et honnête. Il excelle dans le traitement de longs contextes et adhère à des principes d\'IA constitutionnelle pour des réponses éthiques et fiables.',
      keyFeatures: [
        'Traitement de très longs documents et conversations',
        'Raisonnement avancé et analyse approfondie',
        'Génération de texte de haute qualité',
        'Sécurité et éthique renforcées',
        'Capacités multimodales (Claude 4)'
      ],
      useCases: [
        'Analyse juridique ou financière de documents',
        'Rédaction de contenu long et structuré',
        'Support client avancé et chatbots',
        'Recherche académique et synthèse'
      ]
    },
    duration: '3 min'
  },

  // 6. Gemini
  {
    id: 6,
    type: 'tool-showcase',
    component: ToolShowcaseSlide,
    title: 'Gemini',
    tool: {
      name: 'Gemini',
      company: 'Google DeepMind',
      year: '2023',
      url: 'https://gemini.google.com/',
      image: '/src/sessions/day1-afternoon/images/gemini_illustration_1.jpeg',
      description: 'Gemini est une famille de modèles d\'IA multimodaux conçus pour être hautement performants et polyvalents. Capable de comprendre et d\'opérer sur différents types de données (texte, code, audio, image, vidéo).',
      keyFeatures: [
        'Multimodalité native (texte, code, audio, image, vidéo)',
        'Raisonnement avancé et planification stratégique',
        'Flexibilité (Ultra, Pro, Nano) selon les plateformes',
        'Génération de code de haute qualité',
        'Interaction conversationnelle naturelle'
      ],
      useCases: [
        'Analyse de données visuelles complexes',
        'Création de contenu multimédia',
        'Assistance au codage et développement',
        'Recherche et résumé automatique'
      ]
    },
    duration: '3 min'
  },

  // 7. Catégorie: Création Visuelle
  {
    id: 7,
    type: 'tool-category',
    component: ToolCategorySlide,
    title: 'Création Visuelle & Multimédia',
    category: {
      title: 'Création Visuelle & Multimédia',
      icon: '🎨',
      description: 'Outils de génération et d\'édition d\'images, vidéos et contenus visuels pour tous vos besoins créatifs et professionnels.',
      tools: [
        {
          name: 'DALL·E / GPT-Image-1',
          company: 'OpenAI',
          shortDescription: 'Génération d\'images de haute qualité à partir de texte'
        },
        {
          name: 'FLUX.1 Kontext',
          company: 'Black Forest Labs',
          shortDescription: 'Modèle de diffusion avancé pour images photo-réalistes'
        },
        {
          name: 'Canva',
          company: 'Canva Inc.',
          shortDescription: 'Plateforme de design graphique avec IA intégrée'
        },
        {
          name: 'Eleven Labs',
          company: 'Eleven Labs',
          shortDescription: 'Synthèse vocale et clonage de voix ultra-réalistes'
        }
      ]
    },
    duration: '1 min'
  },

  // 8. DALL·E
  {
    id: 8,
    type: 'tool-showcase',
    component: ToolShowcaseSlide,
    title: 'DALL·E / GPT-Image-1',
    tool: {
      name: 'DALL·E / GPT-Image-1',
      company: 'OpenAI',
      year: '2021',
      url: 'https://openai.com/dall-e-3',
      image: '/src/sessions/day1-afternoon/images/dalle_gpt_image_1_illustration_1.jpeg',
      description: 'DALL·E est un modèle d\'IA capable de générer des images à partir de descriptions textuelles. GPT-Image-1 représente une avancée majeure avec des capacités de création visuelle plus sophistiquées et contextuellement conscientes.',
      keyFeatures: [
        'Génération d\'images à partir de descriptions textuelles',
        'Édition d\'images existantes avec instructions',
        'Compréhension contextuelle avancée',
        'Génération de variations créatives',
        'Qualité photoréaliste et styles artistiques variés'
      ],
      useCases: [
        'Design graphique et campagnes publicitaires',
        'Art numérique et exploration créative',
        'Supports pédagogiques illustrés',
        'Assets visuels pour jeux et applications'
      ]
    },
    duration: '3 min'
  },

  // 9. FLUX.1
  {
    id: 9,
    type: 'tool-showcase',
    component: ToolShowcaseSlide,
    title: 'FLUX.1 Kontext',
    tool: {
      name: 'FLUX.1 Kontext',
      company: 'Black Forest Labs',
      year: '2024',
      url: 'https://blackforestlabs.ai/',
      image: '/src/sessions/day1-afternoon/images/flux_illustration_1.png',
      description: 'FLUX.1 Kontext est un modèle de génération d\'images développé par Black Forest Labs, se distinguant par sa capacité à générer des images de haute qualité avec une compréhension contextuelle avancée.',
      keyFeatures: [
        'Génération d\'images de haute fidélité',
        'Compréhension contextuelle des prompts',
        'Contrôle créatif avancé (style, composition)',
        'Vitesse et efficacité optimisées',
        'Intégration API robuste'
      ],
      useCases: [
        'Publicité et marketing visuel',
        'Design de produits et maquettes',
        'Illustration de livres et articles',
        'Conception pour jeux vidéo'
      ]
    },
    duration: '3 min'
  },

  // 10. Canva
  {
    id: 10,
    type: 'tool-showcase',
    component: ToolShowcaseSlide,
    title: 'Canva',
    tool: {
      name: 'Canva',
      company: 'Canva Inc.',
      year: '2013',
      url: 'https://www.canva.com/',
      image: '/src/sessions/day1-afternoon/images/canva_illustration_1.jpg',
      description: 'Canva est une plateforme de conception graphique en ligne qui rend le design accessible à tous. Avec son interface intuitive et ses outils IA intégrés, elle permet de créer facilement des contenus visuels professionnels.',
      keyFeatures: [
        'Interface glisser-déposer intuitive',
        'Vaste bibliothèque de modèles personnalisables',
        'Millions d\'éléments graphiques et médias',
        'Outils d\'édition d\'images et vidéos avec IA',
        'Collaboration en temps réel'
      ],
      useCases: [
        'Supports marketing (flyers, brochures, bannières)',
        'Présentations dynamiques et attrayantes',
        'Contenu pour réseaux sociaux',
        'Documents internes (rapports, CV, invitations)'
      ]
    },
    duration: '3 min'
  },

  // 11. Eleven Labs
  {
    id: 11,
    type: 'tool-showcase',
    component: ToolShowcaseSlide,
    title: 'Eleven Labs',
    tool: {
      name: 'Eleven Labs',
      company: 'Eleven Labs',
      year: '2022',
      url: 'https://elevenlabs.io/',
      image: '/src/sessions/day1-afternoon/images/eleven_labs_illustration_1.jpg',
      description: 'Eleven Labs est un pionnier de la synthèse vocale ultra-réaliste et du clonage de voix. Cette technologie révolutionnaire permet de créer des voix naturelles et expressives à partir de texte, ouvrant de nouvelles possibilités créatives.',
      keyFeatures: [
        'Synthèse vocale ultra-réaliste et naturelle',
        'Clonage de voix à partir d\'échantillons courts',
        'Support multilingue avec accent authentique',
        'Contrôle émotionnel et expressif',
        'API intégrable pour développeurs'
      ],
      useCases: [
        'Narration de livres audio et podcasts',
        'Doublage et localisation de contenu',
        'Assistants vocaux personnalisés',
        'Contenu éducatif et formation en ligne'
      ]
    },
    duration: '3 min'
  },

  // 12. Pause
  {
    id: 21,
    type: 'afternoon-break',
    component: AfternoonBreakSlide,
    title: 'Pause',
    duration: '15 min'
  },

  // 12. Catégorie: Recherche & Analyse
  {
    id: 21,
    type: 'tool-category',
    component: ToolCategorySlide,
    title: 'Recherche & Analyse',
    category: {
      title: 'Recherche & Analyse',
      icon: '🔍',
      description: 'Outils spécialisés dans la recherche d\'informations, l\'analyse de données et la synthèse de connaissances pour une prise de décision éclairée.',
      tools: [
        {
          name: 'Perplexity AI',
          company: 'Perplexity',
          shortDescription: 'Moteur de recherche conversationnel avec sources'
        },
        {
          name: 'NotebookLM',
          company: 'Google',
          shortDescription: 'Assistant de recherche et synthèse de documents'
        }
      ]
    },
    duration: '1 min'
  },

  // 13. Perplexity AI
  {
    id: 21,
    type: 'tool-showcase',
    component: ToolShowcaseSlide,
    title: 'Perplexity AI',
    tool: {
      name: 'Perplexity AI',
      company: 'Perplexity',
      year: '2022',
      url: 'https://www.perplexity.ai/',
      image: '/src/sessions/day1-afternoon/images/perplexity_ai_illustration_1.png',
      description: 'Perplexity AI est un moteur de recherche conversationnel qui fournit des réponses directes et sourcées. Il synthétise l\'information de multiples sources et présente des réponses concises avec citations vérifiables.',
      keyFeatures: [
        'Réponses directes avec sources citées',
        'Recherche conversationnelle interactive',
        'Découverte guidée de nouveaux sujets',
        'Modes de recherche spécialisés',
        'Interface utilisateur intuitive'
      ],
      useCases: [
        'Recherche rapide d\'informations factuelles',
        'Apprentissage de nouveaux domaines',
        'Vérification de faits avec sources',
        'Préparation de présentations documentées'
      ]
    },
    duration: '3 min'
  },

  // 14. NotebookLM
  {
    id: 21,
    type: 'tool-showcase',
    component: ToolShowcaseSlide,
    title: 'NotebookLM',
    tool: {
      name: 'NotebookLM',
      company: 'Google',
      year: '2023',
      url: 'https://notebooklm.google.com/',
      image: '/src/sessions/day1-afternoon/images/notebook_lm_illustration_1.png',
      description: 'NotebookLM est un assistant de recherche et d\'écriture qui aide à synthétiser des informations et créer du contenu à partir de vos propres documents. Il agit comme un "cerveau numérique" personnalisé.',
      keyFeatures: [
        'Analyse de documents sources personnels',
        'Génération de résumés et notes automatiques',
        'Brainstorming et génération d\'idées',
        'Rédaction assistée contextuelle',
        'Organisation structurée du savoir'
      ],
      useCases: [
        'Recherche académique et synthèse',
        'Rédaction de rapports détaillés',
        'Préparation de cours et supports',
        'Création de contenu créatif documenté'
      ]
    },
    duration: '3 min'
  },

  // 15. Catégorie: Productivité & Spécialisés
  {
    id: 21,
    type: 'tool-category',
    component: ToolCategorySlide,
    title: 'Productivité & Outils Spécialisés',
    category: {
      title: 'Productivité & Outils Spécialisés',
      icon: '⚡',
      description: 'Outils innovants pour améliorer la productivité, automatiser les tâches et explorer les dernières avancées en intelligence artificielle.',
      tools: [
        {
          name: 'Gamma',
          company: 'Gamma',
          shortDescription: 'Création de présentations par IA'
        },
        {
          name: 'Mistral AI',
          company: 'Mistral AI',
          shortDescription: 'LLM français open-source performant'
        },
        {
          name: 'Grok 2',
          company: 'xAI',
          shortDescription: 'IA conversationnelle avec personnalité unique'
        },
        {
          name: 'Manus AI',
          company: 'Manus',
          shortDescription: 'Agent autonome pour tâches complexes'
        }
      ]
    },
    duration: '1 min'
  },

  // 16. Gamma
  {
    id: 21,
    type: 'tool-showcase',
    component: ToolShowcaseSlide,
    title: 'Gamma',
    tool: {
      name: 'Gamma',
      company: 'Gamma',
      year: '2022',
      url: 'https://gamma.app/',
      image: '/src/sessions/day1-afternoon/images/gamma_illustration_1.jpeg',
      description: 'Gamma est un outil de présentation nouvelle génération qui utilise l\'IA pour créer des présentations, documents et pages web visuellement attrayants en un temps record, révolutionnant le processus de création.',
      keyFeatures: [
        'Création rapide par IA à partir de prompts',
        'Modèles adaptatifs et design cohérent',
        'Contenu interactif (vidéos, GIFs, web)',
        'Collaboration en temps réel',
        'Exportation flexible (PDF, web, présentation)'
      ],
      useCases: [
        'Présentations d\'affaires et pitchs',
        'Supports pédagogiques interactifs',
        'Documents marketing percutants',
        'Portfolios en ligne professionnels'
      ]
    },
    duration: '3 min'
  },

  // 17. Mistral AI
  {
    id: 21,
    type: 'tool-showcase',
    component: ToolShowcaseSlide,
    title: 'Mistral AI',
    tool: {
      name: 'Mistral AI',
      company: 'Mistral AI',
      year: '2023',
      url: 'https://chat.mistral.ai/',
      image: '/src/sessions/day1-afternoon/images/mistral_ai_illustration_1.webp',
      description: 'Mistral AI est une entreprise française spécialisée dans les modèles de langage open-source. Reconnue pour ses modèles performants et efficaces, elle rend l\'IA de pointe accessible avec transparence et flexibilité.',
      keyFeatures: [
        'Modèles open-source librement utilisables',
        'Performance élevée avec efficacité optimisée',
        'Génération de texte multilingue',
        'Raisonnement et compréhension avancés',
        'Personnalisation par fine-tuning'
      ],
      useCases: [
        'Développement de chatbots intelligents',
        'Génération de contenu automatisée',
        'Analyse de sentiments',
        'Systèmes de traduction multilingue'
      ]
    },
    duration: '3 min'
  },

  // 18. Grok 2
  {
    id: 21,
    type: 'tool-showcase',
    component: ToolShowcaseSlide,
    title: 'Grok 2',
    tool: {
      name: 'Grok 2',
      company: 'xAI (Elon Musk)',
      year: '2024',
      url: 'https://grok.x.ai/',
      image: '/src/sessions/day1-afternoon/images/grok_2_illustration_1.jpg',
      description: 'Grok 2 est un modèle de langage développé par xAI, conçu pour être humoristique et rebelle avec une personnalité distincte. Il offre des capacités de raisonnement améliorées et un accès en temps réel à l\'information.',
      keyFeatures: [
        'Personnalité unique et ton irrévérencieux',
        'Accès en temps réel via la plateforme X',
        'Raisonnement amélioré et précision accrue',
        'Capacités multimodales avec génération d\'images',
        'Compréhension contextuelle sur longues conversations'
      ],
      useCases: [
        'Divertissement et contenu humoristique',
        'Recherche d\'informations en temps réel',
        'Brainstorming créatif original',
        'Génération de contenu visuel pour réseaux sociaux'
      ]
    },
    duration: '3 min'
  },

  // 19. Récapitulatif et bonnes pratiques
  {
    id: 21,
    type: 'presentation',
    component: PresentationSlide,
    title: 'Bonnes Pratiques',
    content: {
      title: '🛡️ Bonnes Pratiques pour l\'Utilisation des Outils IA',
      sections: [
        {
          title: '✅ Vérification et Validation',
          points: [
            'Toujours croiser les sources pour les informations critiques',
            'Vérifier la cohérence et la logique des réponses IA',
            'Tester les suggestions de code avant de les déployer',
            'Garder un œil critique sur les créations visuelles'
          ]
        },
        {
          title: '🔒 Sécurité et Confidentialité',
          points: [
            'Ne jamais partager de données personnelles sensibles',
            'Éviter les informations confidentielles de l\'entreprise',
            'Utiliser des comptes professionnels dédiés',
            'Respecter le RGPD et les réglementations locales'
          ]
        },
        {
          title: '⚖️ Éthique et Propriété Intellectuelle',
          points: [
            'Respecter les droits d\'auteur sur le contenu généré',
            'Citer l\'utilisation d\'IA dans vos créations',
            'Éviter la génération de contenu trompeur ou biaisé',
            'Vérifier les licences d\'utilisation commerciale'
          ]
        },
        {
          title: '🎯 Optimisation et Performance',
          points: [
            'Apprendre à formuler des prompts précis et contextuels',
            'Itérer et affiner vos demandes pour de meilleurs résultats',
            'Combiner plusieurs outils pour des résultats optimaux',
            'Documenter vos prompts réussis pour réutilisation'
          ]
        },
        {
          title: '👥 Collaboration Humain-IA',
          points: [
            'L\'IA complète l\'expertise humaine, ne la remplace pas',
            'Apporter votre jugement professionnel aux résultats',
            'Utiliser l\'IA pour automatiser les tâches répétitives',
            'Consacrer le temps gagné à des activités créatives'
          ]
        }
      ]
    },
    duration: '5 min'
  },

  // 20. Conclusion
  {
    id: 22,
    type: 'presentation',
    component: PresentationSlide,
    title: 'Conclusion',
    content: {
      title: '🌟 L\'IA au Service de l\'Institut Français',
      sections: [
        {
          title: '📈 Impact et Opportunités',
          points: [
            'Amélioration de la productivité jusqu\'à 40% sur certaines tâches',
            'Création de contenus multilingues de qualité professionnelle',
            'Automatisation des tâches répétitives pour plus de créativité',
            'Nouvelles possibilités d\'engagement avec le public'
          ]
        },
        {
          title: '🚀 Recommandations pour Commencer',
          points: [
            'Identifiez 2-3 tâches chronophages dans votre quotidien',
            'Testez un outil IA adapté pendant une semaine',
            'Mesurez le temps gagné et la qualité obtenue',
            'Partagez vos retours d\'expérience avec l\'équipe'
          ]
        },
        {
          title: '💡 Vision à Long Terme',
          points: [
            'L\'IA comme assistant personnel pour chaque membre',
            'Création d\'une culture d\'innovation au sein de l\'Institut',
            'Développement de projets culturels augmentés par l\'IA',
            'Position de leader dans l\'utilisation éthique de l\'IA'
          ]
        },
        {
          title: '🎯 Prochaines Étapes',
          points: [
            'Formation continue sur les nouveaux outils',
            'Création d\'un groupe de partage de bonnes pratiques',
            'Mise en place de projets pilotes par département',
            'Évaluation trimestrielle des résultats et ajustements'
          ]
        }
      ]
    },
    duration: '3 min'
  },

  // 21. Slide de liens pour tester les outils
  {
    id: 23,
    type: 'tool-links',
    component: ToolLinksSlide,
    title: 'Liens des Outils IA',
    duration: '5 min'
  },

  // 22. Instructions pour l'activité pratique de demain
  {
    id: 24,
    type: 'practical-activity',
    component: PracticalActivitySlide,
    title: 'Activité Pratique - Demain',
    duration: '7 min',
    content: {
      sections: [
        {
          title: '👥 Formation des Équipes',
          points: [
            'Équipes de 2 personnes maximum',
            'Choisissez votre binôme librement',
            'Compétences complémentaires encouragées'
          ]
        },
        {
          title: '🎯 Objectif du Projet',
          points: [
            'Créer un projet lié aux activités de l\'Institut Français',
            'Utiliser au minimum 3 outils IA vus aujourd\'hui',
            'Appliquer les techniques de prompt engineering',
            'Produire un livrable concret (présentation, contenu, support...)'
          ]
        },
        {
          title: '🛠️ Ressources Disponibles',
          points: [
            'Tous les outils IA présentés aujourd\'hui',
            'Guides d\'utilisation de chaque outil',
            'Techniques de prompt engineering',
            'Accompagnement personnalisé du formateur'
          ]
        },
        {
          title: '📋 Exemples de Projets',
          points: [
            'Campagne de communication multilingue: ChatGPT + DALL·E + Canva',
            'Support pédagogique interactif: Gamma + Claude + NotebookLM',
            'Présentation événementielle: Perplexity + FLUX + Eleven Labs',
            'Kit de promotion culturelle: Gemini + Mistral + HeyGen'
          ]
        },
        {
          title: '⏰ Planning de Demain',
          points: [
            '9h00 - 9h30: Formation des équipes et choix des projets',
            '9h30 - 11h30: Développement avec accompagnement',
            '11h30 - 12h00: Présentations des réalisations',
            '12h00 - 12h30: Débriefing et perspectives'
          ]
        }
      ]
    }
  }
];

export default afternoonSlides; 