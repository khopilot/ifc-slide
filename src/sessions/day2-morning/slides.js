// Jour 2 - Matinée : Workflows IA Optimisés
// 9h00 - 12h00

export const day2MorningSlides = [
  // Slide de titre principal
  {
    id: 'day2-morning-title',
    type: 'title',
    title: 'Jour 2 - Workflows IA',
    subtitle: 'Optimiser votre quotidien à l\'Institut Français du Cambodge',
    presenter: 'Institut Français du Cambodge',
    organization: 'Formation Professionnelle IA',
    date: 'Jour 2 - Matinée (9h00 - 12h00)',
    duration: '3h00'
  },

  // Slide d'accueil de la journée
  {
    id: 'day2-welcome',
    type: 'workflow-presentation',
    title: 'Bienvenue pour cette deuxième journée !',
    subtitle: 'Workflows optimisés pour l\'IFC',
    content: {
      intro: 'Au programme ce matin :',
      items: [
        {
          icon: '🔄',
          text: 'Récapitulatif de la journée 1',
          description: 'Révision des outils découverts hier'
        },
        {
          icon: '🎯',
          text: 'Workflows optimisés par département',
          description: 'Stratégies spécifiques à chaque service'
        },
        {
          icon: '💼',
          text: 'Cas d\'usage concrets pour l\'IFC',
          description: 'Exemples pratiques et applicables'
        },
        {
          icon: '🚀',
          text: 'Intégration simple et efficace',
          description: 'Comment démarrer dès aujourd\'hui'
        }
      ]
    },
    duration: '10 min',
    notes: 'Accueillir les participants et présenter l\'objectif pratique de la matinée'
  },

  // Récapitulatif jour 1
  {
    id: 'day2-recap',
    type: 'recap-slide',
    title: 'Récapitulatif Jour 1',
    subtitle: 'Ce que nous avons appris hier',
    content: {
      categories: [
        {
          title: 'IA Conversationnelle',
          icon: '💬',
          color: 'blue',
          tools: [
            { name: 'ChatGPT', purpose: 'pour créer' },
            { name: 'Claude', purpose: 'pour analyser' },
            { name: 'Perplexity', purpose: 'pour rechercher' }
          ]
        },
        {
          title: 'IA Créative',
          icon: '🎨',
          color: 'purple',
          tools: [
            { name: 'DALL-E', purpose: 'pour illustrer' },
            { name: 'Midjourney', purpose: 'pour l\'art' },
            { name: 'Canva AI', purpose: 'pour designer' }
          ]
        },
        {
          title: 'Outils Spécialisés',
          icon: '🛠️',
          color: 'green',
          tools: [
            { name: 'Heygen', purpose: 'pour les vidéos' },
            { name: 'ElevenLabs', purpose: 'pour l\'audio' },
            { name: 'Gamma', purpose: 'pour présenter' }
          ]
        }
      ],
      conclusion: 'Aujourd\'hui : Comment combiner ces outils pour votre travail quotidien à l\'IFC'
    },
    duration: '15 min',
    notes: 'Faire un tour rapide pour voir si des questions sont restées en suspens'
  },

  // Re-explication des concepts clés
  {
    id: 'day2-concept-clarification',
    type: 'concept-clarification',
    title: 'Re-explication : Outils · Prompts · Agents',
    subtitle: 'Clarifier des concepts clés avant les ateliers',
    time: '09h15 - 09h30',
    content: {
      objective: 'S\'assurer que tout le monde comprend bien les termes essentiels avant de passer aux workflows',
      concepts: [
        {
          term: 'Outil IA',
          definition: 'Application unique répondant à un besoin précis (chat, image, traduction).',
          example: 'ChatGPT rédige un e-mail ; DALL·E crée un visuel.',
          metaphor: 'Tournevis'
        },
        {
          term: 'Prompt',
          definition: 'Texte d\'instruction qu\'on envoie à l\'IA. Plus il est clair, meilleure est la réponse.',
          example: '« Résumé ce texte en khmer de 100 mots. »',
          metaphor: 'Instructions "visser ceci"'
        },
        {
          term: 'Agent',
          definition: 'IA qui enchaîne plusieurs actions via prompts successifs, guidée par l\'humain.',
          example: 'Perplexity → ChatGPT → Canva dans nos scénarios.',
          metaphor: 'Ouvrier'
        },
        {
          term: 'Agent autonome',
          definition: 'IA qui décide elle-même des étapes, appelle des outils, vérifie le résultat.',
          example: 'Manus génère un site complet à partir d\'un brief.',
          metaphor: 'Chef de chantier qui planifie et fait tout seul'
        }
      ],
      summary: 'Outil = tournevis ; Prompt = instructions « visser ceci » ; Agent = ouvrier ; Agent autonome = chef de chantier'
    },
    duration: '15 min',
    notes: 'Utiliser des exemples très concrets et vérifier la compréhension avec des questions simples'
  },

  // Introduction aux workflows
  {
    id: 'day2-workflow-intro',
    type: 'workflow-intro',
    title: 'Workflows IA Optimisés',
    subtitle: 'La synergie des outils',
    content: {
      mainTitle: 'Le Pouvoir des Workflows',
      description: 'Combiner les forces de chaque outil pour des résultats exceptionnels',
      principle: {
        title: 'Principe Clé',
        text: 'Chaque outil IA a ses forces → Utilisez le bon outil au bon moment'
      },
      workflow: [
        {
          step: 'Rechercher',
          icon: '🔍',
          tool: 'Perplexity',
          description: 'Collecter des informations fiables'
        },
        {
          step: 'Brainstormer',
          icon: '💡',
          tool: 'ChatGPT',
          description: 'Générer des idées créatives'
        },
        {
          step: 'Structurer',
          icon: '📝',
          tool: 'Claude',
          description: 'Organiser et analyser le contenu'
        },
        {
          step: 'Créer',
          icon: '🎨',
          tool: 'Outils spécialisés',
          description: 'Produire le contenu final'
        }
      ]
    },
    duration: '20 min',
    notes: 'Expliquer l\'importance de créer des workflows plutôt que d\'utiliser un seul outil'
  },

  // Workflow Communication
  {
    id: 'day2-workflow-communication',
    type: 'workflow-detail',
    title: 'Workflow : Service Communication',
    subtitle: 'Campagne de communication complète',
    department: 'communication',
    content: {
      example: 'Lancement d\'un nouveau cours de français',
      steps: [
        {
          number: 1,
          title: 'Recherche avec Perplexity',
          icon: '🔍',
          prompt: 'Meilleures pratiques marketing pour cours de langue en Asie du Sud-Est',
          result: 'Obtenir des insights locaux et tendances actuelles',
          tool: 'Perplexity',
          color: 'blue'
        },
        {
          number: 2,
          title: 'Brainstorm avec ChatGPT',
          icon: '💡',
          prompt: '20 idées de slogans pour cours de français au Cambodge',
          result: 'Générer des concepts créatifs rapidement',
          tool: 'ChatGPT',
          color: 'green'
        },
        {
          number: 3,
          title: 'Rédaction avec Claude',
          icon: '📝',
          prompt: 'Rédiger posts réseaux sociaux en français/khmer/anglais',
          result: 'Contenu structuré et adapté culturellement',
          tool: 'Claude',
          color: 'purple'
        },
        {
          number: 4,
          title: 'Visuels avec Canva AI + DALL-E',
          icon: '🎨',
          prompt: 'Créer affiches et visuels réseaux sociaux',
          result: 'Visuels professionnels en quelques minutes',
          tool: 'Canva AI + DALL-E',
          color: 'orange'
        },
        {
          number: 5,
          title: 'Vidéo avec Heygen',
          icon: '🎬',
          prompt: 'Créer vidéo promotionnelle avec avatar parlant khmer',
          result: 'Vidéo multilingue sans tournage',
          tool: 'Heygen',
          color: 'red'
        }
      ],
      timeComparison: {
        before: '2-3 jours',
        after: '2-3 heures'
      }
    },
    duration: '25 min',
    notes: 'Montrer des exemples concrets de chaque étape'
  },

  // Pause
  {
    id: 'day2-morning-break',
    type: 'break',
    title: 'Pause',
    icon: '☕',
    duration: '15 minutes',
    time: '10h30 - 10h45',
    message: 'Échangez sur les workflows que vous pourriez mettre en place dans vos services !'
  },

  // Workflow Cours
  {
    id: 'day2-workflow-cours',
    type: 'workflow-detail',
    title: 'Workflow : Service des Cours',
    subtitle: 'Création de matériel pédagogique',
    department: 'courses',
    content: {
      example: 'Créer un module sur la culture française',
      phases: [
        {
          title: 'Phase de Préparation',
          icon: '📖',
          steps: [
            {
              title: 'Recherche Culturelle',
              tool: 'Perplexity',
              prompt: 'Aspects culturels français importants pour étudiants cambodgiens',
              result: 'Contenu actualisé et pertinent localement'
            },
            {
              title: 'Plan de Cours',
              tool: 'Claude',
              prompt: 'Créer plan détaillé cours culture française niveau A2',
              result: 'Structure pédagogique claire et progressive'
            }
          ]
        },
        {
          title: 'Phase de Création',
          icon: '🎨',
          steps: [
            {
              title: 'Supports Visuels',
              tool: 'DALL-E + Canva',
              prompt: 'Illustrations monuments français style éducatif',
              result: 'Images adaptées au contexte pédagogique'
            },
            {
              title: 'Exercices Interactifs',
              tool: 'ChatGPT',
              prompt: 'Quiz culture française avec références cambodgiennes',
              result: 'Activités engageantes et culturellement sensibles'
            }
          ]
        }
      ],
      benefits: [
        'Matériel toujours à jour',
        'Adapté au contexte local',
        'Économie de temps importante',
        'Qualité professionnelle'
      ]
    },
    duration: '25 min',
    notes: 'Montrer comment l\'IA peut enrichir la pédagogie'
  },

  // Workflow Administration
  {
    id: 'day2-workflow-admin',
    type: 'workflow-detail',
    title: 'Workflow : Service Administratif',
    subtitle: 'Optimisation des processus internes',
    department: 'admin',
    content: {
      example: 'Création de documents officiels multilingues',
      workflows: [
        {
          title: 'Traduction de Documents',
          icon: '🌐',
          steps: [
            'Claude : Traduction français → anglais/khmer',
            'Vérification culturelle et administrative',
            'Mise en forme avec templates'
          ]
        },
        {
          title: 'Rapports Automatisés',
          icon: '📊',
          steps: [
            'ChatGPT : Analyse de données',
            'Gamma : Présentation visuelle',
            'Export multi-formats'
          ]
        },
        {
          title: 'Communication Interne',
          icon: '📧',
          steps: [
            'Perplexity : Benchmarks sectoriels',
            'Claude : Rédaction newsletters',
            'Canva : Templates visuels'
          ]
        }
      ]
    },
    duration: '20 min',
    notes: 'Focus sur l\'efficacité administrative'
  },

  // Atelier pratique
  {
    id: 'day2-workshop',
    type: 'practical-workshop',
    title: 'Atelier Pratique',
    subtitle: 'Créez votre premier workflow IA',
    content: {
      objective: 'Chaque participant crée un workflow adapté à son service',
      timeAllocation: '45 minutes',
      groups: [
        {
          service: 'Communication',
          challenge: 'Créer une campagne pour un événement culturel',
          tools: ['Perplexity', 'ChatGPT', 'DALL-E', 'Canva']
        },
        {
          service: 'Cours',
          challenge: 'Développer un cours thématique complet',
          tools: ['Claude', 'ChatGPT', 'DALL-E', 'Gamma']
        },
        {
          service: 'Administration',
          challenge: 'Automatiser un processus récurrent',
          tools: ['Claude', 'ChatGPT', 'Perplexity']
        }
      ],
      steps: [
        '1. Formation des groupes par service (5 min)',
        '2. Brainstorming et définition du workflow (15 min)',
        '3. Test et création de contenu (20 min)',
        '4. Préparation de la présentation (5 min)'
      ]
    },
    duration: '45 min',
    notes: 'Accompagner chaque groupe, résoudre les problèmes techniques'
  },

  // Présentations
  {
    id: 'day2-presentations',
    type: 'group-presentations',
    title: 'Présentations des Groupes',
    subtitle: 'Partage des workflows créés',
    content: {
      format: '5 minutes par groupe + 3 minutes de questions',
      evaluation: [
        'Pertinence du workflow',
        'Utilisation créative des outils',
        'Applicabilité immédiate',
        'Présentation claire'
      ],
      prizes: 'Reconnaissance du workflow le plus innovant'
    },
    duration: '30 min',
    notes: 'Encourager les retours constructifs entre groupes'
  },

  // Conclusion matinée
  {
    id: 'day2-morning-conclusion',
    type: 'conclusion',
    title: 'Conclusion de la Matinée',
    subtitle: 'Vers l\'intégration des workflows IA',
    content: {
      achievements: [
        'Compréhension des workflows IA',
        'Création d\'un premier workflow personnalisé',
        'Vision concrète de l\'implémentation'
      ],
      nextSteps: [
        'Test des workflows dans vos services',
        'Adaptation aux besoins spécifiques',
        'Formation continue des équipes'
      ],
      resources: [
        'Guide des workflows IFC',
        'Templates de prompts',
        'Support technique continu'
      ]
    },
    duration: '15 min',
    notes: 'Préparer la transition vers l\'après-midi'
  }
];

export default day2MorningSlides; 